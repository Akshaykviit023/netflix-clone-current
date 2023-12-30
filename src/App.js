import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from "./features/userSlice";
import { Provider } from 'react-redux'; 
import store from './app/store'; 

function App() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, userAuth =>{
      if(userAuth){
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
        );
      }
      else{
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
      {!user ? (<LoginScreen />):<Routes>
        <Route path='/profile' element={<ProfileScreen/>}/>
          <Route path="/" element={<HomeScreen />}/>
        </Routes>
      }
      </BrowserRouter>
    </div>
  );
}
const AppWithProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithProvider;
//export default App;