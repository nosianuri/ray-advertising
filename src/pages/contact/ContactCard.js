import React from 'react'

const ContactCard = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-2 lg:mx-32 md:mx-28 ml-10 overflow-hidden gap-10 py-8'>
            <div>
                <h2>OUR LOCATION</h2>
                <p>2582 S Songbird Cir
                    Washington, UT, United States</p>
            </div>
            <div>
                <h2>WORKING TIME</h2>
                <p>24/7</p>
            </div>
            <div>
                <h2>OUR NUMBERS</h2>
                <p>(435) 627-7657</p>
            </div>
            <div>
                <h2>EMAIL ADDRESS</h2>
                <p>contact@rayadvertising.com</p>
            </div>
        </div>
    )
}

export default ContactCard