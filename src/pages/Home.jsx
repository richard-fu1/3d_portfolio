/* eslint-disable react/no-unknown-property */
import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'

import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'

const Home = () => {
  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.25
  audioRef.current.loop = true
  const [isRotating, setIsRotating] = useState(false)
  const [curStage, setCurStage] = useState(1)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)

  const [scrollRotate, setScrollRotate] = useState(false)
  const setRotatingTimeout = useRef(null)

  useEffect(() => {
    const curAudioRef = audioRef.current
    if (isPlayingMusic) {
      curAudioRef.play()
    }
    return () => {
      curAudioRef.pause()
    }
  }, [isPlayingMusic])

  useEffect(() => {
    if (scrollRotate) {
      setRotatingTimeout.current = setTimeout(() => {
        if (scrollRotate) setScrollRotate(false)
      }, 500)
    }
  }, [scrollRotate, setScrollRotate])

  const adjustIslandForScreenSize = () => {
    let screenScale = window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1, 1, 1]
    let screenPosition = [0, -6.5, -43]
    let rotation = [0.1, 4.7, 0]
    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale = window.innerWidth < 768 ? [1.5, 1.5, 1.5] : [3, 3, 3]
    let screenPosition = window.innerWidth < 768 ? [0, -1.5, 0] : [0, -4, -4]
    return [screenScale, screenPosition]
  }
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize()

  const [planeScale, planePosition] = adjustPlaneForScreenSize()
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {curStage !== null && <HomeInfo curStage={curStage} />}
      </div>
      <div className='absolute bottom-20 left-10 right-10 z-10 flex items-center justify-center opacity-25 hover:opacity-100'>
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
          Drag, scroll, or use left and right arrow keys to see other sections
          of the island!
        </h1>
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating || scrollRotate} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurStage={setCurStage}
            setScrollRotate={setScrollRotate}
          />
          <Plane
            scale={planeScale}
            planePosition={planePosition}
            rotation={[0, 20, 0]}
            isRotating={isRotating || scrollRotate}
          />
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='sound'
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home
