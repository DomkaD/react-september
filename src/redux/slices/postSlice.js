import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {allService} from "../../services";


const initialState = {
    posts: [],
    errors: null,
    selectedPost: null
};

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await allService.getAllPosts()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getById = createAsyncThunk(
    'postSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await allService.getByIdPost(id)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)
const postSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload
        }
    },
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.posts = action.payload
        }
    },
    [getAll.rejected]:(state, action) => {
        state.errors = action.payload
    },
    [getById.fulfilled]:(state, action) =>{
        state.selectedPost = action.payload
    }

})
const {reducer: postReducer, actions: {setSelectedPost}} = postSlice;

const postActions = {
    setSelectedPost,
    getAll,
    getById
}


export {
    postSlice,
    postActions,
    postReducer
}