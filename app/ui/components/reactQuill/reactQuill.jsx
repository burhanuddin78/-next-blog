'use client';

import React from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.bubble.css';
import './styles.css';
// Font sizes to whitelist
const fontSizeArr = ['8px', '9px', '10px', '12px', '14px', '16px', '20px', '24px', '32px', '42px', '54px', '68px', '84px', '98px'];

// Register font sizes
const Size = ReactQuill.Quill.import('attributors/style/size');
Size.whitelist = fontSizeArr;
ReactQuill.Quill.register(Size, true);

// Register custom fonts
const Font = ReactQuill.Quill.import('formats/font');
Font.whitelist = ['mirza', 'roboto']; // Allow only 'mirza', 'roboto', and default font
ReactQuill.Quill.register(Font, true);

// Toolbar configuration
const toolbarOptions = [
	// [{ size: fontSizeArr }], // Font sizes dropdown
	['bold', 'italic', 'underline', 'strike'], // Text formatting buttons
	['blockquote', 'code-block'], // Blockquote and code block
	[{ list: 'ordered' }, { list: 'bullet' }], // Ordered and unordered lists
	[{ header: [1, 2, 3, 4, 5, 6, false] }], // Headers dropdown
	[{ font: [] }], // Font selection dropdown
	[{ align: [] }], // Alignment options
	['clean'], // Remove formatting button
];

// Quill modules configuration
const modules = {
	toolbar: toolbarOptions,
};

// Default props for the editor
const defaultProps = {
	theme: 'bubble',
	placeholder: 'Start typing...',
};

function Editor(props) {
	return (
		<div>
			<ReactQuill
				modules={modules}
				{...defaultProps}
				{...props}
			/>
		</div>
	);
}

export default Editor;
