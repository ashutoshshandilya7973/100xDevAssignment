import { useContext } from 'react';
import AppBar from './Components/AppBar.jsx';
import {AuthContext} from './context/AuthContext.jsx';
import Login from './Components/Login.jsx';
import Home from './Components/Home.jsx';
// import {BrowserRouter,Routes,route} from 'react-router-dom';

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <AppBar />
      {isAuthenticated ? <Home /> : <Login />}
    </>
  );
}

export default App;
