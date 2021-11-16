// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


export default function App() {
  
  const history = useHistory();
  
  return (
    <div className="App">
      <AppBar position="static">
       <Toolbar>
       <Button varient="text" color="inherit" onClick={()=>history.push("/")}>Home</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/dashboard")}>Dashboard</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/button")}>Button</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/chart")}>Chart</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/page")}>404 page</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/blankpage")}>Blank page</Button>
       </Toolbar>
       </AppBar>

       <Switch>
      
      <Route exact path="/">
      <Home />
        </Route>
        
        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route path="/button">
        <Abutton/>
        </Route>

        <Route path="/chart">
          <Chart />
        </Route>

        <Route path="/page">
          <Page />
        </Route>

        <Route path="/blankpage">
          <Blank />
        </Route>

        </Switch>
    </div>
  );
}
function Dashboard() {
  return (
    <div className="home">
      <h2 className="home-hello">Dashboard</h2>
    </div>
  );
}

function Home() {
  return (
    <div className="home">
      <h2 className="home-hello">Home</h2>
    </div>
  );
}

function Abutton() {
  return (
    <div className="color-button" >
     <h1>textcolor</h1>
    </div>
  );
}

function Chart() {
  return (
    <div className="home">
      <h2 className="home-hello">Chart</h2>
    </div>
  );
}

function Page() {
  return (
    <div className="not-found">
      <img src="https://cdn.dribbble.com/users/381530/screenshots/3949858/404.gif" alt="404 not-found"/>
    </div>
  );
}

function Blank() {
  return (
    <div>
      <h2 className="blank-page">Blank page</h2>
    </div>
  );
}