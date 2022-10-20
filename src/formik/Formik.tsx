import { useState } from "react";

export default function Formik() {

    const [values, setValues] = useState({})

    const handleChange = ({ target: { name, value } }: any) => {
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(values);

    }

    return (
        <form onChange={handleChange} onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
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