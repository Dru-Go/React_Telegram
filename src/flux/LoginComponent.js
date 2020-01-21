import React, { Component } from 'react'
import UserStore from './UserStore'
import * as Actions from "./Actions";

export default class LoginCommponent extends Component {
	constructor() {
		super()
		this.state = {
			userInfo: {
				phoneNo: "",
				password: ""
			}
		}
	}



	handlePhone = (e) => {
		const info = this.state.userInfo;
		info.phoneNo = e.target.value;

		if (info.phoneNo.length >= 1) {
			this.removeClass("PhoneInput", "imp")
		}
	}

	handlePass = (e) => {
		const info = this.state.userInfo;
		info.password = e.target.value;
		
		if (info.password.length >= 1) {
			this.removeClass("pass", "imp")
		}
	}

	Clicked = (e) => {
		e.preventDefault()

		const imput = document.getElementById("PhoneInput")
		const pass = document.getElementById("pass")

		const info = this.state.userInfo;


		this.setState({
			userInfo: {
				phoneNo: info.phoneNo,
				password: info.password
			}
		})

		if (info.phoneNo !== "") {

			this.addClass("inpdiv", "hidden")
			this.removeClass("PassInput", "hidden")

			if (info.password !== "") {
				const password = Date.now() + info.password;
				Actions.LoginUser(info.phoneNo, password);
			} else {
				this.addClass("pass", "imp");
			}

			imput.value = "";
			pass.value = "";

		} else {
			this.addClass("PhoneInput", "imp");
		}
	}
	
	addClass(id, className) {
		document.getElementById(id).classList.add(className)
	}
	removeClass(id, className) {
		document.getElementById(id).classList.remove(className)
	}

	render() {
		return (
			<div className=" bg-gray-100 mt-20 cont p-12">
				{/* SVG */}

				<div className="opacity-75">
					<svg className="m-auto" height="94px" viewBox="0 0 24 24" width="94px">
						<circle cx="12" cy="12" fill="#039be5" r="12" />
						<path
							d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"
							fill="#fff" /></svg>
				</div>
				{/* Sign IN Text */}

				<div className="mt-5  text-center welcome font-semibold">Sign in to Telegram</div>
				{/* Confirmation */}


				{/* Input Phone Number */}
				<form>
					<div className="flex">
						<div className="w-50p mt-4 mx-auto " id="inpdiv">
							<input className="p-2 px-2 w-full border-2 outline-none rounded-lg focus:border-blue-500 text-xs" type="number" required placeholder="Phone Number" id="PhoneInput" onChange={this.handlePhone} />
						</div>
						<div className="w-50p mt-4 mx-auto hidden" id="PassInput">
							<input className="p-2 px-2 w-full border-2 outline-none rounded-lg focus:border-blue-500 text-xs" type="password" placeholder="Password" id="pass" onChange={this.handlePass} />
						</div>

					</div>

					{/* Sessionize Validated User */}

					<div className="p-4 mx-auto w-50p ">
						<label className="flex items-start">
							<div
								className="bg-white border-2 rounded  w-4 h-4 flex flex-shrink-0 justify-center items-center mr-2 focus:bg-blue-500 ">
								<input type="checkbox" className="opacity-0  absolute" />
								<svg className="fill-current hidden w-3 h-2 w-full h-full rounded-sm bg-blue-500 text-green-100 pointer-events-none"
									viewBox="0 0 20 20">
									<path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
							</div>
							<div className="select-none text-xs">keep me signed in </div>
						</label>
					</div>

					{/* Submit */}
					<div className="flex flex-col mt-8 w-50p mx-auto">
						<button type="submit" onClick={this.Clicked} id="but" className="bg-blue-500 hover:bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-lg">
							Next
                    </button>
					</div>
				</form>


			</div>
		)
	}
}
