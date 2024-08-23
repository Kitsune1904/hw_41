import {useDispatch, useSelector} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {albumsApi} from './api/albumsApi'

type Action = {
  type: string;
  payload: string | number
}

type NotesState = string[]

//actions
export const addNote = (note: string):Action => ({type: 'add', payload: note});
export const deleteNote = (index: number):Action => ({type: 'delete', payload: index});

const notesReducer = (state:NotesState = [], action): NotesState => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return state.filter((_, i) => i !== action.payload);
    default:
      return state;
  }
}

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(albumsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
