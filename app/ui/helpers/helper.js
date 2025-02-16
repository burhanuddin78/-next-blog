export const TOAST_SETTINGS = {
	position: 'top-right',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'light',
};

export const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5 MB
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'];

export const calculateTimeDifference = (publishTime) => {
	if (!publishTime) return 'Invalid date'; // Handle empty input

	const publishDate = new Date(publishTime);
	if (isNaN(publishDate.getTime())) return 'Invalid date'; // Handle invalid dates

	const currentDate = new Date();
	const difference = Math.floor((currentDate - publishDate) / 1000); // Convert to seconds

	if (difference < 60) return 'Just now'; // Less than a minute

	const minutes = Math.floor(difference / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const months = Math.floor(days / 30.44); // More accurate month calculation
	const years = Math.floor(days / 365.25); // More accurate year calculation

	if (years > 0) return `${years} year${years === 1 ? '' : 's'} ago`;
	if (months > 0) return `${months} month${months === 1 ? '' : 's'} ago`;
	if (days > 0) return `${days} day${days === 1 ? '' : 's'} ago`;
	if (hours > 0) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
	return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
};

export const formatRegionalDate = (date, locale = 'en-US') => {
	try {
		// Format date based on locale
		const formattedDate = new Intl.DateTimeFormat(locale, {
			dateStyle: 'medium',
		}).format(new Date(date));

		return formattedDate;
	} catch (error) {
		return '';
	}
};

export const capitalizeFirstLetter = (str) => {
	if (!str || str == '') return '';
	return str?.charAt(0)?.toUpperCase() + str.slice(1);
};
