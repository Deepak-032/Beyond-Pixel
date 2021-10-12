// for 50% image layout in project details
import React from 'react'
import './styles/LayoutTwo.css'

function LayoutTwo({ layoutTwoSrc, styling = false }) {
    return (
        <>
            <div className={`row ${styling ? "layout_two first" : ""}`}>
                <div className={`col ${styling ? "img_margin_l2" : ""}`}><img src={layoutTwoSrc[0]} className="w-100" alt="" /></div>
                <div className="col"><img src={layoutTwoSrc[1]} className="w-100" alt="" /></div>
            </div>
            <div className={`row ${styling ? "layout_two" : ""}`}>
                <div className={`col ${styling ? "img_margin_l2" : ""}`}><img src={layoutTwoSrc[2]} className="w-100" alt="" /></div>
                <div className="col"><img src={layoutTwoSrc[3]} className="w-100" alt="" /></div>
            </div>
        </>
    )
}

export default LayoutTwo
