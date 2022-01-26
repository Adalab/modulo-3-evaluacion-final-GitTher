import { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import '../styles/App.scss';
// import PropTypes from 'prop-types';

import Form from "./Form/Form";
import CharacterList from "./Character/CharacterList";
import CharacterDetail from './Character/CharacterDetail';
import NotFound from './Character/NotFound'

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

  const routeCharacterData = useRouteMatch('/character/:characterId');
  const getRouteCharacter = () => {
    if (routeCharacterData !== null) {
      const routeCharacterId = routeCharacterData.params.characterId;
      return characters.find(character => {
        return character.id === routeCharacterId;
      });
    }
  }

  return (
    <div>
      <h1>Harry Potter Characters Database</h1>
      <Switch>
        <Route exact path="/">
          <Form house={house} name={name} handleFilter={handleFilter} />
          <CharacterList characters={filteredCharacters} name={name} />
        </Route>
        <Route path="/character/:characterId" ><CharacterDetail character={getRouteCharacter()} /></Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
