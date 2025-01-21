// Create a Providers component to wrap your application with all the components requiring 'use client', such as next-nprogress-bar or your different contexts...
'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressBarProviders = ({ children }) => {
	return (
		<>
			<ProgressBar
				height='3px'
				color='#e60505'
				options={{ showSpinner: false }}
				shallowRouting
			/>
			{children}
		</>
	);
};

export default ProgressBarProviders;
