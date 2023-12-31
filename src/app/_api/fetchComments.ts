import type { Comment, Post, User } from '../../payload/payload-types'
import { COMMENTS_BY_DOC, COMMENTS_BY_USER } from '../_graphql/comments'

export const fetchComments = async (args: {
  user?: User['id']
  doc?: Post['id']
}): Promise<Comment[]> => {
  const { user, doc } = args || {}

  const docs: Comment[] = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: user ? COMMENTS_BY_USER : COMMENTS_BY_DOC,
      variables: {
        user,
        doc,
      },
    }),
  })
    ?.then(res => res.json())
    ?.then(res => {
      if (res.errors) throw new Error(res?.errors?.[0]?.message ?? 'Error fetching docs')

      return res?.data?.Comments?.docs
    })

  return docs
}
