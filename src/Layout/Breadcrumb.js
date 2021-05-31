import React from "react"
import { Link } from "react-router-dom"

function Breadcrumb(pathArray) {

  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb">
          <Link to="/">Home</Link>
        </li>
        {pathArray.map((page) => {
          <li>
            <Link to={page.b}>{page.a}</Link>
          </li>
        })}
      </ol>
    </nav>

  )
}