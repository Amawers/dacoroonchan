import Sipiar from '../src/pages/Sipiar'
import Cbc from '../src/pages/Cbc'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/sipiar" element={<Sipiar />} />
        <Route path="/cbc" element={<Cbc />} />
      </Routes>
    </Router>
  )
}

export default App
