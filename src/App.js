import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useEffect } from 'react';
const NavBar = React.lazy(() => import( './components/NavBar'));
const Banner = React.lazy(() => import( './components/Banner'));
const Skills = React.lazy(() => import( './components/skills'));
const Projects= React.lazy(() => import( './components/projects'));
const Contact= React.lazy(() => import( './components/Contact'));
const Footer = React.lazy(() => import( './components/Footer'));

function App() {

  useEffect(()=> {
    window.scrollTo(0,0);  
  })
  
  return (
    <div className="App">
      <React.Suspense>
        <NavBar/>
      </React.Suspense>

      <React.Suspense>
        <Banner/>
      </React.Suspense>

      <React.Suspense>
        <Skills/>
      </React.Suspense>

      <React.Suspense>
        <Projects/>
      </React.Suspense>

      <React.Suspense>
        <Contact />
      </React.Suspense>

      <React.Suspense>
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default App;
