import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function useSearch(){
    // const [isLogin, setIsLogin] = useState(false);
    // const [savedToken, setSavedToken] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const access_token = useSelector((state)=>state.token.value);

    const handleChange = (event) =>{
        setSearchQuery(event.target.value);
    };

    const onSearch = (event) =>{
        console.log(access_token);
        if (access_token !== ''){
            axios 
                .get("https://api.spotify.com/v1/search/",{
                    headers:{
                        Authorization: `Bearer ${access_token}`,
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
        event.preventDefault();
    };

    // useEffect(()=>{
    //     const access_token = new URLSearchParams(window.location.hash).get(
    //         "#access_token"
    //     );
    //     setSavedToken(access_token);
    //     setIsLogin(true);
    // },[]);

    return{
        searchResult,
        handleChange,
        onSearch,
    };
}
