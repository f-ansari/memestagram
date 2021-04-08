import './style/App.css'
import { Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Dashboard} />
      {/* <header className="App-header">TESTING</header> */}
    </div>
  )
}

export default App
