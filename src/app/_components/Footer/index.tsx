import React from 'react'
import Link from 'next/link'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter, fetchGlobals } from '../../_api/fetchGlobals'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
import { Gutter } from '../Gutter'
import { CMSLink } from '../Link'

import classes from './index.module.scss'
import { Nunito_Sans } from 'next/font/google'
const nunito_light = Nunito_Sans({ subsets: ['latin'], weight: '200' })
export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the footer without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  const navItems = footer?.navItems || []
  return (
    <footer className={classes.footer}>
      <div className={[classes.wrap, nunito_light].filter(Boolean).join(' ')}>
        {/* <Link href="/">
          <picture>
            <img className={classes.logo} alt="PSHS Logo" src="/pshs-logo.png" />
          </picture>
        </Link> */}
        {/* <nav className={classes.nav}>
          {navItems.map(({ link }, i) => {
            return <CMSLink key={i} {...link} />
          })}
        </nav> */}
        <p>2023 by ICT Club</p>
      </div>
    </footer>
  )
}
