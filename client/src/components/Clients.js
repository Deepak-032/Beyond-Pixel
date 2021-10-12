import React from 'react'
import Heading from './Heading'
import './styles/Clients.css'

function Clients({bgColor}) {
    return (
        <div className="clients pt-3 pb-3" style={{backgroundColor: bgColor}}>
            <div className="max_width client col d-flex ">
                <div className="clients_mobile">
                    <Heading LWidth="43px" fontSize="22px" heading={<>Our Clients</>}></Heading>
                </div>
                <img
                    src="/assets/BMW.png"
                    alt="BMW"
                /> 
                <img
                    src="/assets/Beanly.png"
                    alt="Beanly"
                />
                <img
                    src="/assets/DiscoverCareer.png"
                    alt="Discover Career"
                />
                <img
                    src="/assets/Codeupkid.png"
                    alt="Codeupkid"
                />
                <img
                    src="/assets/Divine_nature.png"
                    alt="Divine_nature"
                />
                <img
                    src="/assets/IItiansCaliber.png"
                    alt="IItiansCaliber"
                />
            </div>
        </div>
    )
}

export default Clients
