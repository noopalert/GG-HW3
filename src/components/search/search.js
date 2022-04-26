import "../search/search.css"
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";


const SearchForm = ({onSearch, handleChange, handlePlaylist})=>{
    return(
        <form onSubmit={onSearch}>
           
            <Input 
            type="text"
            id="text-input"
            onChange={handleChange}
            required
            placeholder='typing'
            size='md'
            variant='filled'
            /><br></br>
            
            <Button 
            variant='solid' 
            type="submit" 
            value="submit" 
            className="src-button"
            margin="10px 0"
            border='1px'
            _hover={{ bg: '#239b76'}}
            bg='#239b76'
            borderRadius='4px'
            color='white'
            padding='8px 20px'
            _active={{
                bg: '#239b76',
                transform: 'scale(0.98)'
            }}
            cursor='pointer'    
            >
                Search
            </Button>
        </form>
    );
}

export default SearchForm;