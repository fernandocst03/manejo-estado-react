import React from 'react';
import { UseState } from './UseState.jsx';
import { ClassStric } from './ClassState.jsx';

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <UseState name="useState"/>
      <ClassStric  name="classState"/>
    </div>
  );
}

export default App;
