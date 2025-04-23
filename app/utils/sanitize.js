import { JSDOM } from 'jsdom';
import createDOMPurify from 'dompurify';
import truncate from 'html-truncate';

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

function isHeadingLikeText(text) {
	const trimmed = text.trim();

	const wordCount = trimmed.split(/\s+/).length;
	const isAllUpper = /^[A-Z\s]+$/.test(trimmed);
	const isTitleCase = /^[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*$/.test(trimmed);

	return wordCount < 8 && (isAllUpper || isTitleCase);
}

export function sanitizeAndTruncate(html, maxLength) {
	const cleanHTML = DOMPurify.sanitize(html, { WHOLE_DOCUMENT: false });

	const truncatedHTML = truncate(cleanHTML, maxLength);
	const wrapper = window.document.createElement('div');
	wrapper.innerHTML = truncatedHTML;

	const allElements = wrapper.querySelectorAll('*');

	allElements.forEach((el) => {
		const tag = el.tagName.toLowerCase();

		// Remove real heading tags
		if (tag.startsWith('h') && tag.length === 2 && !isNaN(tag[1])) {
			el.remove();
		}

		// Replace non-<p> tags with <p>
		else if (tag !== 'p') {
			const newP = window.document.createElement('p');
			newP.innerHTML = el.innerHTML;
			el.replaceWith(newP);
		}
	});

	// Run again to handle <p> that look like headings
	const ps = wrapper.querySelectorAll('p');

	ps.forEach((p) => {
		const text = p.textContent || '';

		const boldTags = p.querySelectorAll('b, strong');
		const isBoldOnly = boldTags.length > 0 && boldTags.length === p.childNodes.length;

		if (isHeadingLikeText(text) && isBoldOnly) {
			p.remove(); // remove heading-like <p>
		}
	});

	return wrapper.innerHTML;
}
