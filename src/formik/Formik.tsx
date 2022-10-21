import { useRef, useState } from "react";

export default function Formik() {

    const [values, setValues] = useState({})

    const inputRef = useRef(null);

    const handleChange = ({ target: { name, value } }: any) => {
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        //@ts-ignore
        inputRef.current.focus();
        console.log(values);

    }

    return (
        <form onChange={handleChange} onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                ref={inputRef}
            // onChange={handleChange}
            />
            <input
                type="text"
                name="email"
            // onChange={handleChange}
            />
            <input
                type="text"
                name="phoneNumber"
            // onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}