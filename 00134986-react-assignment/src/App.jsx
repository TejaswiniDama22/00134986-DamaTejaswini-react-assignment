import { useState } from 'react';
import './App.css';
import HelloReact from './hello/HelloReact';
import Employees from './employees/Employees';
import Parent from './parent/Parent';
import RegistrationForm from './registration/RegistrationForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HelloReact />
      <Employees />
     <Parent></Parent>
     <RegistrationForm></RegistrationForm>
    </div>
  );
}

export default App;
