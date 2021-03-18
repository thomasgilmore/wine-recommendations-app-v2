import React from 'react';

export default function SearchField() {
    const searchWineAPI = (e) => {
        e.preventDefault();
        let inputValue = document.getElementById('searchField').value;
        // console.log(inputValue);
    };
    return (
        <div>
            <form id="form">
                <input type="text" placeholder="Search Wine or Food..." id="searchField"></input>
                <button type="submit" onClick={searchWineAPI}>Search</button>
            </form>
        </div>
    )
}
