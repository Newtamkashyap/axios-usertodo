import logo from './logo.svg';
import './App.css';
import { UserData } from './userData';
import { TodoUpdate } from './userUpdate';
import { TodoEdit } from './userEdit';
import { TodoRemove } from './userRemove';

function App() {
  return (
    <>
    <UserData/>
    <TodoUpdate/>
    <TodoEdit/>
    <TodoRemove/>
    </>
  );
}

export default App;
