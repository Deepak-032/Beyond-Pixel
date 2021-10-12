import React from 'react'
import MotionGraphicsLayout from './MotionGraphicsLayout'
import { useStateValue } from './StateProvider'

function MotionGraphics({ displayHandler }) {
    const [{ motionGraphics }] = useStateValue()

    return (
        <>
            {motionGraphics.map((project, index) => {
                project.id = index + 1
                return (
                    <MotionGraphicsLayout
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

export default MotionGraphics
