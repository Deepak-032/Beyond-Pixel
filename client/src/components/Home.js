import React from 'react'
import Clients from './Clients'
import Services from './Services'
import Reviews from './Reviews';
import './styles/Home.css'
import ContactUs from './ContactUs';
import { useDocumentTitle } from './CustomHooks'

function Home() {
    useDocumentTitle("Beyond Pixel · A Place Where Ideas Grow")

    return (
        <div>
            <Clients />
            <Services />
            <Reviews />
            <ContactUs contactClass="contact_us" shadow="box_shadow" />
        </div>
    )
}

export default Home
