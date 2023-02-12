async function getMonstersList() {
  return await fetch("LocaFiles/srd_5e_monsters.json").then((response) =>
    response.json()
  );
}

export default getMonstersList;
