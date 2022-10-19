import { ChangeEvent, useContext, useState } from "react";
import NotesStateContextProvider, { NotesStateContext } from "./NotesStateContext";
import { ActionTypes } from "./types";

const Notes = () => {
    const { state, dispatch } = useContext(NotesStateContext);
    const [note, setNote] = useState('');

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newNote = {
            id: Date.now(),
            note
        }

        dispatch({ type: ActionTypes.ADD, payload: newNote });
        setNote('');
    }

    return (
        <div>
            <h2>Notes</h2>
            <ul>
                {state.notes.map((n) => (
                    <li key={n.id}>
                        {n.note} {' '}
                        <button
                            onClick={() => dispatch({
                                type: ActionTypes.DELETE,
                                payload: n.id
                            })}
                        >
                            X
                        </button>
                        <button
                            onClick={() => dispatch({
                                type: ActionTypes.UPDATE,
                                payload: { ...n, note }
                            })}
                        >
                            Update
                        </button>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="New note"
                    value={note}
                    onChange={e => setNote(e.target.value)}
                />
            </form>
        </div>
    )
}

export default function NotesWrapper() {
    return (
        <NotesStateContextProvider>
            <Notes />
        </NotesStateContextProvider>
    )
}