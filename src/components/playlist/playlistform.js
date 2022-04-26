import './playlistform.css';
import { Button } from '@chakra-ui/button';

const FormPlaylist = ({
    onCreate, 
    handleChange, 
    handleChangeDesc, 
    handleChangeTitle
})=>{
    return(
        <form className="playlist-form" onSubmit={onCreate}>
           
            <div className="form-wrapper">
                <p>Create your Playlist</p>
                <div className="form-title">
                    <label>Title</label> <br></br>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={handleChangeTitle}
                        placeholder="typing..."
                        required
                    />
                </div>  
                <div className="form-desc">
                    <label>Description</label> <br></br>
                    <input 
                        type="text"  
                        placeholder="typing..." 
                        id="description"
                        name="description"
                        onChange={handleChangeDesc}
                        required
                    ></input>
                </div>
                {/* <button type="submit" value="submit" className='btn-select'>
                    Create
                </button> */}
                <Button 
                type='submit'
                value='submit'
                className='btn-playlist'
                cursor='pointer'
                variant='solid'
                borderRadius='4px'
                color='white'
                padding='5px 24px'
                _hover={{ bg: '#239b76' }}
                _active={{
                    bg:'#239b76',
                    transform: 'scale(0.98)'
                }}
                bg='#239b76'
                >
                Create
                </Button>

            </div>
            
        </form>
    );
}

export default FormPlaylist;