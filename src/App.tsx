import { useState } from 'react';
import { Counter } from './components/Counter';
import { Heading } from './components/Heading';
import { Section } from './components/Section';
import { List } from './components/List';
import { Test } from './components/Test';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const renderList = (item: number) => (
    <p>{item}</p>
  );

  const renderTest = (quantity: number = 0, isNew: boolean = false) => (
    <p>{quantity} {String(isNew)}</p>
  );
  
  return (
    <>
      <Heading title='Heading Component'/>
      <Section title='Section title'>Section component</Section>
      <Counter setCount={setCount}>{count}</Counter>
      <List 
          items={[1,2,3,4]}
          render={renderList}
      />
      <Test
        render={renderTest}
      />
    </>
  );
}

export default App;
