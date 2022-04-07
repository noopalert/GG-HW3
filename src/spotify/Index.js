import React,{ useState } from "react";
import Gif from "../components";
import '../spotify/spotify.css';
import searchUse from "./search";
import FormPlaylist from "../components/playlist/playlistform";
import SearchForm from "../components/search";
// import Cardsong from "../components/cardsong";
import axios from "axios";
import Cardsong from "../components/cardsong";

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_KEY;
const REDIRECT_URI = "http://localhost:3000/callback/";
const SCOPE = "playlist-modify-private";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const AUTH_URL = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;
const BASE_URL = "https://api.spotify.com/v1";
const access_token = new URLSearchParams(window.location.hash).get(
  "#access_token"
);


function Index(){
  const {searchResult, handleChange,onSearch } = searchUse();
  const [newPlaylist, setNewPlaylist] = useState({
    title:"",
    description:"",
    viewPlaylist:[],
  });
  const [isSelected, setIsSelected] = useState([]);
  const [check, setCheck] = useState({
    emptyView:true,
    playlistId:"",
  });

  let userId="";
  let playlistId="";
  let newPlaylistId="";

  
  
  const handleSelected = (uri)  =>{
    setIsSelected((oldArray) => oldArray.filter((id)=> id !== uri));
    console.log(`present id = ${isSelected}`);
  };

  const handleNotSelected = (uri) => {
    setIsSelected((oldArray)=> [...oldArray,uri]);
    console.log(`present id = ${isSelected}`);
  };

  const handleForm = (event) => {
    const {name, value} = event.target;
    setNewPlaylist({...newPlaylist, [name]: value});
  };

 

  const handlePlaylist = async (event) => {
    event.preventDefault();
    if (access_token === null){
      alert ("Login dulu");
    } else if(isSelected.length === 0){
      alert ("Pilih lagu dulu");
    } else {
      console.log(access_token);
      await getUserId();
      console.log("create playlist");
      await createPlaylist();
      newPlaylistId = playlistId.replace("spotify:playlist:", "");
      await addSongPlaylist ();
      console.log(playlistId);
    } 
  };

  const handleView = async (event) => {
    event.preventDefault();
    newPlaylistId = check.playlistId.replace("spotify:playlist:","");
    viewPlaylist();
    setCheck({
      emptyView: false
    })
  };

  const getUserId = async () => {
    try{
      let user = await axios.get(`${BASE_URL}/me`,{
        headers:{
          Authorization: "Bearer" + access_token,
          "Content-Type": "application/json",
        },
      });
      console.log(user.data.id);;
      userId = user.data.id;
    } catch(error){
      console.log(error);
    }
  };

  const createPlaylist = async () => {
    try{
      let create = await axios.post(
        `${BASE_URL}/users/${userId}/playlists`,
        {
          name: newPlaylist.title,
          description: newPlaylist.description,
          public:false,
          collaborative:false,
        },
        {
          headers:{
            Authorization: "Bearer" + access_token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(create.data);
      playlistId = create.data.uri;
      setCheck({
        playlistId:create.data.uri,
      });
    }catch (error){
      console.log(error);
    }
  };

  const addSongPlaylist = async () => {
    try{
      await axios.post(
        `${BASE_URL}/playlists/$${newPlaylistId}`,
        {
          uris:isSelected,
          position:0,
        },
        {
          headers:{
            Authorization: "Bearer" + access_token,
            "Content-Type": "application/json",
          },
        }
      );
    }catch(error){
      console.log(error);
    }
  };

  const viewPlaylist = async() => {
    try{
      let view = await axios.get(`${BASE_URL}/playlists/${newPlaylistId}`,
      {
        headers:{
          Authorization:"Bearer" + access_token,
          "Content-Type": "application/json",
        },
      }
      );
      console.log(view.data);
      setNewPlaylist({
        viewPlaylist: view.data,
      });
    }catch(error){
      console.log(error);
    }
  };

  return (
    <div className="spt-track">
      <div className="login" >
          <a className="title" href={AUTH_URL}>
            Press to login
          </a>
      </div>
      <div className="form-view">
        <div className="crt-playlist">
          <FormPlaylist
            onCreate={handlePlaylist}
            handleChange={handleForm}
            handleChangeDesc={handleForm}
          />
        </div>
        <div className="view-playlist">
          <button type="submit" onClick={handleView}>
            View playlist
          </button>
        </div>
      </div>
      <div className="two-side">
        <div className="">
          <SearchForm onSearch={onSearch} handleChange={handleChange}/>
          <div className="list-track">
            {searchResult.map((item,index)=>(
              <Gif
                url={item.album.images[1].url}
                nameAlbum={item.album.name}
                nameArtist={item.artists[0].name}
                alt="Image not loaded"
                key={item.uri}
                isSelected={isSelected.includes(item.uri)}
                onClick={(isSelected)=>
                  isSelected
                    ? handleSelected(item.uri)
                    : handleNotSelected(item.uri)
                }
                nameOfButton={isSelected.includes(item.uri) ? "Deselect" : "Select"}
              />
            ))}
           </div>
          
        </div>
      </div>
      
      <div className="playlist-track">
        <p>New Playlist</p>
        <div className="playlist-wrapper">
          <p>{newPlaylist?.viewPlaylist.name}</p>
          {check.emptyView?(
            <p>Playlist will show after create playlist</p>
          ):(
            newPlaylist?.viewPlaylist?.tracks?.items?.map((item)=>{

              return(
                <Cardsong
                  url={item.track.album.images[1].url}
                  alt="not loaded"
                  nameAlbum={item.track.album.name}
                  nameArtist={item.track.artists[0].name}
                  key={item.track.uri}
                />

              );
            })
          )}
        </div> 
      </div>
    </div>
  )
}

export default Index;
