import './style.css';
import {Button} from '@chakra-ui/button';

function Gif (props){
    return(
        <div className="play-contai">
            <img src={props.url} alt={props.alt} />
            <div className="play-list">
                <p>{props.nameAlbum}</p>
                <p>{props.nameArtist}</p><br></br>
                <Button 
                colorScheme='teal' 
                variant='outline' 
                type="button" 
                onClick={()=> props.onClick (props.isSelected)} 
                margin="10px 0"
                border='1px'
                _hover={{ bg: '#239b76'}}
                bg='#239b76'
                borderRadius='4px'
                color='white'
                padding='10px 24px'
                _active={{
                    bg: '#239b76',
                    transform: 'scale(0.98)'
                  }}
                cursor='pointer'
                className='btn-select'
                >
                    {props.nameOfButton}
                </Button>  
            </div>
        </div>
    );
}
export default Gif;