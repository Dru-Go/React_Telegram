import React, { Component } from 'react'
import SelectCountry from './select_country.component';
import Input from './input.component';
import Sessionize from './sessionize.component';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNo:""
        };
    }
    HandleChange = (e) =>
    {
        this.setState({
            phoneNo: e.target.value
        }, () => {
            
                
            console.log(this.state.phoneNo);
        })
    }

    render() {
        return (
            <div className=" bg-gray-100 mt-20 cont p-12">
                {/* SVG */}

                <div className="opacity-75">
                    <svg className="m-auto"  height="94px" viewBox="0 0 24 24" width="94px">
                        <circle cx="12" cy="12" fill="#039be5" r="12" />
                        <path
                            d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"
                            fill="#fff" /></svg>
                </div>
                {/* Sign IN Text */}

                <div className="mt-5  text-center welcome font-semibold">Sign in to Telegram</div>
                {/* Confirmation */}

                <SelectCountry />
                
                {/* Input Phone Number */}

                <Input handleChange={ this.HandleChange }/>

                {/* Sessionize Validated User */}

                <Sessionize />
                
                {/* Submit */}
                <div className="flex flex-col mt-8 w-50p mx-auto">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-lg">
                        Next
                    </button>
                </div>

            </div>
        );
    }
}

export default Login;