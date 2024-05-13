import React from 'react'
import { Link } from 'react-router-dom'

const Logo: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className = '',
  style
}) => {
  return (
    <Link
      className={`flex items-center font-bold no-underline ${className}`}
      to="/"
      style={style}
    >
      <div
        className="p-1 text-xl leading-5 flex items-center justify-center text-white mr-2 rounded-sm"
        style={{ backgroundColor: '#baa990' }}
      >
        YI
      </div>
      <h1 className="mb-0 text-2xl">Write</h1>
    </Link>
  )
}

export default Logo
