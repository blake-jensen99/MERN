import React, { useState } from "react";

const Form = () => {
    const [fnameError, setFnameError] = useState("")
    const [lnameError, setLnameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [password, setPassword] = useState("");
    const [confPassError, setConfPassError] = useState("")




    return(
        <div>
            <form>
                <div>
                    <p>{fnameError}</p> 
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => {
                        if (e.target.value.length == 0) {
                            setFnameError("")
                        }
                        else if (e.target.value.length < 2) {
                            setFnameError("First name must be at least 2 characters")
                        }
                        else {
                            setFnameError("")
                        } 
                    }
                    } />
                </div>
                <div>
                    <p>{lnameError}</p> 
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => {
                        if (e.target.value.length == 0) {
                            setLnameError("")
                        }
                        else if (e.target.value.length < 2) {
                            setLnameError("Last name must be at least 2 characters")
                        }
                        else {
                            setLnameError("")
                        } 
                    }
                    } />
                </div>
                <div>
                    <p>{emailError}</p>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => {
                        if (e.target.value.length == 0) {
                            setEmailError("")
                        }
                        else if (e.target.value.length < 5) {
                            setEmailError("Email must be at least 5 characters")
                        }
                        else {
                            setEmailError("")
                        } 
                    }
                    } />
                </div>
                <div>
                    <p>{passwordError}</p>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => {
                        setPassword(e.target.value)
                        if (e.target.value.length == 0) {
                            setPasswordError("")
                        }
                        else if (e.target.value.length < 8) {
                            setPasswordError("Password must be 8 characters")
                        }
                        else {
                            setPasswordError("")
                        } 
                    }
                    }/>
                </div>
                <div>
                    <p>{confPassError}</p>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => {
                        if ( e.target.value != password) {
                            setConfPassError("Passwords musts match")
                        }
                        else {
                            setConfPassError("")
                        } 
                    }
                    } />
                </div>
            </form>
        </div>
    )
}

export default Form;