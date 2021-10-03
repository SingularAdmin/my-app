import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Monster from "./Monster"
import "./monsterList.css"
import { Autocomplete, Pagination, TextField } from "@mui/material";
const monsterList = ({ monsters }) => {
    let monstersList = monsters.map(monster =>
        <Monster key={monster.name} monster={monster} />
    );
    const monsterOptions = () => {
        let optionsList = [];
        monsters.map((monster) => {
            optionsList.push(monster.name)
        })
        return optionsList
    }
    const [state, setState] = useState({
        page: 1,
        pagesLen: 0
    })

    const handleChange = (event, value) => {
        setState(prevState => ({ ...prevState, page: value }))
    }

    useEffect(() => {
        let rem = monstersList.length % 10;
        if (rem > 0) {
            setState(prevState => ({
                ...prevState,
                pagesLen: Math.trunc(monstersList.length / 10) + 1
            }))

        } else if (rem === 0) {
            setState(prevState => ({
                ...prevState,
                pagesLen: Math.trunc(monstersList.length / 10)
            }))
        }
    }, [monsters])

    let testml = monstersList.slice(state.page - 1, state.page + 9)
    return (
        <>
            <table className="MonsterTable" id="monsters">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Meta</th>
                        <th>Hit Points</th>
                        <th>Armor Class</th>
                    </tr>
                </thead>
                <tbody>
                    {testml}
                </tbody>
            </table>
            <Pagination className="pagination" count={state.pagesLen} page={state.page} variant="outlined" color="primary" shape="rounded" onChange={handleChange} />

            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={monsterOptions()}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Monster ist" />}
            />
        </>
    )


}

monsterList.prototype = {
    monsters: PropTypes.arrayOf(PropTypes.object)
}
export default monsterList;