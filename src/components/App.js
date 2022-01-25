import { useState, useEffect } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
// import '../styles/App.scss';
// import PropTypes from 'prop-types';

import Form from "./Form/Form";
import CharacterList from "./Character/CharacterList";
import CharacterDetail from './Character/CharacterDetail';

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
    } if (form.key === 'name') {
      setName(form.value);
    }
  }

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
    }
    )

  const renderCharacterDetail = (props) => {
    const routeId = props.match.params.characterId;
    const foundCharacter = characters.find((character) => character.id === routeId)
    return <CharacterDetail character={foundCharacter} />
  }

  return (
    <div>
      <h1>Harry Potter Characters Database</h1>
      <Switch>
        <Route path="/" exact>
          <Form house={house} name={name} handleFilter={handleFilter} />
          <CharacterList characters={filteredCharacters} name={name} />
        </Route>
        <Route path="/character/:characterId" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
}

export default App;
