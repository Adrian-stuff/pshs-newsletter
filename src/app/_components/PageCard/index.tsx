import React from 'react'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

import './index.scss'

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
        <div className="card__hero">
          <Image src={imageSrc} className="page-card__image" alt="Page" fill={true} />
        </div>
        <div className="card__content">
          <div className="card__user">
            <div className="card__user-image">
              <Image
                src={user_image}
                className="card__user-image"
                alt="Page"
                width={48}
                height={48}
              />
            </div>
            <div className="card__user-details">
              <div className="card__user-details-name">
                <span>{user_name}</span>
              </div>
              <div className="card__user-details-datetime">
                {date_published} - {elapsed_time}
              </div>
            </div>
            <div className="card__user-burger">
              <FontAwesomeIcon icon={faEllipsisV} width={16} height={16} />
            </div>
          </div>

          <h4 className="card__content-title">{title}</h4>
          <div className="card__content-paragraph">
            <p>{body}</p>
          </div>
          <hr />
          <div className="card-content__statistics">
            <div className="statistics_item views">1,000 Views</div>
            <div className="statistics_item comments">0 Comment</div>
            <div className="statistics_item heartreact">
              <span>
                <FontAwesomeIcon icon={faHeart} width={16} height={16} />
              </span>
            </div>
          </div>
        </div>
      </figure>
    </section>
  )
}
