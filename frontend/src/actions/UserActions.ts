
import axios from "axios";
import { User } from "../store/types"
import { LOGIN_USER } from "./actionTypes";

//There will be functionality here that use or change our User state object

//interface that models the user's login credentials, we'll send in our POST request
export interface UserLogin {//check with You to make sure this matches loginDTO in backend
    username: string,
    password: string
}

//loginUser functionality
//we send in an object of type UserLogin, since that's what we're sending in our POST
//dispatch:any? this means we can send (or dispatch) any object to the store from this function
export const loginUser = (loginCreds:UserLogin) => async (dispatch:any) => {

    //create an empty object of type IUser - this will get filled on successful login
    let loggedInUser: User;
    console.log(loginCreds);
    console.log("loginUser")
    try {

        //send my HTTP request with axios, and put it into a variable we can use
        const response = await axios.post('http://localhost:9000/login', loginCreds);

        if(response.status === 202) { //if the login was successful...
            
             //to see the data coming back

            //populate our loggedInUser variable based on the data sent back from the server
            //this is the payload of new data we're going to dispatch to the store
            loggedInUser = {
                id: response.data.user_id,
                username: response.data.username,
                password: response.data.pass_word,
                firstName: response.data.first_name,
                lastName: response.data.last_name,
                phoneNumber: response.data.phone_number

            }

            //now we actually DISPATCH (send) this data to the store and reducers 
            //see UserReducer, see store.ts
            //notice in the reducers, this is the type of data we need for the Action object
            return dispatch({
                type: LOGIN_USER,
                payload: loggedInUser,
               
            })

        }

    } catch (e) {
        console.log("LOGIN FAILED!")
    }

}
