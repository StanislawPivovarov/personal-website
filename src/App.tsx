import React from 'react';
import './App.css';
import Hello from './components/Hello';
import Prices from './components/Prices';
import ProjectPage from './components/ProjectsPage/ProjectPage';
import Slogan from './components/Slogan';
import Tech from './components/Tech';
import GlobalFonts from "./styles/fonts"
function App() {
  return (
    <div className="App">
      <GlobalFonts/>
     <Hello/>
     <Slogan/>
     <Tech/>
     <ProjectPage/>
     <Prices/>
    </div>
  );
}

export default App;
