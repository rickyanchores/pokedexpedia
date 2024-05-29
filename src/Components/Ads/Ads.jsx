import React from 'react'

const Ads = ({image,title}) => {
  return (
    <div className='Ads border-2 rounded-lg p-4 m-2'>
        <img src={image} alt="img" />
        <title className="text-white">
          <h1>{title}</h1>
        </title>
    </div>
  )
}

export default Ads;