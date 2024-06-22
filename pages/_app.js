import '../theme.scss';
import { useState, useEffect } from 'react';

export const darkMode = true;

export const setThemeMode = (theme) => {
  let html = document.documentElement;
  if (html.classList.contains(`dark`)) html.classList.remove(`dark`);
  if (html.classList.contains(`light`)) html.classList.remove(`light`);
  html.classList.add(theme);
  html.style = `color-scheme: ${theme}`;
  html.setAttribute(`data-theme`, theme);
  localStorage.setItem(`theme`, theme);
}

export default function ReactApplication({ Component, pageProps }) {
  let [theme, setTheme] = useState(`dark`);

  useEffect(() => {
    if (darkMode) {
      if (darkMode) {
        setTheme(`dark`);
        setThemeMode(`dark`);
      } else {
        setTheme(`light`);
        setThemeMode(`light`);
      }
    }
  }, [])

  return <Component {...pageProps} />
}