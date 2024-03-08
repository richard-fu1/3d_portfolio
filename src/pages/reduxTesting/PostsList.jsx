import { useSelector } from 'react-redux'
import { selectAllPosts } from '../../features/postsSlice'
import AddPostForm from '../../components/reduxTesting/AddPostForm'

const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  return (
    <section className='max-container text-center'>
      <h1 className='head-text'>Posts</h1>
      <div className='flex-col justify-center mb-3'>
        {posts.map((post) => (
          <article key={post.id} className='m-5'>
            <h2 className='font-semibold'>{post.title}</h2>
            <p>{post.content.substring(0, 100)}</p>
          </article>
        ))}
      </div>
      <div>
        <AddPostForm />
      </div>
    </section>
  )
}

export default PostsList
