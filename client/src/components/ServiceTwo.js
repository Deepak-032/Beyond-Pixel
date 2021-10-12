import React from 'react'
import Heading from './Heading'
import VLine from './VLine'
import { Link } from "react-router-dom"

function ServiceTwo() {
    return (
        <div className="position-relative p_t_mobile">
            <div className="row service max_width">
                <img
                    className="service_img_spiral2 position-absolute d-none d-md-block"
                    src="/assets/MaskGroup2@2x.png"
                    alt=""
                />
                <div className="outer_block_left d-none d-md-block"></div>
                <div className="col-12 col-md-6 d-flex d-md-block justify-content-center">
                    <div className="d-flex flex-row position-relative fit_content">
                        <img
                            style={{
                                top: "-17%",
                                left: "12%"
                            }}
                            className="service_img_bowl position-absolute"
                            src="/assets/350633000@2x.png"
                            alt=""
                        />
                        <img
                            className="service_img_cup"
                            src="/assets/e1440a118507173.608a6cd833752@2x.png"
                            alt=""
                        />
                        <div className="block_container position-relative">
                            <div className="block_two position-absolute"></div>
                            <img
                                className="service_img_masks_two position-absolute"
                                src="/assets/3506330@2x.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column col-12 col-md-6 mobile align_center p_t_mobile" style={{ paddingLeft: "222.5px" }}>
                    <Heading LWidth="81px" fontSize="40px" marginTop="0" heading={<>Graphic<br />Design</>}>
                        <div className="v_lines d-flex position-absolute d-md-flex d-none v_line_two">
                            <VLine LHeight="162px" MRight="100px" />
                            <VLine LHeight="268px" />
                        </div>
                    </Heading>
                    <span className="para text_center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus quidem officiis hic autem in quam sunt sequi culpa vel omnis, eaque veritatis excepturi magni mollitia adipisci minus ipsam eius ea animi alias nulla. Voluptatum possimus sequi quo voluptatibus minus voluptates error sapiente ipsa, numquam voluptatem. Explicabo nihil animi sequi?
                    </span>
                    <div>
                        <Link to="/service/graphic%20design">
                            <button className="btn_view_more">View More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceTwo
