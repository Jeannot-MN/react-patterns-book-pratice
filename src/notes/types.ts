export type Note = {
    id: number
    note: string
}

export type NotesState = {
    notes: Note[];
    selectedNote: Note | null; 
}

export type Action = {
    type: ActionTypes.ADD;
    payload: Note
} | {
    type: ActionTypes.UPDATE;
    payload: Note
} | {
    type: ActionTypes.DELETE;
    payload: number
}

export enum ActionTypes {
    ADD,
    UPDATE,
    DELETE
}