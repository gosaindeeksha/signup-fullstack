
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css"
import ThankYou from './components/ThankYou';
import Signup from "./components/signup"

function App() {


  return (
    <Router>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/success" element={<ThankYou />} />
    </Routes>
  </Router>
  )
}

export default App
