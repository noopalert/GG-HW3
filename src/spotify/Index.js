import React,{ useEffect, useState } from "react";
import Gif from "../components";
import '../spotify/spotify.css';
import searchUse from "./search";


const CLIENT_ID = process.env.REACT_APP_SPOTIFY_KEY;
const REDIRECT_URI = "http://localhost:3000/callback/";
const SCOPE = "playlist-modify-private";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const AUTH_URL = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;

function Index(){
  const {
    searchResult,
    handleChange,
    onSearch,
  } = searchUse();

  const [isSelected, setIsSelected] = useState([]);

  return (
    <div className="spt-track">
      <div className="login" >
          <a className="title" href={AUTH_URL}>
            Press to login
          </a>
      </div>
      <form onSubmit={onSearch}>
        <input type="text" id="input-text" onChange={handleChange}></input>
        <div className="btn-search">
          <button className="btn-fix" type="submit" value="submit">
            search
          </button>
        </div>
      </form>
      <div className="list-track">
        {searchResult.map((item,index)=>(
          <Gif
            url={item.album.images[1].url}
            nameAlbum={item.album.name}
            nameArtist={item.artists[0].name}
            alt="Image not loaded"
            key={item.uri}
            isSelected={isSelected.includes(item.uri)}
            onClick={(isSelected)=>isSelected ? setIsSelected(oldArray => oldArray.filter((id) => id !== item.uri)): setIsSelected(oldArray => [...oldArray, item.uri])}
            nameOfButton={isSelected.includes(item.uri)? "Deselect" : "Select"}
          />
        ))}
      </div>
    </div>
  )
}

export default Index;
