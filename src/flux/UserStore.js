import { EventEmitter } from "events";

import dispatcher from "./dispacher"

class UserStore extends EventEmitter {
    constructor() {
        super()
        this.state = {
            basicInfo : { Country:"", phoneNo:"", isLoggedIn: false, ErrorMessage: "", Password:0 }
        }
        
    }
    getAll() {
        return this.state.basicInfo;
    }
    createUser(country, phoneNo, isLogged, errorMessage, pass) {
        // Better way of writing is requiered
        this.state.basicInfo.Country = country;
        this.state.basicInfo.phoneNo = phoneNo;
        this.state.basicInfo.isLoggedIn = isLogged;
        this.state.basicInfo.ErrorMessage = errorMessage;
        this.state.basicInfo.Password = pass;
        this.emit("change");
    }

    handleActions = (action) => {
        console.log("Basic Action ", action)
        switch (action.type) {
            case "LOGIN_INFO": {     
                console.log("Creating Info ....")
                var base = this.state.basicInfo;
                base.phoneNo = action.phoneNo;
                base.Password = action.password;
                this.createUser(base.Country, base.phoneNo, base.isLoggedIn, base.ErrorMessage, base.Password)
                console.log("INFO CREATED");
                break
            }
            case "GET_INFO": {
                console.log("GETTING INFO ...") 
                console.log(this.getAll())
                break
            }
            default :{
                console.log("Error refering to a dispatcher")
            }   
        }
    }

}

// lets create a new UserStore
const userStore = new UserStore();

dispatcher.register(userStore.handleActions);
userStore.on("change", () => {
    console.log("State Changed")
})

export default userStore;