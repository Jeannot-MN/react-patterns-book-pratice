import React, { createContext, ReactNode, useReducer } from "react";
import NotesReducer from "./NoteReducer";
import { Action, Note, NotesState } from "./types";


const initialNotes: Note[] = [
    {
        id: 1,
        note: 'Note 1'
    },
    {
        id: 2,
        note: 'Note 2'
    }
]

const notesInitialState: NotesState = {
    notes: initialNotes,
    selectedNote: null
}

export const NotesStateContext = createContext<{
    state: NotesState;
    dispatch: React.Dispatch<Action>
}>({ state: notesInitialState, dispatch: () => undefined });



interface Props {
    children: ReactNode;
}

export default function NotesStateContextProvider({ children }: Props) {
    const [state, dispatch] = useReducer(NotesReducer, {
        ...notesInitialState,
    });

    return (
        <NotesStateContext.Provider value={{ state, dispatch }}>{children}</NotesStateContext.Provider>
    )
}