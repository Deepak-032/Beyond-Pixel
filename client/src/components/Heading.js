import React from 'react'

function Heading({ LWidth, fontSize, marginTop, heading, children }) {
    return (
        <span className="text_center d-flex flex-column" style={{ marginTop: `${marginTop}` }}>
            <span className="mobile_m_a d-none d-md-block" style={{ marginBottom: "10px", borderBottom: '4px solid #FD8814', width: `${LWidth}`, position: "relative" }}>
                {children}
            </span>
            <span className="heading_name" style={{ fontWeight: "bold", fontSize: `${fontSize}`, lineHeight: "1.1" }}>{heading}</span>
            <span className="mobile_m_a d-md-none" style={{ borderBottom: '4px solid #FD8814', width: `${LWidth}`, marginTop: "12px", position: "relative" }}></span>
        </span>
    )
}

export default Heading
