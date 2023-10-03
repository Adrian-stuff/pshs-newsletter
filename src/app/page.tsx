import { PageCard } from './_components/PageCard'
import PageTemplate, { generateMetadata } from './(pages)/[slug]/page'

import './_css/page.scss'

export default function Page() {
  return (
    <div className="container">
      <h2 className="page-title">Explore PSHS</h2>
      <PageCard
        title={"Virtual Parents and Learner's Orientation for S.Y 2021-2022"}
        body={'Mollit elit aute id mollit aliqua ipsum consequat fugiat.'}
        imageSrc={'/test_page.jpg'}
        user_image={'/test_avatar.jpg'}
        user_name={'Vince Angelo Batecan'}
        date_published={'Oct 03, 2023'}
        elapsed_time={'1 day ago'}
      />
    </div>
  )
}

export { generateMetadata }
