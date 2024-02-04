import React from 'react'

const page = () => {
    return (
        <div className='container my-5'>
            <main className="header-offset content-wrapper about-wrapper">
                <div className="terms-container">
                    <div className="row">
                        <div className="col-sm-11 m-auto ">
                            <section className="terms-title">
                                <h1>Privacy Policy</h1>
                                <p>Thank you for visiting Livin Leathers website. This Privacy Policy is designed to help you understand how we collect, use, and safeguard your personal information. By accessing or using our website, you consent to the practices described in this Privacy Policy.</p>
                                <hr />
                            </section>
                            <div className="terms-body">
                                <h2>Information We Collect:</h2>
                                <hr />
                                <h3 className='mb-3'>Personal Information:</h3>
                                <ul>
                                    <li>Contact Information (Name, Email, Phone Number)</li>
                                    <li>Shipping and Billing Address</li>
                                    <li>Payment Information</li>
                                </ul>

                                <h3 className='my-3'>Non-Personal Information:</h3>
                                <ul>
                                    <li>Log Data (IP Address, Browser Type, Pages Visited)</li>
                                    <li>Cookies and Similar Technologies</li>
                                </ul>
                                <hr />
                                <h2>How We Use Your Information:</h2>
                                <hr />
                                <h3 className='mb-3'>We use the collected information for the following purposes:</h3>
                                <ul>
                                    <li>Order Processing and Fulfillment</li>
                                    <li>Communication with You (Order Updates, Promotions)</li>
                                    <li>Customizing Your Shopping Experience</li>
                                    <li>Improving Our Website and Services</li>
                                </ul>
                                <hr />
                                <h2>Sharing Your Information:</h2>
                                <hr />
                                <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. Your information is shared only with trusted third parties involved in fulfilling your order, such as shipping carriers and payment processors.</p>

                                <hr />
                                <h2>Data Security:</h2>
                                <hr />

                                <p>Livin Leathers takes appropriate measures to protect your information from unauthorized access, alteration, disclosure, or destruction. We use industry-standard security technologies and procedures to safeguard your data.</p>

                                <hr />
                                <h2>Cookies:</h2>
                                <hr />
                                <p>Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of certain features on our website.
                                </p>

                                <hr />
                                <h2>Your Rights:</h2>
                                <hr />
                                <h3 className='mb-3'>You have the right to:</h3>
                                <ul>
                                    <li>Access, correct, or delete your personal information.</li>
                                    <li>Opt-out of marketing communications.</li>
                                    <li>Request a copy of the data we have collected about you.</li>
                                </ul>

                                <hr />
                                <h2>Changes to Privacy Policy:</h2>
                                <hr />
                                <p>Livin Leathers reserves the right to modify this Privacy Policy at any time. Any changes will be effective immediately upon posting on our website.</p>

                                <hr />
                                <h2>Contact Us:</h2>
                                <hr />
                                <p>If you have any questions or concerns regarding our Privacy Policy, please contact us at [contact@livinleathers.com](mailto:contact@livinleathers.com).
                                </p>

                                <hr />

                                <p className='mt-3'>Thank you for trusting Livin Leathers with your information. We are committed to ensuring the privacy and security of your data.</p>


                            </div>
                        </div>
                    </div>
                </div>
                {/* /.row */}
                {/* /.container */}
            </main>
        </div>
    )
}

export default page