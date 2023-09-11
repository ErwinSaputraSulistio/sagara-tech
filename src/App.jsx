import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import appRoutes from './configs/routes/appRoutes'

const App = () => {
  return (
    <Router>
      <Routes>
        {
          appRoutes.map((route) => (
            <Route
              key={`app-route-${route.id}`}
              path={route.path}
              element={route.component}
            />
          ))
        }
      </Routes>
    </Router>
  )
}

export default App
