import './style.css';
function Gif (props){
    return(
        <div className="play-contai">
            <img src={props.url} alt={props.alt} />
            <div className="play-list">
                <p>{props.nameAlbum}</p>
                <p>{props.nameArtist}</p>
            </div>
            <div className="btn">
                <button className="btn-select">
                    Select
                </button>
            </div>
        </div>
    );
}
export default Gif;