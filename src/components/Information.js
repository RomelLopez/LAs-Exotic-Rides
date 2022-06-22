import React, { useState } from 'react'
import './Information.css'
import UniversalNavbar from './UniversalNavbar'

const Information = () => {
    return (
        <>
            <UniversalNavbar />
            <div className="faqs">
                <h1> How to upload:</h1>
                <p> You may contribute your car spotting via email, which is located on the
                    navbar.
                </p>
                <h1> Rules on contributions: </h1>
                <p>Owner of this website will decide what photos are appropriate to upload.
                    Visibility and angle may be a factor - use current photos as reference.
                </p>

            </div>
        </>
    )
}

export default Information;