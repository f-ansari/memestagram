import './style/App.css'
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Dashboard from './components/Dashboard'
import PostForm from './components/PostForm'
import SinglePostView from './components/SinglePostView'

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/createpost" component={PostForm} />
          <Route path="/postdetail/:id" component={SinglePostView} />
        </Switch>
      </main>
      {/* <header className="App-header">TESTING</header> */}
    </div>
  )
}

export default App
