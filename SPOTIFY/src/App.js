import { useState } from 'react'

import ApiRequest from "./components/ApiRequest";
import AppContainer from "./components/AppContainer";
import MainPage from "./components/main/MainPage";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Login from './components/main/Login';



function App() {
  const [isloggedIn, setLoggin] = useState(false)

  
 const handleSignIn = () => {
    setLoggin(!isloggedIn);
  }

  const handleSignOut = () => {
    setLoggin(false)
  }

  if(isloggedIn){
    return (
    <AppContainer>
      <div className="App">
        <Navbar signout={handleSignOut}/>
        <MainPage/>
        <Sidebar/>
      </div>
    </AppContainer>
    
  );
  }
  return(
    <Login  signIn={handleSignIn}/>
  )
  
}

export default App;
