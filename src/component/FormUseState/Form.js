import React, { useState } from "react";
import '../FormUseState/Form.css';

export default function Form() {
    const [formData, UpdateFormData] = useState({
        name: '',
        email: '',
        age: '',
        des: ''
    });
    const handlerInputChange = (event) => {
        const { name, value } = event.target;
        UpdateFormData({
            ...formData,
            [name]: value,
        });
    }
    const handlerFormSubmit = (event) => {
        event.preventDefault(); // Not Roloaded Every Time //
        console.log("Form Data:", formData);
        alert(`Name: ${formData.name}, Email: ${formData.email}, Age: ${formData.age}, Des: ${formData.des}`);
    }
    return (
        <div className='cmn-padding-cls form-usestate-mainform'>
            <form className="mt-2 form-simple-cls" onSubmit={handlerFormSubmit}>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" value={formData.name} onChange={handlerInputChange} />
                    <p>Type: {formData.name}</p>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" value={formData.email} onChange={handlerInputChange} />
                    <p>Type: {formData.email}</p>
                </div>
                <div>
                    <label>Age: </label>
                    <input type="text" name="age" value={formData.age} onChange={handlerInputChange} />
                    <p>Type: {formData.age}</p>
                </div>
                <div>
                    <label>Des: </label>
                    <input type="text" name="des" value={formData.des} onChange={handlerInputChange} />
                    <p>Type: {formData.des}</p>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
