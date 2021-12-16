import React, { useEffect, useState } from "react";
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from "./spotify";
import { SpotifyWebApi } from "spotify-web-api-js";
import Player from './components/Player';
import { useDataLayerValue } from "./components/DataLayer";

const spotify = new SpotifyWebApi();


function App() {
  const [token, setToken] = useState(null);
  //{ } is what we need fromthe dataLayer, dispatch is what we are sending over there
  const [{}, dispatch] = useDataLayerValue();
  
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user);
      })
    }

  }, []);


  return (
    <div className="App">
      {
        token ? (<Player />) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
