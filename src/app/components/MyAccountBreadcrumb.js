import Link from 'next/link'
import React from 'react'

const MyAccountBreadcrumb = ({name}) => {
  return (
    <section className="container-fluid products_main_banner">
    <div className="container">
      <div className="banner_content">
        <h4>{name}</h4>
        <div>
        <div className="breacrumb-section">
          <div className="breadcrumb-text  border-0">
            <Link href="/" className="text-dark">
            <i class="bi bi-house"></i> Home
            </Link>
            <span className="fw-bold text-dark">{name}</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default MyAccountBreadcrumb