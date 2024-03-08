import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, About, Contact, Projects } from './pages'
import Counter from './pages/reduxTesting/Counter'
import PostsList from './pages/reduxTesting/PostsList'

const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          {/* Redux Testing */}
          <Route path='/counter' element={<Counter />} />
          <Route path='/posts' element={<PostsList />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
