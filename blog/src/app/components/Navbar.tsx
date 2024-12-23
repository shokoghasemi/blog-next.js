import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='shadow p-6 bg-white rounded-md'>
        <Link className='mr-4' href="/">home</Link>
        <Link href="/blogs">blogs</Link>
    </div>
  )
}
