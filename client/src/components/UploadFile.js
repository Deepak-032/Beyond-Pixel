import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';
import React, { useState } from 'react'
import { useStateValue } from './StateProvider'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import './styles/UploadFile.css'

const initialState = {
    service: '',
    projectName: '',
    projectDesc: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image: '',
    color: '',
    videoLink: ''
}

function UploadFile({ setProjectName }) {
    const history = useHistory()
    const [{ }, dispatch] = useStateValue()
    const [state, setState] = useState(initialState)

    const change = e => {
        if (e.target.name === "service") {
            setState({ ...initialState, [e.target.name]: e.target.value })
            return true
        }
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const fileHandler = e => {
        setState({ ...state, [e.target.name]: e.target.files[0] })
    }

    const submit = e => {
        e.preventDefault()
        const { service, projectName, projectDesc, image1, image2, image3, image4, image, color, videoLink } = state

        const formData = new FormData()
        formData.append('service', service)
        formData.append('projectName', projectName)
        formData.append('projectDesc', projectDesc)
        formData.append('image1', image1)
        formData.append('image2', image2)
        formData.append('image3', image3)
        formData.append('image4', image4)
        formData.append('image', image)
        formData.append('color', color)

        if (service === "cinematography" || service === "motionGraphics") {
            let data = {
                service,
                projectName,
                projectDesc,
                videoLink
            }
            axios.post("/uploadData", data)
                .then( res => {
                    let { service, id, name, content, videoSrc } = res.data
                    let item = { id, name, content, videoSrc }
                    dispatch({ type: "PUSH", service: service, item: item })
                    setProjectName(projectName)
                    history.push("/admin/upload/multiple")
                })
        } else {
            axios.post("/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then( res => {
                    let { service, id, name, content, imgSrc, bgColor, href } = res.data
                    if (service === "photography") {
                        let item = { id, name, content, imgSrc, bgColor, href }
                        dispatch({ type: "PUSH", service: service, item: item })
                    } else if (service === "graphicDesign") {
                        let item = { id, name, content, imgSrc, href }
                        dispatch({ type: "PUSH", service: service, item: item })
                    } else if (service === "uiDesign") {
                        let item = { id, name, content, image }
                        dispatch({ type: "PUSH", service: service, item: item })
                    }
                    setProjectName(projectName)
                    history.push("/admin/upload/multiple")
                })
        }
    }

    return (
        <div>
            <form onSubmit={submit} className="form_admin form_upload" method="POST">
                <select defaultValue="DEFAULT" className="highlight" name="service" onChange={change} required>
                    <option value="DEFAULT" disabled>Select the Service</option>
                    <option value="photography">Photography</option>
                    <option value="graphicDesign">Graphic Design</option>
                    <option value="cinematography">Cinematography</option>
                    <option value="motionGraphics">Motion Graphics</option>
                    <option value="uiDesign">Ui Design</option>
                </select>
                {state.service &&
                    <>
                        <input type="text" name="projectName" value={state.projectName} onChange={change} placeholder="Enter new project's name" />
                        <textarea type="text" name="projectDesc" value={state.projectDesc} onChange={change} placeholder="Enter project's description" />

                        <div className="upload_file_container">
                            <div className="upload_file_heading">For the selected service page</div>
                            {state.service === "photography" || state.service === "graphicDesign" ?
                                <div className="row justify-content-between">
                                    <div className="col-12 col-lg-6 upload_file">
                                        <div className="input-group mb-3">
                                            <label className="input-group-text" htmlFor="inputGroupFile01">Image 1</label>
                                            <input type="file" name="image1" onChange={fileHandler} className="form-control" id="inputGroupFile01" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <label className="input-group-text" htmlFor="inputGroupFile02">Image 2</label>
                                            <input type="file" name="image2" onChange={fileHandler} className="form-control" id="inputGroupFile02" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <label className="input-group-text" htmlFor="inputGroupFile03">Image 3</label>
                                            <input type="file" name="image3" onChange={fileHandler} className="form-control" id="inputGroupFile03" />
                                        </div>
                                        <input type="color" name="color" onChange={change} disabled={state.service === "photography" ? false : true} />
                                        <div className={`input-group mb-3 ${state.service === "photography" ? "d-none" : ""}`}>
                                            <label className="input-group-text" htmlFor="inputGroupFile04">Image 4</label>
                                            <input type="file" name="image4" onChange={fileHandler} disabled={state.service === "photography" ? true : false} className="form-control" id="inputGroupFile04" required />
                                        </div>
                                    </div>

                                    <div className={`col-12 col-lg-6 d-flex ${state.service === "photography" ? "" : "d-none"}`} style={{ maxWidth: "fit-content" }}>
                                        <div className="image_one d-flex align-items-center">Image 1</div>
                                        <div>
                                            <div className="d-flex">
                                                <div className="image">Image 2</div>
                                                <div className="image">Image 3</div>
                                            </div>
                                            <div className="demo_project_name">Project Name</div>
                                        </div>
                                    </div>

                                </div> :
                                <>
                                    {state.service === "uiDesign" ?
                                        <div className={`input-group mb-3`}>
                                            <label className="input-group-text" htmlFor="inputGroupFile05">Image</label>
                                            <input type="file" name="image" onChange={fileHandler} className="form-control" id="inputGroupFile05" required />
                                        </div> :
                                        <input type="link" name="videoLink" value={state.videoLink} onChange={change} placeholder="Enter link htmlFor the video" required />
                                    }
                                </>
                            }
                        </div>
                    </>
                }
                <button type="submit" className="btn_contact_us">Upload</button>
            </form>
        </div>
    )
}

export default UploadFile
