import './styles/main.scss'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Title from './views/Title'
import Map from './views/Map'
import Encounter from './views/Encounter'
import Win from './views/Win'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/map" element={<Map />} />
          <Route path="/encounter" element={<Encounter />} />
          <Route path="/win" element={<Win />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
