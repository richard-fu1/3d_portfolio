import { useState } from 'react'
import { postAdded } from '../../features/postsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../../features/usersSlice'

const AddPostForm = () => {
  const [form, setForm] = useState({ title: '', content: '', user: '' })
  const users = useSelector(selectAllUsers)
  const onFormChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.title && form.content && form.user) {
      dispatch(postAdded(form.title, form.content, form.user))
      setForm({ title: '', content: '', user: '' })
    }
  }

  return (
    <section>
      <h2 className='head-text'>Add a new post</h2>
      <form
        className='w-full flex flex-col mt-14 gap-2 text-left'
        onSubmit={handleSubmit}
      >
        <label htmlFor='postTitle' className='text-black-500 font-semibold'>
          <input
            type='text'
            name='title'
            value={form.title}
            onChange={onFormChange}
            placeholder='Title'
          />
        </label>
        <label htmlFor='postAuthor' className='text-gray-500'>
          <select
            name='user'
            value={form.user}
            onChange={onFormChange}
            placeholder='test'
          >
            <option value='' disabled selected>
              Author
            </option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor='postContent' className='text-black-500 font-semibold'>
          <textarea
            type='text'
            name='content'
            className='textarea'
            value={form.content}
            onChange={onFormChange}
            placeholder='Content'
          />
        </label>
        <button type='submit' className='btn mt-5'>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
