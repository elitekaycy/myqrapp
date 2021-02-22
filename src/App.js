import './App.css';
import Home from './Pages/Home'
import Main from './Pages/Main'
import Info from './Pages/Info'
import Create from './Pages/Create'
import Detail from './Pages/Detail'
import { Switch, Route} from 'react-router-dom'
import qrpage from './Pages/qrpage';

function App() {
  return (
   <div>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/main" component={Main} />
       <Route exact path="/main/scan" component={qrpage} />
       <Route exact path="/main/:info" component={Info} />
       <Route exact path="/main/:info/create" component={Create} />
       <Route path ="/main/:info/:id" component={Detail} />
     </Switch>
   </div>
  );
}

export default App;
