import axios from "axios";
import { useState } from "react";
import Spinner from "./Spinner";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

function Random(){


    const[gif,setGif]=useState('');

    const[loading,setLoading]=useState(false);

    async function fetchData(){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data}=await axios.get(url);
        const imageSource=data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    function clickHandler(){
        fetchData();
    }

    return (
        <div className="w-[70%] bg-green-600 border border-green-950 flex flex-col items-center mx-auto gap-y-2">
            <h1 className="underline text-xl ">A Random GIF</h1>
            {
                loading?(<Spinner/>):(<img src={gif} width={450}></img>)
            }
            <button onClick={clickHandler} className="w-10/12 bg-green-400 mb-4 rounded-md">Generate</button>
        </div>
    )
}

export default Random;