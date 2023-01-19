import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const postService = {
    getAll: () => axiosService.get(urls.posts),
}

export {
    postService
}