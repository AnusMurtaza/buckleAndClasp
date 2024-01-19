import React from 'react'

const page = () => {
    return (
        <>
            {/* ******* ABOUT STATRS ******** */}
            <section className="about-bg">
                <div className="container">
                    <div className="row">
                        <div>
                            <h1>ABOUT US</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-sec-wrapper">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-12">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-md-6 about-inner-div">
                                    <div className="about-img-wrap">
                                        <img src="https://i0.wp.com/detechprof.com/wp-content/uploads/2021/09/biker-jacket-for-riders-min.jpg?fit=700%2C510&ssl=1" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="about-content-wrap mt-3">
                                        {/* <h6>WELCOME TO UMBRELLA HEALTH CARE SYSTEMS</h6> */}
                                        <h3>Discover the Essence of Exceptional Leather Jackets</h3>
                                        <p>
                                            Welcome to Buckle and clasps, your ultimate destination for premium leather jackets in the USA. We are passionate about crafting high-quality, stylish, and timeless leather outerwear that embodies sophistication, durability, and unparalleled craftsmanship.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-sec-wrapper-2">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-12">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-md-5">
                                    <div className="about-content-wrap-2 mb-3">
                                        {/* <h6>HIGHEST QUALITY CARE</h6> */}
                                        <h3>Crafting Timeless Elegance in Leather</h3>
                                        <p>
                                            We understand the essence of leather and its enduring appeal. With years of expertise in the industry, we meticulously handpick the finest hides and materials to create exquisite jackets that exude luxury and class.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 about-inner-div">
                                    <div className="about-img-wrap-2">
                                        <img src="https://miro.medium.com/v2/resize:fit:624/1*GLVk5vbNjrsCXNcSNgttcQ.jpeg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="counter-sec-wrapper">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-md-6 about_us_quality text-center p-5"> 
                            <h3>Quality is Our Signature</h3>
                            <p>
                                Our commitment to excellence extends beyond our products; it encompasses our dedication to customer satisfaction. We strive to provide a seamless shopping experience, ensuring every customer finds their perfect leather piece tailored to their individual style.
                            </p>
                            <p>
                                Each jacket in our collection is a testament to our meticulous attention to detail and dedication to creating enduring fashion statements. From classic designs to contemporary trends, our range caters to diverse tastes, promising something exceptional for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ******* ABOUT ENDS ******** */}
        </>

    )
}

export default page