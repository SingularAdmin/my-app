import React from "react";
import PropTypes from "prop-types";
import nextId from "react-id-generator";

const MyList = ({ names }) => {
    let namelist = names.map(name =>
        <li key={nextId()}>{name}</li>
    );
    return (
        <ul>
            {namelist}
        </ul>
    )


}

MyList.propTypes = {
    names: PropTypes.arrayOf(PropTypes.string)
};

export default MyList;