import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import Navbar from '../../shared/Navbar/Navbar'
import Group from '../home/group/Group'
import GroupTitle from '../home/group/GroupTitle'
import Footer from '../Shared/Footer';
import './TermsCondition.css';

const TermsCondition = () => {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Terms & Condition | Ray Advertising LLC</title>
            </Helmet>
            <Navbar />
            <div className='lg:pt-36 pt-28 pb-10 lg:px-16 px-5'>
                <div className='mt-5 terms'>
                    <p className=' terms-title lg:mb-3 mb-3  '>Terms & Condition</p>
                    <p className='mb-3'>This Affiliate Program Operating Agreement (the “Agreement”) is made and entered into by and between Ray Advertising LLC (or “We”), and a person, (“You” or “Affiliate”/ “Publisher”) declaring the intention to cooperate with us an Affiliate.The terms and conditions contained in this Agreement apply to Your participation with the affiliate program of the agency <a className='text-[#165d8c] underline' href="http://contact@rayadvertising.com">rayadvertising.com</a>.</p>

                    <p className='mb-2'>Furthermore, each Offer may have additional terms and conditions on pages within the Affiliate Program and are incorporated as part of this Agreement.</p>

                    <p className='mb-3'>By submitting an application or participating in an Offer, You expressly consent to all the terms and conditions of this Agreement.</p>

                    <div className='mb-3'>
                        <h1 className='font-bold lg:text-xl text-lg'>Definitions</h1>
                        <p>“Advertiser” means any client of Ray Advertising LLC.</p>

                    </div>

                    <p>“Creative” shall mean a creative (creative) banner (graphic image) included in the advertiser's advertising material or promotional materials provided by the advertiser.</p>

                    <p className='mb-3'>“Irregular Events” means any of the following occurrences or activities, regardless of whether or not they are carried out by, condoned by, or known to Publisher at whatever given point in time:</p>
                    <ul className='terms-article'>
                        <li>fraud;</li>
                        <li>impressions, clicks, installs or actions generated by false representation, duress or force;</li>
                        <li>automated means to increase the number of impressions, clicks, installs or actions through tracking links completion of any required information by use of spyware, use of steal ware or use of cookie-stuffing;</li>
                        <li>impression data matches click data;</li>
                        <li>more than 70% of installs are received a-er one hour from the initiated click; the click to install rate amounts to less than 0.25%.</li>
                    </ul>

                    <p className='mb-2'>“Publisher” means any Publisher who runs an advertising campaign through Ray Advertising LLC and has entered into a Order.</p>

                    <p className='mb-3'>“Insertion Order” means any purchase order entered into by Publisher or Advertiser and Ray Advertising LLC while running advertising campaigns.</p>

                    <p className='mb-5'>“Intellectual Property Rights” means any and all copyright (including rights in computer software and databases), trademarks, service marks, trade dress, brand names, logos, goodwill, trade, business or domain names, design rights, database rights, patents, rights in inventions, know-how, trade secrets and confidential information, rights in databases, moral rights, publicity rights, performance rights, synchronization rights, mechanical rights, publishing, rental, lending and transmission rights and other intellectual property and exploitation rights of a similar or corresponding character which may now or in the future subsist in any part of the world, in all cases whether or not registered or registrable including all granted applications and all applications for registration, division, continuation, reissuance, renewals, extensions,restorations and reversions in respect of any of the same.
                    </p>
                    <p className='mb-5'>“Business Day” shall mean any day excluding Saturday, Sunday and state holidays on which banks are closed in the USA and any other locations, where person offices are engaged in the Services under this Agreement or applicable IO (when obligations of person are considered) or in the country of registration of the person (when obligations of the person are considered).</p>

                    <p className='font-bold lg:text-xl text-lg'>Enrollment in the Affiliate Program</p>
                    <p className='mb-2'>A Party (You) who want to become an Affiliate/ Publisher (further Affiliate) shall:</p>

                    <p>– to submit an Affiliate Program application from our website.</p>

                    <p className='mb-3'>An application shall clearly state real data and details without using any aliases or other means to mask Your true identity or contact information.</p>

                    <p>We will make commercially reasonable efforts to notify You within 2 (two) business days of receipt of an application.</p>

                    <p className='mb-2'>Notwithstanding the foregoing, we may accept or reject Your application at sole discretion for any reason.</p>
                    <p className='mb-2'> Pay per call marketing affiliate promotes pay per call affiliate offers.Pay per call campaigns are inherently geared towards high intent prospects. Also giving pay per call leads a significantly improved conversion rate and marketing ROI over traditional online marketing. B2B lead generation  method is used to drive prospective customers to its organization organically. This consists of various inbound marketing tactics build visibility, interest, and awareness from prospects within a specific target audience. If you're trying to combine various lead generation tactics into a comprehensive strategy - you can start with 4 Ls: lead capture, landing pages, lead magnets and lead scoring. CPA marketing is a type of affiliate marketing used by businesses of all sizes to scale marketing efforts. Pay-per-call services provide users with a wide range of telecommunications services, including audio information, entertainment or conversation.</p>
                    <p className='mb-2'>Affiliate marketing programs are partnerships that pay commissions for selling a product or service on websites or social media channels. High Paying Affiliate Programs are SEMRush, Sitegound, Liquid Web, Bluehost, Hostinger, HostGator, Cloudways,
                        Elementor etc.</p>
                    <p className='font-bold lg:text-xl text-lg'>consideration</p>
                    <p className='mb-5'>We will pay Affiliate/Publisher for each Qualified Action (the “Commission”).</p>

                    <p className='mb-3'>A <span className='font-bold'>“Qualified Action”</span> means an individual person who</p>
                    <ul className='mb-3 terms-article'>
                        <li>accesses the Program Web Site via the Link, where the Link is the last link to the Program Web Site,</li>
                        <li>is not a computer generated user, such as a robot, spider, computer script or other automated, artificial or fraudulent method to appear like an individual, real live person,</li>
                        <li>is not using pre-populated fields</li>
                        <li>completes all of the information required for such action within the time period allowed by Ray Advertising LLC.</li>
                        <li>is not later determined by Ray Advertising LLC to be fraudulent, incomplete, unqualified or a duplicate.</li>
                    </ul>

                    <p>Invoice for the advertise campaign shall be submitted by Affiliate/Publisher to the Ray Advertising LLC via the Internet (Email)</p>
                    <p className='mb-2'>not earlier to the 15 day of the month following an approved purchase.</p>

                    <p className='mb-3'>Payment is due within thirty (30) business days from receipt by Ray Advertising LLC of the Publisher's invoice for the campaign if there is no objection, unless otherwise indicated in the Special instruction field on the IO.</p>

                    <p>Commission are paid in USD.</p>

                    <p className='mb-5'>Amounts with a balance of less than $500 will roll over to the next month, and should be collected to roll over monthly until $500 is reached.</p>
                    <p>Payment via bank transfer is limited to a minimal amount of $500.</p>

                    <p className='mb-5'>If the amount is less than 500 US dollars, the Advertiser pays with PAYPAL.</p>

                    <p className='mb-5'>Payment in the amount less than 500 US dollars by wire transfer is possible in case of termination of the Agreement mutually agreed by the parties or its cancellation.
                    </p>
                    <p className='mb-2'>Taxes, Fees. Each party is solely and separately responsible for its own taxes, fees, or other levies.</p>

                    <p className='mb-2'>We will not be liable to pay any tax on the invoiced amount over and above the amount that is displayed on the Publisher's invoice.</p>

                    <p className='mb-5'>In accordance with applicable ISO standards, we will apply SWIFT payment instruction code SHA when making a payment to Affiliate/ Publisher.</p>

                    <p className='mb-5'>If Affiliate has an outstanding balance under this Agreement or any other agreement between the Affiliate and we, whether or not related to the Affiliate Program, Affiliate agrees that we may to compensate such amounts due to Ray Advertising LLC from amounts payable to Affiliate under this Agreement.</p>

                    <p className='font-bold lg:text-xl text-lg'>Creative</p>
                    <p className='mb-2'>We will grant Publishers a non-exclusive, non-transferable license to use the Creative solely for the purpose contemplated, specified in Insertion Order.</p>

                    <p className='mb-5'>Publisher must not modify the Creative without obtaining Ray Advertising LLC prior approval. (Email for approval <a className='text-[#165d8c] underline' href="http://contact@rayadvertising.com">contact@rayadvertising.com</a> ).
                    </p>
                    <p className='mb-2'>Publisher must use the Creative in strict compliance with any written instructions provided by Ray Advertising LLC. Written instructions may include instructions by e-mail.</p>

                    <p className='mb-3'>Publisher may reject the Creative if considered inappropriate.</p>

                    <p className='font-bold lg:text-xl text-lg'>Advertising Campaigns</p>
                    <p>Publisher must not:</p>
                    <ul className='my-3 terms-article'>
                        <li>unless explicitly permitted by us, to publish Advertise that include the words </li>
                        <li>“free”, “no cost”, “no charge”, or anything that;</li>
                        <li>send unsolicited e-mail that mention Advertiser;</li>
                        <li>use bots in Advertiser, community sites, message boards, chat communities, or social networks to promote Advertiser;</li>
                        <li>to provide an Advertise resulting from Irregular Events.</li>
                        <li>to another Publisher's detriment, interfere with Advertiser's or ours tracking link.</li>
                    </ul>

                    <p className='mb-2'>
                        We will not pay for Advertise resulting from Irregular Events.
                    </p>
                    <p className='mb-5'>Ensure that all materials posted on Your Media or otherwise used in connection with the Affiliate Program <span className='font-bold'>(i)</span> are not illegal, <span className='font-bold'>(ii)</span> do not infringe upon the intellectual property or personal rights of any third party and <span className='font-bold'>(iii)</span> do not contain or link to any material which is harmful, threatening, defamatory, obscene, sexually explicit, harassing, promotes violence, promotes discrimination (whether based on sex, religion, race, ethnicity, nationality, disability or age), promotes illegal activities (such as gambling) , contains profanity or otherwise contains materials that we informs You that it considers objectionable (collectively, “Objectionable Content”).
                    </p>
                    <p className='mb-5'>Not make any representations, warranties or other statements concerning Ray Advertising LLC or any of ours of their respective products or services, except as expressly authorized in this document.
                    </p>
                    <p className='mb-5'>Comply with all (i) obligations, requirements and restrictions under this Agreement and (ii) laws, rules and regulations as they relate to Your business, Your Media or Your use of the Links.
                    </p>
                    <p>You should not place ads on any online auction platform (ie ebay, Amazon, etc).</p>

                    <p className='mb-5'>If Publisher fails to comply with the requirements (“Irregular Events”, geo, kpi, traffic sources, budget etc.) Ray Advertising LLC has the right to withhold the payment for such traffic.
                    </p>
                    <p className='mb-5'>The ad tags of Ray Advertising LLC won't run at any time on illegal domains and fraud traffic: Non-human generated traffic, Bot and Malware traffic, traffic that has Adult content, Offensive Language, Illegal Drugs, Alcohol and Hate Speech, do not contain or link to any material which is harmful, threatening, defamatory, obscene, sexually explicit, harassing, promotes violence, promotes discrimination (whether based on sex, religion, race, ethnicity, nationality, disability or age). become detected on illegal domains with fraud traffic, according to fraud technology used by Ray Advertising LLC – Ray Advertising LLC will have the right to withhold the payment.</p>

                    <p className='mb-2'>Within the scope of this contractual relationship, Publisher shall transfer inter alia the following data to Ray Advertising LLC for the purpose of advertisement, billing and reporting:</p>

                    <p>device data;</p>
                    <p>location data (if required and available);</p>
                    <p className='mb-2'>PublisherID;</p>

                    <p>app or site being used at the time of impression.</p>
                    <p className='mb-5'>In the event that any transferred data under the present clause contains information concerning the personal or material circumstances of an identified or identifiable individual (personal data), Publisher warrants that the collection, processing and transfer of personal data protection comply with the applicable data protection law . In particular, Publisher warrants that Publisher has:</p>
                    <ul className='mb-5 terms-article'>
                        <li>published a conspicuous personal data protection and privacy policy that will be visible to the end user;</li>
                        <li>obtained the end user's consent, approval, opt-in, waiver, authorization or clearance to collect, process or use the end user's data as may be required by applicable laws and industry practice and standards;</li>
                        <li>notified the end user that the privacy and data protection laws in the countries in which the end user's data may be collected, processed or used may vary from the laws in the country in which such end users live;</li>
                        <li>complied with the guidelines and terms of use of any promotional channels and app stores;</li>
                        <li>complied with industry guidelines, local, national and European regulations on data protection and privacy laws.</li>
                        <li>contractually obligated by any third party (including, but not limited to, any agent or employee) who handles personal data on behalf of the Publisher to comply with all of the above.</li>
                    </ul>

                    <p>Publisher must, in particular:</p>

                    <p className='mb-2'>keep a written record of all of Publisher's efforts to comply and provide us with proof of compliance, should we request such proof.
                        Publisher grants us the right to collect, process, use or store data as provided for in this agreement and to profile based on that data.
                        confidential information. privacy</p>

                    <p className='mb-2'>“Confidential information” means any information which relates to Ray Advertising LLC (or his customers) and/or any of its group companies' business that is disclosed or made available (directly or indirectly) by we to Publisher, whether in oral, visual or written form (including graphic material), whether before, on or after the Start Date of this Agreement. Confidential Information includes but is not limited to:</p>

                    <p className='mb-2'>mechanics, look and feel, user interface, logo, name, plot, setting and characters and equipment or other materials including information which is attributable to, or the existence of which is derived from, the Purpose; and</p>

                    <p className='mb-2'>(b)the existence and terms of this Agreement and IO; and</p>

                    <p className='mb-3'>(c)information otherwise reasonably expected to be treated in a confidential manner under the circumstances of disclosure under this Agreement and IO or by the nature of the information itself.</p>

                    <p className='mb-2'>The parties must not disclose any Confidential Information.</p>

                    <p className='mb-3'>The receiving party must hold all Confidential Information, except as may be authorized by the disclosing party, must not use such Confidential Information for any purpose other than as expressly set forth in the present agreement or disclose any Confidential Information to any person, except to those of its employees and professional advisers, who need to know such information in order for the receiving party to perform its obligations.</p>

                    <p className='mb-2'>A disclosure is not a prohibited disclosure within the meaning of the present agreement if:</p>
                    <ul className='mb-3 terms-article'>
                        <li>the disclosing party has expressly consented to the disclosure in writing prior to the disclosure;</li>
                        <li>the disclosure is made to external advisors, auditors, attorneys or experts, provided that the respective receiving party is under a professional duty of confidentiality;</li>
                        <li>the disclosure is made in order to comply with a legal requirement or with a decision made by a competent court, arbitral tribunal, or a stock exchange or supervisory authority, or some other government authority, provided that the disclosing party is made aware of the disclosure either prior thereto or as soon as possible subsequent thereto and the receiving party has made reasonable efforts to maintain the information's confidential character.</li>
                    </ul>


                    <p className='mb-3'>Following termination, each party must use reasonable commercial efforts to return or destroy the other party's Confidential Information.</p>

                    <p className='mb-5'>Neither party must issue a press release or general public announcement that refer to the other party, without the other party's consent.</p>

                    <p className='mb-5'>All parties represent and warrant that they are fully compliant with applicable privacy laws, and all local regulations. All parties shall also provide notice for, and fully disclose, their respective privacy policies and practices to visitors to their website(s). Ray Advertising LLC warrants that engaging in the services provided by the Company pursuant to this Agreement shall not violate Ray Advertising LLC privacy policy.</p>



                </div>
            </div>
            <GroupTitle />
            <Group />
            <Footer />

        </div>
    )
}

export default TermsCondition