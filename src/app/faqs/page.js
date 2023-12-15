import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
  {/* Breadcrumb Section Begin */}
  <div className="breacrumb-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-text">
            <Link href="/">
              <i className="fa fa-home" /> Home
            </Link>
            <span>FAQs</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Breadcrumb Section Begin */}
  {/* Faq Section Begin */}
  <div className="faq-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="faq-accordin">
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-heading active">
                  <span
                    className="active"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                  >
                    Is There Anything I Should Bring?
                  </span>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-heading">
                  <span data-toggle="collapse" data-target="#collapseTwo">
                    Where Can I Find Market Research Reports?
                  </span>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-heading">
                  <span data-toggle="collapse" data-target="#collapseThree">
                    Where Can I Find The Wall Street Journal?
                  </span>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Faq Section End */}
</>

  )
}

export default page