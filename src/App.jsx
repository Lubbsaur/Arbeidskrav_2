import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './styles/layout.scss';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Resources from './components/Resources';
import Nav from './components/Nav';
import PageTitle from './components/PageTitle';
import { resources } from './assets/resources';



function App() {
  const [toggle, setToggle] = useState();



  return (
    
    <Layout >
    <Routes>
      <Route path='/:slug' element={<Resources resources={resources} />}></Route>
    </Routes>
    </Layout>
    
  )
}

export default App
