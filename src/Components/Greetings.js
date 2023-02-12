function Greetings() {
  let me = "Jim";
  const greetings = `hello everyone, I'm ${me} ! `;
  const handleNameInput = (name) => {
    setState((prevState) => ({
      ...prevState,
      nameList: [...state.nameList, name],
    }));
  };
  return (
    <div className="NamesContainer">
      <img src={logo} className="App-logo" alt="logo" />
      <br />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">
        Learn React
      </a>
      <br />

      {greetings}

      <nav className="nameList">
        <MyList names={state.nameList}></MyList>
      </nav>
      <NameAdder addName={handleNameInput} />
    </div>
  );
}

export default Greetings;
