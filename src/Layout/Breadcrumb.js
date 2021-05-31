import React from "react"
import { Link } from "react-router-dom";

function Breadcrumb({ pathArray }) {

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathArray.map((page, index) => {
          if (index === pathArray.length - 1) {
            return (
              <li className="breadcrumb-item active" aria-current="page">
                {page.name}
              </li>
            )
          }
          return (
            <li className="breadcrumb-item">
              <Link to={page.link}>{page.name}</Link>
            </li>
          )
        })}
      </ol>
    </nav>

  )
}

export default Breadcrumb;