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
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png'];

export const calculateTimeDifference = (publishTime) => {
	// Convert publish time string to a JavaScript Date object
	const publishDate = new Date(publishTime);

	// Get the current time
	const currentDate = new Date();

	// Calculate the difference in milliseconds
	const difference = currentDate - publishDate;

	// Convert difference to minutes, hours, days, months, and years
	const minutes = Math.floor((difference / (1000 * 60)) % 60);
	const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
	const days = Math.floor(difference / (1000 * 60 * 60 * 24));
	const months = Math.floor(days / 30);
	const years = Math.floor(months / 12);

	let timeString = '';

	if (years > 0) {
		timeString += years + (years === 1 ? ' year ' : ' years ');
	}
	if (months > 0) {
		timeString += months + (months === 1 ? ' month ' : ' months ');
	}
	if (days > 0) {
		timeString += days + (days === 1 ? ' day ' : ' days ');
	}
	if (hours > 0) {
		timeString += hours + (hours === 1 ? ' hour ' : ' hours ');
	}
	if (minutes > 0) {
		timeString += minutes + (minutes === 1 ? ' minute' : ' minutes');
	}

	return timeString.trim();
};
