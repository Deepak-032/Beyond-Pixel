import React from 'react'
import CinematographyLayout from './CinematographyLayout'
import { useStateValue } from './StateProvider'

function Cinematography({ displayHandler }) {
    const [{ cinematography }] = useStateValue()

    return (
        <>
            {cinematography.map((project, index) => {
                project.id = index + 1
                return (
                    <CinematographyLayout
                        key={project.id}
                        name={project.name}
                        content={project.content}
                        video={project.videoSrc}
                        displayHandler={displayHandler}
                    />
                )
            })}
        </>
    )
}

export default Cinematography
