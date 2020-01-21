import dispatcher from "./dispacher"

export const LoginUser = (phone, password) => {
	console.log("LoginUser Action Called")
	dispatcher.dispatch({
		type: "LOGIN_INFO",
		phoneNo: phone,
		password:password
	});
}

export const GetUser = ()  => {
	dispatcher.dispatch({
		type: "GET_INFO"
	});
}

