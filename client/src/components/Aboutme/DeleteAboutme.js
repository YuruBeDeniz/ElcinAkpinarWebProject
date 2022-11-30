import React from 'react';
import axios from 'axios';

export default function DeleteAboutme({id}) {
  
  const deleteAboutme = () => {
    axios.delete(`/api/about-me/delete/${id}`, id)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err))
  }
 
  return (
    <div>
    <button
     type="button"
     className="ml-80 inline-block px-4 py-1 border-2 border-gray-900 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
     onClick={deleteAboutme}>Delete about me</button>
    </div>
  )
}
