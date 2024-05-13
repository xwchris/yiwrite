import PageWrapper from 'components/PageWrapper'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import routes from 'routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          {Object.values(routes).map(({ path, component: Component }) => {
            return (
              <Route
                index={path === '/'}
                key={path}
                path={path}
                element={<Component />}
              />
            )
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
