import React from 'react'

function VLine({LHeight, MRight}) {
    return (
        <div className="h_line" style={{height: `${LHeight}`, borderLeft: "2px solid #707070", marginRight: `${MRight}`}}>
        </div>
    )
}

export default VLine
