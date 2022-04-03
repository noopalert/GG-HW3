import react, { useEffect, useState } from "react";
import axios from "axios";

function useSearch(){
    const [isLogin, setIsLogin] = useState(false);
    const [savedToken, setSavedToken] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const BASE_URL = "https://api.spotify.com/v1/search/";
    const handleChange = (e) =>{
        setSearchQuery(e.target.value);
    }

    const onSearch = (e) =>{
        if (isLogin === true && savedToken != null){
            axios 
                .get(BASE_URL,{
                    headers:{
                        Authorization: `Bearer ${savedToken}`,
                    },
                    params:{
                        q: `${searchQuery}`,
                        type:"track",
                    },
                })
                .then((response)=>{
                    const data = response.data.tracks.items;
                    console.log(data);
                    setSearchResult(data);
                })
                .catch((error)=>{
                    console.log(error);
                });
        }else {
            alert("login dulu");
        }
        e.preventDefault();
    };

    useEffect(()=>{
        const access_token = new URLSearchParams(window.location.hash).get(
            "#access_token"
        );
        setSavedToken(access_token);
        setIsLogin(true);
    },[]);

    return{
        searchResult,
        handleChange,
        onSearch,
    };
}

export default useSearch;