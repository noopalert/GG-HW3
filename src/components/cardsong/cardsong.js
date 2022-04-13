// import Gif from "../components/index"
import "../cardsong/cardsong.css";

function Cardsong(props) {
    return (
      <div className="Card">
        <img src={props.url} alt={props.alt}></img>
        <div className="text-component">
          <p className="album">{props.albumName}</p>
          <p>{props.artistName}</p>
        </div>
      </div>
    );
  }
  
  export default Cardsong;