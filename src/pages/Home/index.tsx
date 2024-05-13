import { Link } from 'react-router-dom'
import homeImage from './home.jpg'
import Logo from 'components/Logo'

const Home = () => (
  <div className="flex h-screen">
    <div
      className="flex-1 text-white text-2xl bg-cover bg-center"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundColor: '#baa990'
      }}
    ></div>
    <div className="flex-1 flex items-center justify-center">
      <div className="relative">
        <Logo className="mb-16" />
        <h2 className="text-3xl text-center mb-8">简洁易用的API测试系统</h2>
        <Link
          to="/"
          className="inline-block rounded-md border border-transparent bg-indigo-600 px-12 py-3 text-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
        >
          开始使用
        </Link>
      </div>
    </div>
    <a
      href="https://beian.miit.gov.cn"
      target="_blank"
      className="text-gray-400 absolute bottom-2 left-3/4 -translate-x-1/2 cursor-pointer hover:text-gray-600 transition"
    >
      浙ICP备2024094372号
    </a>
  </div>
)

export default Home
