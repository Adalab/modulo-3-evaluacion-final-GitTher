// import { useState } from 'react';
// import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
// import '../styles/App.scss';
// import PropTypes from 'prop-types';

import CharacterList from "./Character/CharacterList";
import Form from "./Form/Form";

function App() {
  return (
    <div>
      <h1>Harry Potter Characters Database</h1>
      <Form />
      <CharacterList />
    </div>
  );
}

export default App;
