import React from 'react'
import Heading from './Heading'

function About() {
    return (
        <div className="max_width" >
            <div className="about row flex-column align_center">
                <Heading LWidth="86px" fontSize="40px" heading={<>How We Solve<br />Problems</>}></Heading>
                <div className="row justify-content-between justify_center">
                    <span className="para col-12 col-md-6 text_center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus quidem officiis hic autem in quam sunt sequi culpa vel omnis, eaque veritatis excepturi magni mollitia adipisci minus ipsam eius ea animi alias nulla. Voluptatum possimus sequi quo voluptatibus minus voluptates error sapiente ipsa, numquam voluptatem. Explicabo nihil animi sequi?
                    </span>
                    <span className="para col-12 col-md-6 text_center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, at porro. Vel vitae deserunt modi dolor doloremque saepe iste libero. Hic voluptatibus obcaecati suscipit. Officia magnam laborum consequatur dicta velit.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default About
