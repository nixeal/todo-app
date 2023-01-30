import './App.css';
import { Container } from 'react-bootstrap';

import TodoContainer from './component/TodoContainer';


function App() {

   
  return (
    <div className="App">
      <Container  className='bg-primary vh-100'>
      <h1 className="text-white fs-2 fw-bold bg-primary m-0 p-2"> TODO APPLICATION</h1>
        <TodoContainer></TodoContainer>
      </Container>
    </div>
  );
}

export default App;
