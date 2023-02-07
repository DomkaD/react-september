import {axiosService} from "./axiosService";
import {urls} from "../configs";

const allService = {
  getAllUsers:()=> axiosService.get(urls.users),
  getByIdUser:(id)=> axiosService.get(`${urls.users}/${id}`),
  getAllPosts:()=> axiosService.get(urls.posts),
  getByIdPost:(id)=> axiosService.get(`${urls.posts}/${id}`)
}

export {
  allService
}