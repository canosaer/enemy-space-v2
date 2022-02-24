import './styles/main.scss'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

// import Home from './views/Home'
// import Shop from './views/Shop'
// import Cart from './views/Cart'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
