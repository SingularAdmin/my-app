import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import monstersListfromFile from "./DnDMonstersGenerator";
import MUIMonsterList from "./Components/MUIMonsterList";
import { Autocomplete, TextField } from "@mui/material";
import "./App.css";

function App(props) {
  const [state, setState] = useState({
    nameList: [],
    monsters: [],
  });

  useEffect(() => {
    monstersListfromFile().then((data) =>
      setState({
        nameList: [...props.names],
        monsters: [...data],
      })
    );
  }, [props.names]);

  const monsterOptions = () => {
    let optionsList = [];
    state.monsters.map((monster) => {
      optionsList.push(monster.name);
    });
    return optionsList;
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="monsterContainer">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={monsterOptions()}
            sx={{
              width: 800,
              height: 10,
              backgroundColor: "white",
              marginBottom: 1.5,
            }}
            renderInput={(params) => (
              <TextField
                sx={{ backgroundColor: "white" }}
                {...params}
                label="Monster ist"
              />
            )}
          />
          <br />
          <div style={{ width: 800, height: 900 }}>
            <MUIMonsterList monsters={state.monsters} />
          </div>
        </div>
      </header>
    </div>
  );
}

App.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
};
export default App;
