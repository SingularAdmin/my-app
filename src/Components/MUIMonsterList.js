import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import "./monsterList.css"


import Pagination from "@mui/material/Pagination"
import {
    Table,
    TableRow,
    TableCell,
    TableBody,
    TableContainer,
    Paper
}
    from "@mui/material";

const monsterList = ({ monsters }) => {

    const [state, setState] = useState({
        headers: [],
        rows: [],
        page: 1,
        rowsPerPage: 10,
        count: 5
    })

    useEffect(() => {
        let rem = monsters.length % state.rowsPerPage;
        if (rem > 0) {
            setState(prevState => ({
                ...prevState,
                count: Math.trunc(monsters.length / state.rowsPerPage) + 1
            }))

        } else if (rem === 0) {
            setState(prevState => ({
                ...prevState,
                count: Math.trunc(monsters.length / state.rowsPerPage)
            }))
        }


        let rowsArray = monsters.map(
            monster => {
                return (
                    <TableRow key={monster.name}>
                        <TableCell sx={{ fontWeight: 1000 }}>
                            <p style={{ fontSize: 18 }}> {monster.name} </p>
                            <br />
                            <img id={monster.name} className="MonsterIMG" style={{ maxWidth: 740, maxHeight: 600 }} src={monster.img_url} alt="Logo" onClick={(event) => { console.log(event.target) }} />
                            <div dangerouslySetInnerHTML={createMarkup(monster.Traits)} />
                        </TableCell>
                    </TableRow >
                )
            }
        );

        function createMarkup(text) {
            return { __html: text };
        }

        setState(prevState => ({
            ...prevState,
            rows: rowsArray
        }))

    }, [monsters])

    const handleChange = (event, page) => {
        setState(prevState => ({
            ...prevState,
            page: page
        }))
    }
    let displayList = state.rows.slice((state.page - 1) * state.rowsPerPage, (state.page - 1) * state.rowsPerPage + state.rowsPerPage)
    return (
        <>
            <div className="MonsterListDiv">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 350 }} arial-label="simple table">
                        <TableBody>
                            {displayList}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Pagination className="pagination" count={state.count} page={state.page} color="primary" variant="outlined" onChange={handleChange} />
        </>
    )
}

monsterList.prototype = {
    monsters: PropTypes.arrayOf(PropTypes.object)
}

export default monsterList;