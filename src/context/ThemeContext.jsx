'use client';

import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
	if (typeof window !== 'undefined') {
		const value = localStorage.getItem('theme');
		return value || 'light';
	}
};

const categoryList = [
	{
		id: 0,
		title: 'style',
		src: '/style.png',
		color: '#57c4ff31',
	},
	{
		id: 1,
		title: 'fashion',
		src: '/fashion.png',
		color: '#da85c731',
	},
	{
		id: 5,
		title: 'coding',
		src: '/coding.png',
		color: '#5e4fff31',
	},
	{
		id: 2,
		title: 'food',
		src: '/food.png',
		color: '#7fb88133',
	},
	{
		id: 3,
		title: 'travel',
		src: '/travel.png',
		color: '#ff795736',
	},
	{
		id: 4,
		title: 'culture',
		src: '/culture.png',
		color: '#ffb04f45',
	},
];

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		return getFromLocalStorage();
	});

	const toggle = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	return <ThemeContext.Provider value={{ theme, categoryList, toggle }}>{children}</ThemeContext.Provider>;
};
