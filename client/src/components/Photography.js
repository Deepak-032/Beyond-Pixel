import React from 'react'
import PhotographyLayout from './PhotographyLayout'
import { useDocumentTitle } from './CustomHooks'
import { useStateValue } from './StateProvider'
import './styles/Project.css'

function Photography() {
    useDocumentTitle("Beyond Pixel · Photography")
    const [{ photography }] = useStateValue()

    return (
        <>
            {photography.map((project, index) => {
                project.id = index + 1
                return (
                    <PhotographyLayout
                        key={project.id}
                        name={project.name}
                        content={project.content}
                        imgSrc={project.imgSrc}
                        bgColor={project.bgColor}
                        href={project.href}
                        reverse={project.id % 2 === 0 ? "row-reverse" : ""}
                    />
                )
            })}
        </>
    )
}

export default Photography
