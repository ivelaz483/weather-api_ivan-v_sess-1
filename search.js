import React from 'react'

const Search = (props) => {

    return (
            <div class="input-group input-group-lg">
            <span class="input-group-text" id="input-group-lg-example"></span>
            <input type="text" class="form-control" value={props.value} onChange={(event) => props.setSearchwet(event.target.value)} aria-label="Large input group" aria-describedby="input-group-lg"></input>
        </div>
    )
}

export default Search