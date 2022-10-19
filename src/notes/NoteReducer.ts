import { Action, ActionTypes, NotesState } from "./types";

export default function NotesReducer(
    state: NotesState,
    action: Action
): NotesState {
    switch (action.type) {
        case ActionTypes.ADD:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            };

        case ActionTypes.DELETE:
            return {
                ...state,
                notes: state.notes.filter(n => n.id !== action.payload)
            };

        case ActionTypes.UPDATE:
            const updatedNote = action.payload;
            return {
                ...state,
                notes: state.notes.map(n => (n.id === updatedNote.id) ? updatedNote : n)
            }
    }
}