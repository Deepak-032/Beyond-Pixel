import React from 'react'
import Heading from './Heading'
import './styles/Reviews.css'

function Reviews() {
    return (
        <div className="row m_t_zero p_t_mobile max_width review">
            <div className="col-12 d-md-none mb-5">
                <Heading LWidth="81px" fontSize="40px" marginTop="0" heading={<>What People<br />Say About Us</>}></Heading>
            </div>
            <div className="col-12 col-md d-none d-md-block" style={{ fontSize: "40px", lineHeight: "1.1", fontWeight: "900" }}>
                <br />What People<br />Say About<br />Us
            </div>
            <div id="carouselExampleFade" className="carousel carousel-fade carousel-dark slide col-12 col-md-8" data-bs-ride="carousel">
                <span className="review_line d-none d-md-block"></span>
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <div className="client_name">
                            Client Name 1
                            <div>Lorem ipsum dolor sit amet</div>
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="carousel-item">
                        <div className="client_name">
                            Client Name 2
                            <div>Lorem ipsum dolor sit amet</div>
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="carousel-item">
                        <div className="client_name">
                            Client Name 3
                            <div>Lorem ipsum dolor sit amet</div>
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <i className="bi bi-caret-left-fill navigate"></i>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next width" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <i className="bi bi-caret-right-fill navigate"></i>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div >
    )
}

export default Reviews
