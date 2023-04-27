import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../../shared/Navbar/Navbar'
import Footer from '../Shared/Footer'
import CareerBody from './CareerBody'
import GroupTitle from '../home/group/GroupTitle'
import Group from '../home/group/Group'


export const structuredDataSingle = () => {
    let data = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "About Ray Advertising LLC is a Rapidly Growing",
        "url": "https://rayadvertising.com/career",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://rayadvertising.com/service{search_term_string}https://rayadvertising.com/contact",
            "query-input": "required name=search_term_string"
        }
    }
    return JSON.stringify(data);
}

const Carrer = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Career | Ray Advertising LLC</title>
                <script type="application/ld+json">
                    {`${structuredDataSingle()}`}
                </script>
            </Helmet>
            <Navbar />
            <CareerBody />
            <GroupTitle />
            <Group />
            <Footer />
        </div>
    )
}

export default Carrer