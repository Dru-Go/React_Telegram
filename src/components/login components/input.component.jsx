import React from 'react'


const Input = ({handleChange}) => {
    // Tokenize 
    // Validate
    return (
        <div className="w-50p mt-4  mx-auto ">
            <input className="p-2 px-2 w-full border-2 outline-none rounded-lg focus:border-blue-500 text-xs" type="text" placeholder="Phone Number" onChange={handleChange}/>
        </div>
    )
}

export default Input;