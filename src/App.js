import './styles/main.scss'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Title from './views/Title'
import Play from './views/Play'
import GameOver from './views/GameOver'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/play" element={<Play />} />
          <Route path="/game-over" element={<GameOver />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
