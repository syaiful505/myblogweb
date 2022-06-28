import React from 'react'

export const SearchBox = () => {
  return (
    <div className="search">
        <h2>What Do You Search?</h2>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="search" />
        </div>
        <div className="form-group">
            <button className="btn btn-block">Search</button>
        </div>
    </div>
  )
}
