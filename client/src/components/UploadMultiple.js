import React, { useState } from 'react'
import { useStateValue } from './StateProvider'
import { Link } from "react-router-dom"
import axios from 'axios'
import './styles/UploadFile.css'

const initialState = {
}

function UploadMultiple({ projectName }) {
    const [{ photography }, dispatch] = useStateValue()
    const [state, setState] = useState(initialState)

    const fileHandler = e => {
        setState({ ...state, [e.target.name]: e.target.files[0] })
    }
    const change = e => {
        if (e.target.name === "service") {
            setState({ ...initialState, [e.target.name]: e.target.value })
            return true
        }
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const submit = e => {
        e.preventDefault()

    }

    return (
        <>
            <div className="admin_container mb-5">
                <Link to="/">
                    <img
                        className="navbar_logo"
                        src="/assets/Group6@2x.png"
                        alt="logo"
                    />
                </Link>
            </div>
            <form onSubmit={submit} className="form_admin form_upload max_width" method="POST">
                <div className="highlight">
                    {projectName}
                </div>
                <textarea type="text" name="projectDesc" value={""} onChange={change} placeholder="Enter project's description" />

                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupFile0">For Header</label>
                    <input type="file" className="form-control" id="inputGroupFile0" required />
                </div>
                <br/>
                <div className="upload_file_container">
                    <div className="upload_file">
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile01">Image 1</label>
                            <input type="file" className="form-control" id="inputGroupFile01" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile02">Image 2</label>
                            <input type="file" className="form-control" id="inputGroupFile02" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile03">Image 3</label>
                            <input type="file" className="form-control" id="inputGroupFile03" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile04">Image 4</label>
                            <input type="file" className="form-control" id="inputGroupFile04" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile05">Image 5</label>
                            <input type="file" className="form-control" id="inputGroupFile05" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile06">Image 6</label>
                            <input type="file" className="form-control" id="inputGroupFile06" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile07">Image 7</label>
                            <input type="file" className="form-control" id="inputGroupFile07" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile08">Image 8</label>
                            <input type="file" className="form-control" id="inputGroupFile08" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile09">Image 9</label>
                            <input type="file" className="form-control" id="inputGroupFile09" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile10">Image 10</label>
                            <input type="file" className="form-control" id="inputGroupFile10" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile11">Image 11</label>
                            <input type="file" className="form-control" id="inputGroupFile11" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile12">Image 12</label>
                            <input type="file" className="form-control" id="inputGroupFile12" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile13">Image 13</label>
                            <input type="file" className="form-control" id="inputGroupFile13" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile14">Image 14</label>
                            <input type="file" className="form-control" id="inputGroupFile14" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile15">Image 15</label>
                            <input type="file" className="form-control" id="inputGroupFile15" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile16">Image 16</label>
                            <input type="file" className="form-control" id="inputGroupFile16" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile17">Image 17</label>
                            <input type="file" className="form-control" id="inputGroupFile17" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile18">Image 18</label>
                            <input type="file" className="form-control" id="inputGroupFile18" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile19">Image 19</label>
                            <input type="file" className="form-control" id="inputGroupFile19" required />
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupFile20">Image 20</label>
                            <input type="file" className="form-control" id="inputGroupFile20" required />
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn_contact_us">Upload</button>
            </form>
        </>
    )
}

export default UploadMultiple
