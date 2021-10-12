import React from 'react'
import Heading from './Heading'
import VLine from './VLine'
import { Link } from "react-router-dom"

function ServiceOne() {
    return (
        <div className="position-relative p_t_mobile">
            <div className="service_one row reverse max_width" id="services">
                <div className="d-flex flex-column col-12 col-md-6 align_center">
                    <Heading LWidth="81px" fontSize="40px" marginTop="70px" heading={<>Photography</>}>
                        <div className="v_lines d-flex position-absolute d-md-flex d-none">
                            <VLine LHeight="612px" MRight="100px" />
                            <VLine LHeight="543.5px" MRight="100px" />
                            <VLine LHeight="411px" MRight="100px" />
                        </div>
                    </Heading>
                    <span className="para text_center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus quidem officiis hic autem in quam sunt sequi culpa vel omnis, eaque veritatis excepturi magni mollitia adipisci minus ipsam eius ea animi alias nulla. Voluptatum possimus sequi quo voluptatibus minus voluptates error sapiente ipsa, numquam voluptatem. Explicabo nihil animi sequi?
                    </span>
                    <div>
                        <Link to="/service/photography">
                            <button className="btn_view_more">View More</button>
                        </Link>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify_content">
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
                <div className="outer_block_right d-none d-md-block"></div>
                <img
                    className="service_img_spiral position-absolute d-md-block d-none"
                    src="/assets/MaskGroup1@2x.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default ServiceOne
