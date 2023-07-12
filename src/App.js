import Home from './components/home';
import Register from './components/register'
import Login from './components/login'
import Dashboard from './components/dashboard'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home title='Home'/>}/>
        <Route path='/register' element={<Register title='REGISTER PAGE' description='MINI ABSENSI APPS'/>}/>
        <Route path='/login' element={<Login title='LOGIN PAGE' description='MINI ABSENSI APPS'/>}/>'


        <Route path='/dashboard' element={<Dashboard title='Dashboard'/>}/>
        <Route path='*' element={<h1>Page Not Found</h1>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
