'use client'

import React from 'react'
import Link from 'next/link'

import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'
import { Nunito_Sans } from 'next/font/google'
const nunito_light = Nunito_Sans({ subsets: ['latin'], weight: '200' })
export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()
  return (
    <nav
      className={[
        classes.nav,
        // fade the nav in on user load to avoid flash of content and layout shift
        // Vercel also does this in their own website header, see https://vercel.com
        // user === undefined && classes.hide,
        nunito_light,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} />
      })}
      {/* {user && <Link href="/account">Account</Link>} */}
      {/*
        // Uncomment this code if you want to add a login link to the header
        {!user && (
          <React.Fragment>
            <Link href="/login">Login</Link>
            <Link href="/create-account">Create Account</Link>
          </React.Fragment>
        )}
      */}
    </nav>
  )
}
