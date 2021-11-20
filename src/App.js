// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useState} from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



export default function App() {
  //usehistory for change the url
  const history = useHistory();
  const chartsdet = [{chartpic :"https://about.infogr.am/wp-content/uploads/2016/08/Summer-olympics-Medals-table.gif"},
                      {chartpic:"https://www.r-graph-gallery.com/img/graph/288-animated-barplot-transition.gif"},
                    {chartpic:"https://c.tenor.com/hQfs1RqzK94AAAAC/circle-graph-graph.gif"},
                    {chartpic:"https://cdn.dribbble.com/users/3593/screenshots/2475280/linechart.gif"}];


//usestate is used for update the state
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
    mode: mode,
     },
     });

  return (
    <ThemeProvider theme={darkTheme}>
       <Paper elevation={3} style={{borderRadius:"0px",minHeight:"100vh"}}>
    <div className="App">
      <AppBar position="static">
       <Toolbar>
         {/* app bar buttons*/}
       <Button varient="text" color="inherit" onClick={()=>history.push("/")}>Home</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/dashboard")}>Dashboard</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/chart")}>Chart</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/button")}>Button</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/page")}>404 page</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/blankpage")}>Blank page</Button>

       <Button varient="text" color="inherit" style={{marginLeft:"auto"}} onClick={()=>setMode(mode==="light"? "dark":"light")}> {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} {mode==="light"? "Dark":"Light"}Mode</Button>
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
        <Colourbutton />
        </Route>

        <Route path="/chart">
          <Chart chartsdet={chartsdet}/>
        </Route>

        <Route path="/page">
          <Page />
        </Route>

        <Route path="/blankpage">
          <Blank />
        </Route>

        </Switch>
    </div>
    </Paper>
    </ThemeProvider>
  );
}


function Dashboard() {
  const history = useHistory();
  return (
    <div className="Dashboard">
      <h2 className="home-hello">Dashboard</h2>
      <Button onClick={()=>history.push("/chart") }variant="contained">📊📈Go to Chart-Page<ArrowForwardIcon/></Button>
      <img className="dash-chart" src="https://c.tenor.com/hQfs1RqzK94AAAAC/circle-graph-graph.gif" alt="chart"/>
      
    </div>
  );
}
//home page
function Home() {
  return (
    <div className="home">
     <img className="home-pic" src="https://c.tenor.com/kGBsOvMQFhIAAAAC/welcome-home-welcome.gif" alt="welcome home"/>
    </div>
  );
}
function Colourbutton() {
  const history = useHistory();
  return (
    <div className="colour-div">
      <h1>.btn-circle</h1>
      <div className="color-button-div">
      <img className="color-button but-hover" src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" alt="fb"/>
      <img className="color-button-twitter but-hover" src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="twitter"/>
      <img className="color-button-info but-hover" src="https://icons-for-free.com/iconfiles/png/512/info-131964752893297302.png" alt="info"/>
      <img className="color-button-warn but-hover" src="https://cdn1.iconfinder.com/data/icons/warnings-and-dangers/400/Warning-14-512.png" alt="warning-icon"/>
      <img className="color-button-delete but-hover" src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color/700/010_trash-2-512.png" alt="delete-icon"/>
      
    </div>
    <Button onClick={()=>history.push("/") }variant="contained"><KeyboardBackspaceIcon/>Back to home</Button>
    </div>
  );
}
//chartsdet - pass as a props
function Chart({chartsdet}){
  return(
<section>
  {chartsdet.map(({chartpic})=>(<Chartflow chartpic={chartpic}/>))}
</section>
  );
} 
// chartpic - destructure from chartdet
function Chartflow({chartpic}){
  return (
    <div className="chart-flex">
     <img className="chart-pic" src={chartpic} alt={Chart}/>
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
  const history = useHistory();
  return (
    <div className="blank-page">
      <h2 >Blank page</h2>
      <Button onClick={()=>history.push("/") }variant="contained"><KeyboardBackspaceIcon/>Back to home</Button>
    </div>
  );
}