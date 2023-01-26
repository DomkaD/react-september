import {useEffect, useState} from "react";
import {jsonPlaceHolderService} from "../../services";
import {Album} from "../Album/Album";

const Albums = () => {

    const [albums, setAlbums] =useState([])

    useEffect(() =>{
        jsonPlaceHolderService.getAlbums().then(({data})=>setAlbums([...data]))
    },[])

    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
}

export {Albums}