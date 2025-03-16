import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Resources from './components/Resources';
import './styles/layout.scss';
import Nav from './components/Nav';


function App() {
  const [toggle, setToggle] = useState(false);

  return (
    
    <Layout>
    <Routes>
      <Route path='/html' element={<Nav setToggle={setToggle} toggle={toggle}/>} />
      <Route path='/css' />
      <Route path='/javascript' />
      <Route path='/react' />
      <Route path='/sanity' />
    </Routes>
    </Layout>
    
  )
}

export default App
