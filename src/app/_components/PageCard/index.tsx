/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Nunito_Sans } from 'next/font/google'
import Image from 'next/image'

import './index.scss'
const nunito_light = Nunito_Sans({ subsets: ['latin'], weight: '300' })

export function PageCard({
  title,
  body,
  imageSrc,
  user_image,
  user_name,
  date_published,
  elapsed_time,
}) {
  return (
    <section>
      <figure className="card">
        <div className="hero">
          <Image src={imageSrc} className="card-img" alt="Image" />
        </div>
        <div className="card_body">
          <div className="user">
            <div className="user-image">
              <Image
                src={user_image}
                className="user-image"
                alt="Profile Image"
                width={48}
                height={48}
              />
            </div>
            <div className="user-details">
              <div className="user-details-name">
                <span>{user_name}</span>
              </div>
              <div className="user-details-datetime">
                {date_published} - {elapsed_time}
              </div>
            </div>
          </div>

          <div className="content">
            <h4 className={`content-title ${nunito_light.className}`}>{title}</h4>
            <div className="content-paragraph">
              <p>{body}</p>
            </div>
          </div>
          <hr />
          {/* <div className="card-content__statistics">
            <div className="statistics_item views">1,000 Views</div>
            <div className="statistics_item comments">0 Comment</div>
            <div className="statistics_item heartreact">
              <span>
                <FontAwesomeIcon icon={faHeart} width={16} height={16} />
              </span>
            </div>
          </div> */}
        </div>
      </figure>
    </section>
  )
}
