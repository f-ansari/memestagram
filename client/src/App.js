import './style/App.css'
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Dashboard from './components/Dashboard'
import PostForm from './components/PostForm'

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/createpost" component={PostForm} />
        </Switch>
      </main>
      {/* <header className="App-header">TESTING</header> */}
    </div>
  )
}

export default App
