import React from "react";
import './Recommended.css';
import { useState,useEffect} from "react";
import { API_KEY, value_converter } from "../../data";
import { Link } from "react-router-dom";

const Recommended=({categoryId})=>{
    const [apiData,setApiData]=useState([]);
    async function fetchData(params) {
        const fetchUrl=` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        const data=await fetch(fetchUrl);
        const res=await data.json();
        setApiData(res.items)

    }
useEffect(() => {
    fetchData();
    
}, []);
let hello=['gbf','dbgj']
console.log(apiData);
return(<div className="recommended">
    {apiData.map((item,index)=>{
        return(
<Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list">
    <img src={item?item.snippet.thumbnails.medium.url:''}/>
    <div className="vid-info">
        <h4>{item?item.snippet.title:''}</h4>
        <p>{item?item.snippet.channelTitle:''}</p>

        <p>{item?value_converter(item.statistics.viewCount):''} Views</p>
    </div>
    </Link>
        )
    })}


</div>)
}
export default Recommended;