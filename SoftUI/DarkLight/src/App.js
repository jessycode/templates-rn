import React, { useState } from 'react';
import './styles/App.css';

function App() {
  const [theme, setTheme] = useState("light")
 
  const themeChange = () => {
    if (theme === "light"){
      setTheme("dark") 
    }else{
      setTheme("light") 
    }
  }
  return (
    <div className="App" data-theme={theme} >
      <div className="Box">
       <div className="Header">
          <h1> DARK/LIGTH MODE </h1>
          <div className="toggle">
            <input type="checkbox" id="switch" name="theme" onChange={themeChange}/>
            <label htmlFor="switch"> Toggle </label>
          </div>
       </div>
        <p> 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
        </p>
      </div>
    </div>
  );
}

export default App;
