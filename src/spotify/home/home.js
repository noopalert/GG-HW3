import "../home/home.css"

function Home (){
    const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
    const CLIENT_ID = process.env.REACT_APP_SPOTIFY_KEY;
    const REDIRECT_URI = "http://localhost:3000/create-playlist";
    const SCOPE = "playlist-modify-private";
    const AUTH_URL = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`; 

    const isAuth = ()=>{
        window.location = AUTH_URL;
        localStorage.setItem("isLoggedIn", true);
    };

    return(
        <div className="home">
            <p>Klik for Login</p>
            <button onClick={isAuth} className="title">Login</button>
        </div>
    )
}

export default Home;