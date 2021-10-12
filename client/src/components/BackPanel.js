import React, { useState, useEffect, useReducer } from 'react'
import { Link, useHistory } from "react-router-dom"
import axios from 'axios'
import UploadFile from './UploadFile'

const initialState = {
    oldPassword: '',
    newPassword: '',
    logIn: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'ON_CHANGE':
            const { name, value } = action.payload
            return { ...state, [name]: value }
        case 'LOGIN':
            return { ...state, logIn: true }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

function BackPanel({ setProjectName }) {
    const history = useHistory()
    const [display, setDisplay] = useState(false)
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        if (state.logIn) {
            axios({
                method: "POST",
                url: "/change",
                data: state
            })
                .then((response) => {
                    if (response.data.status === 'success') {
                        alert("Password successfully changed.")
                        history.push("/admin")
                    } else if (response.data.status === 'fail') {
                        alert("Password is incorrect.")
                    }
                })
                .then(() => {
                    dispatch({ type: 'RESET' })
                })
        }
    }, [state.logIn])

    return (
        <div className="max_width">
            <div className="admin_container">
                <Link to="/">
                    <img
                        className="navbar_logo"
                        src="/assets/Group6@2x.png"
                        alt="logo"
                    />
                </Link>
            </div>
            <div className="upload_file_heading" style={{ marginTop: "20px", textAlign: "center", fontSize: "22px" }}>Welcome to the Admin's Back Panel</div>
            <UploadFile setProjectName={setProjectName} />
            {display ?
                <form className="form_admin" onSubmit={event => { dispatch({ type: 'LOGIN' }); event.preventDefault() }} method="POST">
                    <input type="password" value={state.password} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="oldPassword" placeholder="Old Password" minLength="8" required />
                    <input type="password" value={state.password} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="newPassword" placeholder="New Password" minLength="8" required />
                    <button type="submit" className="btn_contact_us">Change Password</button>
                </form> :
                <button className="btn_contact_us" style={{ margin: "20px 0" }} onClick={() => setDisplay(!display)}>Change Password</button>
            }
        </div>
    )
}

export default BackPanel
