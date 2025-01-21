'use client';

import { ThemeContext } from '@/app/ui/components/context/ThemeContext.jsx';
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext, useEffect, useState } from 'react';

const ThemeProvider = ({ children }) => {
	const { theme } = useContext(ThemeContext);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (mounted) {
		return <div className={theme}>{children}</div>;
	}
};

export default ThemeProvider;
