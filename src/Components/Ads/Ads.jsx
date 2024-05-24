import React from 'react'

const Ads = ({image,title}) => {
  return (
    <div className='Ads border-2 rounded-lg p-4 m-2'>
        <img src={image} alt="img" />
        <title>{title}</title>
        <button className="button bg-orange-600 text-white font-bold px-4 hover:animate-pulse">Link</button>
    </div>
  )
}

export default Ads;