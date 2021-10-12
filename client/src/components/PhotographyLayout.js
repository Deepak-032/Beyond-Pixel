import React from 'react'
import { Link } from 'react-router-dom'

function PhotographyLayout({ name, content, imgSrc, bgColor, reverse, href }) {
    return (
        <div className="row m_z_gallery" style={{ flexDirection: `${reverse}` }}>
            <div className="col-12 col-md-7">
                <img
                    className="gallery_img"
                    src={imgSrc[0]}
                    alt=""
                />
            </div>
            <div className="col-12 col-md">
                <div className="d-flex flex-column" style={{ height: "100%" }}>
                    <div className="d-flex flex-row">
                        <img
                            className="gallery_img_50"
                            src={imgSrc[1]}
                            alt=""
                        />
                        <img
                            className="gallery_img_50"
                            src={imgSrc[2]}
                            alt=""
                        />
                    </div>
                    <div className="d-flex flex-column project" style={{ backgroundColor: `${bgColor}` }}>
                        <div className="project_name">{name}</div>
                        <div className="d-flex project_description">
                            <div>{content}</div>
                            <Link to={href}><button>View All</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotographyLayout
