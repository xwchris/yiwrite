import React from 'react'
import logo from 'assets/logo.svg'
import Avatar from 'components/Avatar'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link className="flex items-center cursor-pointer" to="/">
          <Avatar size="small" src={logo} />
          <h1 className="text-2xl font-bold ml-3">Vite React 18</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header
