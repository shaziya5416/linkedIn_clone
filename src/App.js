import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login,logout,selectUser } from './features/userSlice';
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import SideBar from './SideBar';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        // use is logged out
        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      
      {!user ? (
        < Login/>
      ) : (
        <div className="app__body">
          <SideBar />
          <Feed />
          <Widgets/>
          {/* App Body */}
          {/* Feed */}
          {/* Side Bar */}
          {/* Widgets */}

        </div>
      )}
    </div>
  );
}

export default App;
