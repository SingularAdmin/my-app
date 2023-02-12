import React from "react";
import PropTypes from "prop-types";

const monsterView = ({ monster }) => {
  const { name, meta } = monster;
  const Hit_Points = monster["Hit Points"];
  const Armor_Class = monster["Armor Class"];
  return (
    <tr>
      <td>{name}</td>
      <td>{meta}</td>
      <td>{Hit_Points}</td>
      <td>{Armor_Class}</td>
    </tr>
  );
};

monsterView.propTypes = {
  monster: PropTypes.shape({
    name: PropTypes.string,
    meta: PropTypes.string,
    Hit_Points: PropTypes.string,
  }),
};
export default monsterView;
