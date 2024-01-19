import React from 'react'

const Pagination = ({currentPage,handlePageChange,lastPage}) => {
  return (
    <>
      <nav aria-label="Page navigation example mt-3" className='float-end mt-3'>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" href="#" onClick={() => handlePageChange(currentPage - 1)}>
              Previous
            </button>
          </li>
          {Array.from({ length: lastPage }, (_, index) => (
            <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
              <button className="page-link" href="#" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === lastPage ? 'disabled' : ''}`}>
            <button className="page-link" href="#" onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Pagination