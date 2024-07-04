import { configureStore, createSlice } from '@reduxjs/toolkit'

// createSlice = Para armazenar mais de um estado na store
const  todoSlice = createSlice({
    name: 'todo',
    initialState: ['Fazer café', 'Estudar Redux', 'Estudar Zustand'],

    reducers: {},
})

export const store = configureStore({
    // reducer = terá as informações que serão compartilhadas entre todos os componentes da aplicação
    reducer: {
        todo: todoSlice.reducer,
    }
})