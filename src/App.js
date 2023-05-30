import Header from './pages/Header'
import Home from './pages/Home'
import Nav from './pages/Nav'
import Forums from './pages/Forums'
import Notifications from './pages/Notification'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/forums" element={<Forums/>} />
        <Route exact path="/notifications" element={<Notifications/>} />
      </Routes>
    </div>
  );
}

export default App;
