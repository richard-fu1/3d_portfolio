/* eslint-disable react/no-unknown-property */
import { Suspense, useRef, useState } from 'react'
import Fox from '../models/Fox'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'
import { emailcta, githubcta, linkedincta } from '../assets/icons'
import CTAButton from '../components/CTAButton'

const Contact = () => {
  const formRef = useRef(null)
  const [info, setInfo] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setisLoading] = useState(false)
  const [curAnimation, setCurAnimation] = useState('idle')

  const { alert, showAlert, hideAlert } = useAlert()

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setisLoading(true)
    setCurAnimation('hit')
    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: info.name,
          to_name: 'Richard',
          from_email: info.email,
          to_email: import.meta.env.VITE_APP_PERSONAL_EMAIL,
          message: info.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      showAlert({ text: 'Message sent successfully', type: 'success' })
      setTimeout(() => {
        setCurAnimation('idle')
        setInfo({ name: '', email: '', message: '' })
        hideAlert()
      }, 3000)
    } catch (e) {
      showAlert({ text: "I didn't receive your message", type: 'danger' })

      setCurAnimation('idle')
    }
    setisLoading(false)
  }
  const handleFocus = () => setCurAnimation('walk')
  const handleBlur = () => setCurAnimation('idle')

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100hv]'>
      {alert.show && <Alert {...alert} />}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in touch</h1>
        <h2 className='pt-2'>Reach me at the following links:</h2>
        <div className='contact-buttons'>
          <CTAButton
            className={'github-button'}
            foxRun={handleFocus}
            foxStop={handleBlur}
            svg={githubcta}
            linkTo={import.meta.env.VITE_APP_GITHUB}
          />
          <CTAButton
            className={'linkedin-button'}
            foxRun={handleFocus}
            foxStop={handleBlur}
            svg={linkedincta}
            linkTo={import.meta.env.VITE_APP_LINKEDIN}
          />
          <CTAButton
            className={'email-button'}
            foxRun={handleFocus}
            foxStop={handleBlur}
            svg={emailcta}
            linkTo={`mailto:${import.meta.env.VITE_APP_PERSONAL_EMAIL}`}
          />
        </div>
        <h2>Or send me an email directly:</h2>
        <form
          className='w-full flex flex-col gap-7 mt-5'
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              placeholder='John'
              className='input'
              required
              value={info.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              placeholder='john@email.com'
              className='input'
              required
              value={info.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              placeholder='Let me know how I can help you!'
              className='textarea'
              required
              rows={4}
              value={info.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type='submit'
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas camera={{ position: [0, 0, 5], pov: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={curAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
