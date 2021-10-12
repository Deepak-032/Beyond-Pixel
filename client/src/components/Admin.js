import React, { useReducer, useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import axios from 'axios'
import './styles/Admin.css'
import { useDocumentTitle } from './CustomHooks'

const initialState = {
    username: '',
    password: '',
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

function Admin({ setAuth }) {
    const history = useHistory()
    useDocumentTitle("Beyond Pixel · Admin")
    const [state, dispatch] = useReducer(reducer, initialState)
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        if (state.logIn) {
            axios({
                method: "POST",
                url: "/verify",
                data: state
            })
                .then((response) => {
                    if (response.data.status === 'success') {
                        setAuth(true)
                        history.push("/admin/upload")
                    } else if (response.data.status === 'fail') {
                        alert("Email or Password is incorrect.")
                    }
                })
                .then(() => {
                    dispatch({ type: 'RESET' })
                })
        }
    }, [state.logIn])

    return (
        <>
            <div className="admin_container">
                <Link to="/">
                    <img
                        className="navbar_logo"
                        src="/assets/Group6@2x.png"
                        alt="logo"
                    />
                </Link>
                <form className="form_admin" onSubmit={event => { event.preventDefault(); dispatch({ type: 'LOGIN' }); }} method="POST">
                    <input type="text" value={state.username} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="username" placeholder="Username" />
                    <div className="password">
                        <input type={showPassword ? "text" : "password"} value={state.password} onChange={event => dispatch({ type: 'ON_CHANGE', payload: event.target })} name="password" placeholder="Password" minLength="8" required />
                        <span className="show_password" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}</span>
                    </div>
                    <button type="submit" className="btn_contact_us">Log In</button>
                </form>
            </div>
        </>
    )
}

export default Admin
