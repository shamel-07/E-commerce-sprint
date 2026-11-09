
import NavBar from './components/NavBar'
import Products from './components/Products'
import { Routes, Route } from 'react-router-dom'
import CreateProduct from './components/CreateProduct'
import Home from './components/Home'
import Buy from './components/Buy'

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path ="/" element= {<Products/>} />
        <Route path ="/create" element= {<CreateProduct/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/buy/:id" element={<Buy />} />
      </Routes>
    </div>
  )
}

export default App
