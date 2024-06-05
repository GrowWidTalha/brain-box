import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
        <Image src={'/logo.svg'} width={40} height={40} alt='logo' />
        <span className='text-2xl font-bold'>Brain Box</span>
    </div>
  )
}

export default Logo