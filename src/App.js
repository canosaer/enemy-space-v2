import './styles/main.scss'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Title from './views/Title'
import Map from './views/Map'
import Encounter from './views/Encounter'
import GameOver from './views/GameOver'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/map" element={<Map />} />
          <Route path="/encounter" element={<Encounter />} />
          <Route path="/game-over" element={<GameOver />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
