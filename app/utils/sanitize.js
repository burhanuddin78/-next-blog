import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import truncate from 'html-truncate';

// Setup DOMPurify for server-side use
const window = new JSDOM('').window;
const purify = DOMPurify(window);

export function sanitizeAndTruncate(html, maxLength) {
	const cleanHTML = purify.sanitize(html); // Remove unsafe HTML
	return truncate(cleanHTML, maxLength); // Truncate while keeping formatting
}
