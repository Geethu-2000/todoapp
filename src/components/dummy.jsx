<Link to ={'/Home1'}>Home1</Link>
mport './Bookmyshowtask.css'
function Movies(){
   return(
       <div>
            <header className='Bg_top'>
           <div className='Page_header'>
           <img className='Logo' src="https://seeklogo.com/images/B/bookmyshow-logo-31BC3C7354-seeklogo.com.png" alt="" />
           <h3 className='page_content1'>Home</h3>   
           <a href="BMSmoviepage.jsx"><h3 className='page_content2'>Movies</h3>   </a> 
           <h3 className='page_content3'>About</h3>   
           </div>
       </header>
          <div className='Movie_cont'>
           <img className='Image' src="https://lilvakavivlu.files.wordpress.com/2020/01/the-untamed.jpeg" alt="" />
           <p>Wei Wuxian and good friend Lan Wangji work to solve a series of murder mysteries.</p>
           <button className='showbtn'>Book</button>
          </div> 
       </div>
   )
}
export default Movies;