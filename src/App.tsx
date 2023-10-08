import { useState } from 'react';
import { Counter } from './components/Counter';
import { Heading } from './components/Heading';
import { Section } from './components/Section';
import { List } from './components/List';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Heading title='Heading Component'/>
      <Section title='Section title'>Section component</Section>
      <Counter setCount={setCount}>{count}</Counter>
      <List 
          items={[1,2,3,4]}
          render={(item: number) => <p>{item}</p>}
      />
    </>
  );
}

export default App;
