import Gif from "../components/index"

function Cardsong(){
    return(
        <div className="cardsong">
            {data.map((item, indx)=>{
                return(
                    <Gif
                        url={item.album.images[1].url}
                        nameAlbum={item.album.name}
                        nameArtist={item.artists[0].name}
                        alt="Image not loaded"
                        key={index}
                    />
                );
            })}
        </div>
    );
}
export default Cardsong;