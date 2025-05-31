import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products/Products'
import Contact from './pages/Contact' 



function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand fw-bold">ProdManager</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row gap-4">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  )
}

export default App
