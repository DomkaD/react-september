import {urls} from "../configs";
import {axiosService} from "./axios.service";

const jsonPlaceHolderService={
    getTodos:()=>axiosService.get(urls.todos),
    getComments:()=>axiosService.get(urls.comments),
    getAlbums:()=>axiosService.get(urls.albums),
    getPostsById:(id)=>axiosService.get(`${urls.posts}/${id}`)

}
export {
    jsonPlaceHolderService
}