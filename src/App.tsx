import PageWrapper from 'components/PageWrapper'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import routes from 'routes'

import { addRxPlugin } from 'rxdb'
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode'
import { RxDBUpdatePlugin } from 'rxdb/plugins/update'

addRxPlugin(RxDBUpdatePlugin)
if (import.meta.env.MODE === 'development') {
  addRxPlugin(RxDBDevModePlugin)
}
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
