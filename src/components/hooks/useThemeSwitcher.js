import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState('');

    useEffect(() => {
        const userPref = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null;

        let initialMode;
        if (userPref) {
            initialMode = userPref === 'dark' ? 'dark' : 'light';
        } else {
            initialMode = window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light';
        }
        setMode(initialMode);
        if (initialMode === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        const handleChange = () => {
            const newMode = window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light';
            setMode(newMode);
            if (newMode === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        const mediaQuery = window.matchMedia(preferDarkQuery);
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (mode === 'dark') {
                window.localStorage.setItem('theme', 'dark');
                document.documentElement.classList.add('dark');
            } else {
                window.localStorage.setItem('theme', 'light');
                document.documentElement.classList.remove('dark');
            }
        }
    }, [mode]);

    return [mode, setMode];
};

export default useThemeSwitcher;
