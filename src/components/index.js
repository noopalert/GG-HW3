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
                <button className="btn-select" type="button" onClick={()=> props.onClick (props.isSelected)}>
                    {props.nameOfButton}
                </button>
            </div>
        </div>
    );
}
export default Gif;