import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {allService} from "../../services";


const initialState = {
    users: [],
    errors: null,
    selectedUser: null
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await allService.getAllUsers()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)
const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await allService.getByIdUser(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        }

    },
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [getAll.rejected]: (state, action) => {
            state.errors = action.payload
        },
        [getById.fulfilled]:(state, action) =>{
            state.selectedUser = action.payload
        }
    }
})

const {reducer: userReducer, actions: {setSelectedUser}} = userSlice;

const userActions = {
    setSelectedUser,
    getAll,
    getById
}


export {
    userSlice,
    userActions,
    userReducer
}