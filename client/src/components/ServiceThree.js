import React from 'react'
import Heading from './Heading'
import VLine from './VLine'
import { Link } from "react-router-dom"

function ServiceThree() {
    return (
        <div className="position-relative p_t_mobile">
            <div className="service row reverse max_width">
                <div className="d-flex flex-column col-12 col-md-6 align_center">
                    <Heading LWidth="81px" fontSize="40px" marginTop="70px" heading={<>Cinematography</>}>
                        <div className="v_lines d-flex position-absolute d-md-flex d-none">
                            <VLine LHeight="353px" MRight="100px" />
                            <VLine LHeight="131px" MRight="0" />
                        </div>
                    </Heading>
                    <span className="para text_center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus quidem officiis hic autem in quam sunt sequi culpa vel omnis, eaque veritatis excepturi magni mollitia adipisci minus ipsam eius ea animi alias nulla. Voluptatum possimus sequi quo voluptatibus minus voluptates error sapiente ipsa, numquam voluptatem. Explicabo nihil animi sequi?
                    </span>
                    <div>
                        <Link to="/service/cinematography">
                            <button className="btn_view_more">View More</button>
                        </Link>
                    </div>
                </div>
                <div className="d-flex justify_content col-12 col-md-6">
                    <div className="d-flex flex-row position-relative fit_content">
                        <img
                            className="service_img_bowl position-absolute"
                            src="/assets/350633000@2x.png"
                            alt=""
                        />
                        <img
                            className="service_img_cup"
                            src="/assets/e1440a118507173.608a6cd833752.jpg"
                            alt=""
                        />
                        <div className="block position-relative"></div>
                        <img
                            className="service_img_masks position-absolute"
                            src="/assets/3506330@2x.png"
                            alt=""
                        />
                    </div>
                </div>
                {/* <div className="outer_block_right"></div> */} {/* this service does not uses this div */}
                <img
                    className="service_img_spiral position-absolute d-none d-md-block"
                    src="/assets/MaskGroup1@2x.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default ServiceThree
