import './Bookmyshow-tast-page.css'
function Bookmyshow(){
    return(
        <div className="App">
        <header className="App-header">
        <div>
        <img className='logo' src="https://seeklogo.com/images/B/bookmyshow-logo-31BC3C7354-seeklogo.com.png" alt="" />
        {/* <a href=""><h3 className='home'>Home</h3></a> */}
        <h3 className='home'>Home</h3>
        <a href="/Bookmyshow-task-movie-page"><h3 className='movies'>Movies</h3></a>
        <a href="/Bookmyshow about page"><h3 className='about'>About</h3></a>
    
        </div>
  
        </header>
        <div >
            <div className='bottom'>
            <h2>Welcome to BookMyShow  </h2>
            <h2> Got To Movies Page to book your tickets </h2> <br />
            <a href="/Bookmyshow-task-movie-page"><button className='moviesbutton'>Movies</button></a> 
            
            </div>
            

          
        </div>
        </div>
       
    
    )

}
export default Bookmyshow;