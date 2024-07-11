//import React from 'react';

const Contact = () => {
  return (
    <div>
        <h1 className="font-bold bg-red-100 m-4 px-4 py-1 shadow-lg text-center">CONTACT US PAGE</h1>
        
        <form>
          <input 
          className="border border-gray-300 p-2 m-2"
          type="text"
          placeholder="name"  
          />
          <input 
          className="border border-gray-300 p-2 m-2"
          type="text"
          placeholder="message"  
          />
          <button className="bg-red-100 w-16 hover:bg-red-100">
            Submit
          </button>
        </form>
    </div>
  )
}

export default Contact;