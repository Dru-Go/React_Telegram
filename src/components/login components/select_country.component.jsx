import React from 'react'



const SelectCountry = () => {
    return (
        <div>
            <div className="mt-1 text-center conf mx-auto text-gray-600">
                Please confirm your country and your phone Number
                </div>
            <div className="w-50p mt-2 focus:top-0 mx-auto rounded-lg border-t  ">
                {/* <!-- This Select tag requires change --> */}
                <select className="w-full p-2  text-gray-500 text-xs focus:border-blue-500 focus:border-2 rounded-lg outline-none  shadow-inner h-8  border-gray-400">
                    <option value="376">Country</option>
                    <option value="244">Angola (+244)</option>
                    <option value="1264">Anguilla (+1264)</option>
                    <option value="1268">Antigua &amp; Barbuda (+1268)</option>
                    <option value="54">Argentina (+54)</option>
                    <option value="374">Armenia (+374)</option>
                </select>
            </div>
        </div>
    )
}

export default SelectCountry;