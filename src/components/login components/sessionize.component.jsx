import React from 'react'




const Sessionize = () => {
    return (
        <div className="p-4 mx-auto w-50p ">
            <label className="flex items-start">
                <div
                    className="bg-white border-2 rounded  w-4 h-4 flex flex-shrink-0 justify-center items-center mr-2 focus:bg-blue-500 ">
                    <input type="checkbox" className="opacity-0  absolute"/>
                    <svg className="fill-current hidden w-3 h-2 w-full h-full rounded-sm bg-blue-500 text-green-100 pointer-events-none"
                        viewBox="0 0 20 20">
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                </div>
                <div className="select-none text-xs">keep me signed in</div>
            </label>
        </div>
    )
}

export default Sessionize