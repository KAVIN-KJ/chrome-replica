import './App.css'
import Toolbar from './Toolbar'
import Home from './Home'
import { BrowserRouter as Router,Route,Link, Routes, Outlet } from 'react-router-dom'
import Bookmark from './Bookmark'
import ContentViewer from './ContentViewer'
import Search from './Search'
import Tab from './Tab'
import BookmarksBar from './BookmarksBar'
import About from './About'
import Contact from './Contact'

function App() {

  return (
    <nav>
          <Toolbar/>
          <Router>
              <BookmarksBar/>
          <Routes>
              <Route path='/Home' element={<Home/>} />
              <Route path='/About' element={<About/>}/>
              <Route path='/Contact' element={<Contact />}/>
          </Routes>
          </Router>
    </nav>
  )
}

export default App
