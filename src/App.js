import React from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import MyList from './Components/MyList';
import NameAdder from './Components/NameAdder';
import monstersListfromFile from './DnDMonstersGenerator';
import MonsterList from './Components/MonsterList';
import './App.css';


function App(props) {

  const [state, setState] = useState({
    nameList: [],
    monsters: []
  });

  useEffect(() => {
    monstersListfromFile()
      .then(data =>
        setState(
          {
            nameList: [...props.names], monsters: [...data]
          }
        )
      );
  }, [props.names]);

  const handleNameInput = (name) => {
    setState(prevState => ({ ...prevState, nameList: [...state.nameList, name] }));
  }
  let me = "Jim";
  const greetings = `hello everyone, I'm ${me} ! `;
  return (
    <div className="App">
      <header className="App-header">

        <div className="NamesContainer">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br />

          {greetings}

          <nav className="nameList">
            <MyList names={state.nameList}></MyList>
          </nav>
          <NameAdder addName={handleNameInput} />
        </div>

        <div>
          <MonsterList className="MonsterContainer" monsters={state.monsters} />
        </div>
      </header>


    </div >
  );
}

App.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string)
};
export default App;
