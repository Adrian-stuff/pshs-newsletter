'use client'

import Script from 'next/script'

import { defaultTheme, themeLocalStorageKey } from '../ThemeSelector/types'
import { Nunito_Sans } from 'next/font/google'

const nunito_sans = Nunito_Sans({ subsets: ['latin'], weight: '200' })
export const InitTheme: React.FC = () => {
  return (
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <>
      <style jsx global>{`
        html {
          font-family: ${nunito_sans.style.fontFamily};
        }
      `}</style>
      <Script
        id="theme-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
  (function () {
    document.documentElement.setAttribute('data-theme', "light")
  })();
  `,
        }}
      />
    </>
  )
}
