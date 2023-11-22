import React from 'react'

function Home() {
  return (
    <div>
      <div>
        <h1 style={{textAlign:"center",fontSize:"55px",fontWeight:"bold",marginLeft:"50px",marginTop:"120px"}}>The Apple Store Shopping Event</h1>
        <h2 style={{textAlign:"center", fontWeight:"normal",fontSize:"30px"}}>Get an Apple Gift Card up to $200  <br /> with your eligible purchase.</h2> 
     
      <h3 style={{color:"gray",textAlign:"center",fontSize:'20px',fontWeight:"normal"}}>Offer starts 11.24</h3>
     <h6 style={{color:"blue",textAlign:"center",fontWeight:"normal",fontSize:"20px"}}>Get an early look ></h6>
      </div>
      
      <img width={"70%"}  height={"30%"}   style={{marginLeft:"200px"}} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ase-hero-202311?wid=4098&hei=1294&fmt=jpeg&qlt=90&.v=1698431463411" alt="" /> 
   
   <img  className='image ' width={"100%"}  height={"600px"} style={{marginTop:"10px",position:"relative"}}  src="https://is1-ssl.mzstatic.com/image/thumb/OFHNmCIAhV3ZWgWz09nXIA/2638x1484sr.webp" alt="" />

   <div style={{textAlign:"center",marginLeft:"400px" ,position:"absolute" ,marginTop:"-580px",color:"white"}}>
    <h1><i class="fa-brands fa-apple"></i>tv<i class="fa-brands fa-plus"></i></h1>
    <h1 style={{marginTop:"250px",fontSize:"70px"}}>MONARCH</h1>
    <h2>LEGACY OF MONSTERS</h2>
    <h3>Some secrets cannot be contained.</h3>
    <h4>Stream the series</h4>
   </div>

  <div  style={{marginTop:"10px"}} >
   <img style={{position:"relative"}} width={"100%"} height={"550px"} src="https://www.apple.com/v/iphone-15-pro/c/images/meta/iphone-15-pro_overview__f8jz7aagka2q_og.png" alt="j" />
   <div style={{position:"absolute",marginTop:"-540px",textAlign:"center",marginLeft:"310px"}}>
    <h1 style={{color:"white",fontSize:"60px"}}>iPhone 15Pro</h1>
    <h1 style={{color:"white",fontSize:"35px"}}>Titanium . So Strong . So Light . So Pro</h1>
    <a style={{color:"blue",textDecoration:"underline"}} href="">Learn More</a>      <a style={{color:"blue",textDecoration:"underline",marginLeft:"10px"}} href="">     Buy</a>
   </div>
    
  </div>

  <div className='d-flex'>
    <img style={{margin:"20px",height:"600px"}} src="https://mcprod.jumbo.ae/media/dynamicdashboard/images/items/_/1/_1695357839920_920_apple_watch_series-9_availablenow__mobilebanner.jpg" alt="jj" />
  <img  style={{position:"relative" ,height:"550px",width:"610px",marginTop:"20px"}} src="https://mcsolution.com.bd/wp-content/uploads/2023/10/MacBook-Pro-M3-2023-Space-Black-Price-in-Bangladesh-MC-Solution-BD.webp" alt="" />
  <div style={{position:"absolute" ,textAlign:"center",marginLeft:"700px",marginTop:"70px",}}>
    <h1>MacBook Pro</h1>
    <h2>Mind-blowing.Head-turning</h2>
    <a style={{color:"blue",textDecoration:"underline"}} href="">Learn More></a>      <a style={{color:"blue",textDecoration:"underline"}} href="">     Buy></a>

  </div>
  </div>
  <div className='d-flex' >
    <img style={{marginTop:"130px",height:"400px",width:"50%",position:"relative"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbXpuX1k5ZSeSTz6H1KEV3o8bKLK2N-RwG2F0TRXSkt-ddFbKiQsF7WUfdDoOVX2q3uA&usqp=CAU" alt="jj" />
    <div style={{position:"absolute",marginLeft:"160px",textAlign:"center"}}>
      <h1>Wonder Awaits</h1>
      <h3 style={{fontWeight:"lighter"}}>Give gifts they've been</h3>
      <h3 style={{fontWeight:"lighter"}}>looking forward to all year</h3>
      <a style={{color:"blue",textDecoration:"underline"}} href="">Shop></a>
    </div>


  <img  style={{height:"550px",margin:"20px",width:"590px",marginTop:"-10px"}} src="https://theimaginestore.com/storage/Media/NPI/Prebook/iPhone-15-M.webp" alt="" />
 
  </div>
  <div className='d-flex'>
    <img style={{position:"relative",width:"600px",marginTop:"150px",marginLeft:"70px"}} src="https://www.thinkingtech.in/wp-content/uploads/apple-credit-card.jpg" alt="" />
    <div style={{position:"absolute",marginTop:"10px",marginLeft:"180px"}}>
        <h1 style={{textAlign:"center"}}>Card</h1>
        <h4 style={{}}>Get upto 30% Daliy Cash back <br /> with every purchase</h4>
        <a style={{color:"blue",textDecoration:"underline"}} href="">Learn More></a>      <a style={{color:"blue",textDecoration:"underline"}} href="">     Apply now></a>
       
    </div>
    <img style={{width:"550px",height:"500px"}} src="https://www.theapplepost.com/wp-content/uploads/2023/05/Apple-Trade-In-The-Apple-Post-960x640.jpg" alt="" />
  </div>
    </div>
  )
}

export default Home
