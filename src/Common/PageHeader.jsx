import React from 'react'
import { Link } from 'react-router-dom'

const PageHeader = ({ title }) => {
  return (
    <>
      <section className="page_breadcrumbs ds background_cover section_padding_top_65 section_padding_bottom_65">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2>{title}</h2>
              <ol className="breadcrumb greylinks">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">{title}</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PageHeader
