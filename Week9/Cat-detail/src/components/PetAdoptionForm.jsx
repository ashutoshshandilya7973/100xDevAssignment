import React from 'react'
import { useState } from 'react';
const PetAdoptionForm = () => {
    const [formData, setFormData] = useState([]);
    const [values, setValues] = useState({
        name: "",
        type: "",
        breed: "",
        adoptname: "",
        email: "",
        phone: "",
    })
    const [errors, setErrors] = useState({})
    const [showTable, setShowTable] = useState(false);
    const { name, type, breed, adoptname, email, phone } = values;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(values);
        if(Object.values(values).some((val)=> !val)){
            alert("Please fill in all fields");
            return;
        }
        if(Object.values(errors).some((val)=> val)){
            alert("Please fix all errors");
            return;
        }
        setFormData([...formData, values]);
        setShowTable(true);
        setValues({
            name: "",
            type: "",
            breed: "",
            adoptname: "",
            email: "",
            phone: "",
        })
        setErrors({})
    }
    const handleGoBack = () => {
        setShowTable(!showTable);
    }
    return (
        <div>
            {showTable ?(
                <div>
                    <table className="table-auto w-1/2 m-auto">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Pet Name</th>
                                <th className="px-4 py-2">Pet Type</th>
                                <th className="px-4 py-2">Pet Breed</th>
                                <th className="px-4 py-2">Adopter Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.map((data, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{data.name}</td>
                                    <td className="border px-4 py-2">{data.type}</td>
                                    <td className="border px-4 py-2">{data.breed}</td>
                                    <td className="border px-4 py-2">{data.adoptName}</td>
                                    <td className="border px-4 py-2">{data.email}</td>
                                    <td className="border px-4 py-2">{data.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={handleGoBack} className="bg-black text-white rounded-md mt-4 items-center">Go Back</button>
                </div>
            ):
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col item-centre w-[30%] m-auto bg-slate-400 align-middle p-4 rounded-lg mt-6">
                    <label htmlFor="name">Pet Name</label>
                    <input type="text" name="name" value={name} onChange={handleChange} />
                    <label htmlFor="type">Pet Type</label>
                    <input type="text" name="type" value={type} onChange={handleChange} />
                    <label htmlFor="breed">Pet Breed</label>
                    <select name="breed" value={breed} onChange={handleChange}>
                        <option value="Bengal">Bengal</option>
                        <option value="Siamese">Siamese</option>
                        <option value="Persian">Persian</option>
                    </select>
                    <label htmlFor="adoptName">Your Name</label>
                    <input type="text" name="adoptname" value={adoptname} onChange={handleChange} />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={handleChange} />
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" value={phone} onChange={handleChange} />
                    <button type="submit" className='bg-black text-white rounded-md mt-4 items-center'>Submit</button>


                </div>
            </form>
}
        </div>
    )
}

export default PetAdoptionForm
