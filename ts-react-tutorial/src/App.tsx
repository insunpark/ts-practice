import React from 'react';
import './App.css';
import Counter from './Counter';
import Greetings from './Greetins';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SmapleContext';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <>
      <Greetings name="Hello" onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </>
  );
};

export default App;
