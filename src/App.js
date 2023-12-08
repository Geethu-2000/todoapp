  // import logo from './logo.svg';
// import './App.css';
// import Geetha from './components/Home';
// import Geetha1 from './components/Login page task';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

// import Bookmyshow from './components/Bookmyshow task home page';

// import Movies from './components/Bookmyshow-task-movie-page';
// import Welcome from './components/Bookmyshow welcome page';
// import Theater from './components/Bookmyshow about page';
import Frontpage from "./components/Gmail front page";
import Starred from './components/Gmail starred page';
import Snoozed from './components/Gmail snoozed page';
import Sent from './components/Gmail sent page';
import Draft from './components/Gmail draft page';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      <h1>This my new react</h1>
    
      </header> */}
      {/* <Geetha/> */}
      {/* <Geetha1/> */}
      {/* <BrowserRouter>

        <Link to={'/Home'}>Home</Link>
        <Link to={'/Login'}>Login</Link>
        <Routes>
          <Route path='/Home' element={<Geetha/>}/>
          <Route path='/Login' element={<Geetha1/>}/>
        </Routes>

      </BrowserRouter>  */}
      {/* ================================================================================================== */}
        {/* <BrowserRouter>

<Link to={'Bookmyshow'}>Bookmyshow</Link> }
{ <Link to={'/Login'}>Login</Link>
<Routes>
  <Route path='/Bookmyshow' element={<Bookmyshow/>}/>
  <Route path='/Bookmyshow-task-movie-page' element={<Movies/>}/>
  <Route path='/Bookmyshow welcome page' element={<Welcome/>}/>
  <Route path='/Bookmyshow about page' element={<Theater/>}/>

  
  <Route path='*' element={<Navigate to={'/Bookmyshow'}/>}/>


</Routes>

</BrowserRouter>   */}
{/* ============================================================================================================ */}
<BrowserRouter>
<Routes>
<Route path='/Gmail front page' element={<Frontpage/>}/>
{/* <Route path='*' element={<Navigate to={'/Frontpage'}/>}/> */}
<Route path='/Gmail starred page' element={<Starred/>}/>
<Route path='/Gmail snoozed page' element={<Snoozed/>}/>
<Route path='/Gmail sent page' element={<Sent/>}/>
<Route path='/Gmail draft page' element={<Draft/>}/>


</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
