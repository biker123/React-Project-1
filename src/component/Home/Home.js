import React, { useState } from 'react';
import '../Home/Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        description: "",
    })
    const [dataList, setDataList] = useState(()=>{
        const saved = localStorage.getItem("dataList");
        return saved ? JSON.parse(saved) : [];
    });
    const navigate = useNavigate();
    const handleChange = (event)=>{
        setFormData({...formData, [event.target.name]: event.target.value});
    }
    const handleSubmit = (event)=>{
        event.preventDefault(); //jate load na hoy browser //
        const newData = {...formData, id: Date.now()};
        const updatedList = [...dataList, newData];
        setDataList(updatedList);
        localStorage.setItem("dataList", JSON.stringify(updatedList));
        setFormData({name: '', email: '', age: '', description: ''});
    }
    return (
        <div className='cmn-padding-cls main-div-home-cls'>
            <div className='form-usestate-mainform'>
                {/* Form */}
                <form className="mt-2 form-simple-cls" onSubmit={handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                        <p>Type: {formData.name}</p>
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        <p>Type: {formData.email}</p>
                    </div>
                    <div>
                        <label>Age: </label>
                        <input type="text" name="age" value={formData.age} onChange={handleChange} />
                        <p>Type: {formData.age}</p>
                    </div>
                    <div>
                        <label>Des: </label>
                        <input type="text" name="description" value={formData.description} onChange={handleChange} />
                        <p>Type: {formData.description}</p>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            {/* Card Grid */}
            <div className="grid grid-cols-3 gap-4 card">
                {dataList.map((item) => (
                <div key={item.id} className="border p-4 rounded shadow">
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p>{item.email}</p>
                    <p>{item.age}</p>
                    <button
                    onClick={() => navigate(`/details/${item.id}`, { state: item })}
                    className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
                    >
                    View Details
                    </button>
                </div>
                ))}
            </div>
        </div>
    )
}

