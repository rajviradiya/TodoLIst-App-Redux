import { Container } from 'react-bootstrap';
import './App.css';
import AddUser from './ToDoApp/AddUser';
import ShowUsers from './ToDoApp/ShowUsers';

function App() {
  return (
    <Container fluid className=' bg-body-secondary p-5'>
      <AddUser/>
      <ShowUsers/>
    </Container>
  );
}

export default App;
