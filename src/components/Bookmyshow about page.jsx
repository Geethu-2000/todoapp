import './Bookmyshow-tast-page.css'

function Theater(){
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
        <div className='theater'>
            <img src="https://miro.medium.com/v2/resize:fit:949/1*AlBixYX8egoSi8p29xUfpQ.jpeg" className='theaterimg' alt="" />
            
            
           
            
           
            
        </div>
        </div>
       
    
    )

}
export default Theater;