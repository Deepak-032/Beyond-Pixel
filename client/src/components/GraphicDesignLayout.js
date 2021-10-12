import React from 'react'
import Heading from './Heading'
import LayoutTwo from './LayoutTwo'
import { Link } from "react-router-dom"

function GraphicDesignLayout({ name, content, href,  images }) {
    return (
        <div className="row graphic_design max_width justify-content-between align-items-center">
            <div className="d-flex flex-column align_center col-12 col-lg-6">
                <Heading LWidth="81px" fontSize="40px" marginTop="0px" heading={name} />
                <span className="para text_center">
                    {content}
                </span>
                <div className="m_b_35">
                    <Link to={href}>
                        <button className="btn_view_more">View More</button>
                    </Link>
                </div>
            </div>
            <div className="col-12 col-lg-6">
                <LayoutTwo layoutTwoSrc={images} styling={true} />
            </div>
        </div>
    )
}

export default GraphicDesignLayout
