import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import Player from "./functions/Player";
import { getTokenFromUrl } from "./spotify";
import "./CSS/App.css";
import Login from "./functions/Login";

const spotify = new SpotifyWebApi();

function App() {
  //{ } is what we need fromthe dataLayer, dispatch is what we are sending over there
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
      //   dispatch({
      //     type: "SET_DISCOVER_WEEKLY",
      //     discover_weekly: response,
      //   })
      // );

      // spotify.getMyTopArtists().then((response) =>
      //   dispatch({
      //     type: "SET_TOP_ARTISTS",
      //     top_artists: response,
      //   })
      // );

      // dispatch({
      //   type: "SET_SPOTIFY",
      //   spotify: spotify,
      // });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
