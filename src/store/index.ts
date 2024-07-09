import { configureStore, createSlice } from '@reduxjs/toolkit'

// createSlice = Para armazenar mais de um estado na store
const  todoSlice = createSlice({
    name: 'todo',
    initialState: ['Fazer café', 'Estudar Redux', 'Estudar Zustand'],

    reducers: {
        // actions, ou seja, funções que mudarão o estado
        add: (state, action) => {
            // insere o newTodo na lista de todo
            state.push(action.payload.newTodo)
        }
    },
})

export const store = configureStore({
    // reducer = terá as informações que serão compartilhadas entre todos os componentes da aplicação
    reducer: {
        todo: todoSlice.reducer,
    }
})

// para exportar as actions (reducers)
export const { add } = todoSlice.actions