import React from 'react'

const LinkButton = ({children}) => {
  return (
    <div className='text-textWhite bg-bgBlue px-6 text-lg py-2 ring-2 ring-bgWhite font-semibold rounded-lg text-nav max-w-fit uppercase cursor-pointer text-nowrap'>{children}</div>
  )
}

export default LinkButton