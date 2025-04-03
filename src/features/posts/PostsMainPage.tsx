import { PostsList } from '@/features/posts/PostsList'
import { AddPostForm } from '@/features/posts/AddPostForm'

export const PostsMainPage = () => {
  return (
    <>
      <AddPostForm />
      <PostsList />
    </>
  )
}
