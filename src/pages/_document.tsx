import { Head, Html, Main, NextScript } from "next/document";
import { FC } from "react";

const modeScript = `
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    const isSystemDarkMode = darkModeMediaQuery.matches
    const isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`;

const Document: FC = () => {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      </Head>

      <body className="bg-white antialiased dark:bg-gray-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
