import { useState, useEffect } from 'react';
// import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
// import '../styles/App.scss';
// import PropTypes from 'prop-types';

import CharacterList from "./Character/CharacterList";
import Form from "./Form/Form";

import callToApi from '../services/callToApi';


function App() {

  const [house, setHouse] = useState('gryffindor');
  const [name, setName] = useState('');
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    callToApi(house).then((charactersData) => {
      setCharacters(charactersData);
    })
  }, [house]);

  const handleFilter = (form) => {
    if (form.key === 'house') {
      setHouse(form.value);
    }
  }

  return (
    <div>
      <h1>Harry Potter Characters Database</h1>
      <Form house={house} handleFilter={handleFilter} />
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
