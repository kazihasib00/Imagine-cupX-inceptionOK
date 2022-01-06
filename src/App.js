import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/home/Home'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {
  return (
    <main className="flex justify-between p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <nav>
        <ul className="flex gap-[1rem]">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="link">
            <Link to="/login">Login</Link>
          </li>
          <li className="link">
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}

export default App
