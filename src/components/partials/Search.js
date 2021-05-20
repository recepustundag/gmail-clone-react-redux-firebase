import React from 'react'
import SearchIcon from '@material-ui/icons/Search'

const Search = () => {
  return (
    <div className="relative w-4/6">
      <button type="button" className="absolute top-1 left-1 flex items-center justiy-center transition duration-300 hover:bg-gray-300 rounded-full p-2 focus:outline-none">
        <SearchIcon />
      </button>
      <input placeholder="Postalarda Arayın" className="bg-gray-100 rounded-md text-gray-500 py-3 pl-12 pr-4 placeholder-gray-400 w-full transition duration-300 ease-out focus:outline-none focus:bg-white focus:shadow focus:border-gray-200 " />
    </div>
  )
}

export default Search
