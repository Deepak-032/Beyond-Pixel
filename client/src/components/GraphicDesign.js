import React from 'react'
import GraphicDesignLayout from './GraphicDesignLayout'
import { useStateValue } from './StateProvider'

function GraphicDesign() {
    const [{ graphicDesign }] = useStateValue()

    return (
        <>
            {graphicDesign.map((project, index) => {
                project.id = index + 1
                return (
                    <GraphicDesignLayout
                        key = { project.id }
                        name={project.name}
                        content={project.content}
                        href={project.href}
                        images={project.imgSrc} 
                    />
                )
            })}
        </>
    )
}

export default GraphicDesign
