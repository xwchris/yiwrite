import Header from 'components/Header'
import { Outlet, useLocation } from 'react-router'

const PageWrapper: React.FC = () => {
  const location = useLocation()
  return (
    <div className="relative overflow-hidden bg-white h-screen">
      {location.pathname !== '/' && <Header />}
      <Outlet />
    </div>
  )
}

export default PageWrapper
