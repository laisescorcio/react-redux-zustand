import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

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

export type RootState = ReturnType<typeof store.getState> // getState retorna o estado atual do reducer (todo)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector // essa função foi feita para usar no lugar do useSelector no componente TodoList, porém ele agora estará tipado
