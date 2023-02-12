import React from 'react';
import {useState} from 'react';
import Card from 'react-bootstrap/Card';
import rated from '../images/rated.png'
import video from '../images/video.png'
import wire from '../images/wirecutter.png'
import mix from '../images/mix.avif'
import card1 from '../images/card1.webp'
import card2 from '../images/card2.webp'
import card3 from '../images/card3.webp'
import card4 from '../images/card4.webp'
import img2 from '../images/img2.webp'
import img3 from '../images/img3.webp'
import img4 from '../images/img4.webp'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import fb from '../images/fb.png'
import pinterest from '../images/pinterest.png'
import insta from '../images/instagram.png'
import twitter from '../images/twitter.png'
import Carousel2  from 'react-elastic-carousel';
import p1 from '../images/p1.jfif'
import p2 from '../images/p2.jfif'
import p3 from '../images/p3.jfif'
import p4 from '../images/p4.jfif'
import p5 from '../images/p5.jfif'
import p6 from '../images/p6.jfif'
import p7 from '../images/p7.jfif'
import p8 from '../images/p8.jfif'
import p9 from '../images/p9.jfif'
import p10 from '../images/p10.jfif'
import p11 from '../images/p11.jfif'
import p12 from '../images/p12.jfif'

const breakPoints=[
  {
    // "width":"1400", 
    "slidesToShow":"4"
  },
  {
    // "width":"1200", 
    "slidesToShow":"4"
  },
  {
    // "width":"1200", 
    "slidesToShow":"4"
  },
  {
    // "width":"1200", 
    "slidesToShow":"4"
  }
];

const styles={
    body:{
        overflow:"hidden"
    },
    container1:{
        display:"flex",
        flexDirection:"row",
    },
    col1:{
        marginTop:"70px",
        padding:"40px",
        marginLeft:"160px"
    },
    para1:{
        fontSize:"1.3rem",
        fontStyle:"italic",
        color:"grey"
    },
    rated:{
      marginLeft:"15%",
      marginTop:"30px"
    },
    pro2:{
      fontSize:"1.3rem",
      fontStyle:"italic",
      color:"grey"
    },
    heading1:{
      color:"#2a2d33",
      fontWeight:"700",
      top:"-9px",
      position:"relative"
    },
    col3:{
      marginTop:"100px",
      marginLeft:"150px"
    },
    full:{
      backgroundColor:"#f2fafc"
    },
    container2:{
      display:"flex",
      flexDirection:"row",
      textAlign:"left",
      marginLeft:"280px",
      paddingBottom:"60px"
    },
    left:{
      marginTop:"110px",
      width:"270px"
    },
    mix:{
      width:"700px",
      marginLeft:"130px",
      marginTop:"50px",
      boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    pro3:{
      fontSize:"3.5rem",
      width:"500px",
      color:"#0b115e",
      fontWeight:"300"
    },
    pro4:{
      fontSize:"20px",
      position:"relative",
      top:"-5px",
      fontWeight:"300"
    },
    button1:{
      color:"white",
      backgroundColor:"#fa73a2",
      border:"none",
      padding:"15px", 
      borderRadius:"4%",
      fontSize:"1.5rem",
      fontWeight:"500"
    },
    card:{
      display:"flex",
      flexDirection:"row",
      marginLeft:"130px"
    },
    cardImg:{
      height:"300px",
      width:"300px"
    },
    card1:{
      padding:"10px"
    },
    cardHead:{
      position:"relative",
      // top:"-20px",
      fontSize:"2rem",
      padding:"17px",
      fontWeight:"700",
      cursor:"pointer",
    },
    cardContain:{
      position:"relative",
      top:"-58px",
      opacity:"0.7",
      backgroundColor:"#dbd9d3",
    },
    cardBlock:{
      marginTop:"90px"
    },
    pro5:{
      fontSize:"2.5rem",
      fontWeight:"350",
      color:"#0c1759"
    },
    img2:{
      height:"550px",
      width:"650px"
    },
    carousel1:{
      display:"flex",
      flexDirection:"row",
    },
    martha:{
      backgroundColor:"#fcf5fa",
      height:"550px",
      width:"610px",
      textAlign:"left"
    },
    pro6:{
      fontSize:"3rem",
      marginTop:"150px",
      fontWeight:"300",
      marginLeft:"70px",
    },
    carouselBlock:{
      marginLeft:"140px",
      marginTop:"50px"
    },
    pro7:{
      marginLeft:"70px",
      marginTop:"20px",
      fontSize:"1.7rem",
      fontWeight:"300"
    },
    btn2:{
      marginLeft:"70px",
      color:"white",
      backgroundColor:"#fca8a2",
      border:"none",
      padding:"15px",
      marginTop:"20px",
      width:"250px", 
      borderRadius:"2%",
      fontSize:"1.8rem",
      fontWeight:"500"
    },
    leftBlock:{
      marginTop:"90px",
      width:"400px",
      position:"relative",
      left:"-140px"
    },
    pro8:{
      fontSize:"3rem",
      width:"700px",
      color:"#0b115e",
      fontWeight:"400"
    },
    pro9:{
      fontSize:"18px",
      position:"relative",
      top:"-5px",
      fontWeight:"400"
    },
    mixes:{
      width:"700px",
      marginLeft:"18px",
      marginTop:"50px",
    },
    btn3:{
      // marginLeft:"70px",
      color:"white",
      backgroundColor:"#fca8a2",
      border:"none",
      padding:"15px",
      marginTop:"20px",
      width:"250px", 
      borderRadius:"2%",
      fontSize:"1.8rem",
      fontWeight:"500"
    },
    btn5:{
      // marginLeft:"70px",
      color:"white",
      backgroundColor:"#07a4d9",
      border:"none",
      padding:"15px",
      marginTop:"25px",
      width:"250px", 
      borderRadius:"2%",
      fontSize:"1.8rem",
      fontWeight:"500"
    },
    mainFoot:{
      display:"flex",
      flexDirection:"row",
      padding:"60px",
      marginLeft:"130px",
    },
    footer:{
      backgroundColor:"#f2f4f5"
    },
    first:{
      color:"#0c1b45",
      fontSize:"1.6rem",
      fontWeight:"500",
      width:"150px",
      margin:"5px",
      cursor:"pointer"
    },
    second:{
      color:"#0c1b45",
      fontSize:"2.7rem",
      marginBottom:"15px",
      cursor:"pointer"
    },
    list:{
      listStyle:"none",
      textAlign:"left",
      marginRight:"100px"
    },
    foot1:{
      textAlign:"left",
      marginRight:"180px"
    },
    foot2:{
      textAlign:"left"
    },
    foot3:{
      textAlign:"left",
      position:"relative",
      top:"45px"
    },
    foot4:{
      textAlign:"left"
    },
    pro10:{
      fontSize:"1.5rem",
      width:"320px"
    },
    have:{
      color:"#40cae6",
      fontWeight:"700"
    },
    btn4:{
      color:"white",
      backgroundColor:"#4287f5",
      border:"none",
      padding:"10px",
      marginTop:"20px",
      // width:"250px", 
      borderRadius:"5%",
      fontSize:"1.8rem",
      fontWeight:"500"
    },
    email:{
      border:"1px solid #e6dbda",
      padding:"15px",
      margin:"10px",
      width:"320px",
      position:"relative",
      top:"-2px",
      borderRadius:"3%"
    },
    box:{
      display:"flex",
      flexDirection:"column"
    },
    foo5:{
      marginTop:"50px"
    },
    head1:{
      fontSize:"2.5rem",
      fontWeight:"700",
      color:"0d0a4a"
    },
    emoji:{
      margin:"5px",
      height:"35px",
      width:"35px",
      cursor:"pointer"
    },
    emo:{
        margin:"5px",
        height:"28px",
        width:"28px",
        cursor:"pointer"
      },
      my:{
        textDecoration:"none",
        color:"black",
        fontSize:"1.5rem",
        margin:"8px"
      },
      prot:{
        fontSize:"1.5rem",
        marginTop:"5px"
      },
      anchor:{
        padding:"30px"
      },
      caros1:{
        display:"flex",
        flexDirection:"row"
      },
      caros2:{
        display:"flex",
        flexDirection:"row"
      },
      caros3:{
        display:"flex",
        flexDirection:"row"
      },
      community:{
        marginTop:"50px",
        marginBottom:"50px"
      },
      our:{
        fontSize:"3.5rem",
        fontWeight:"300",
        color:"#0d0a4a"
      },
      chance:{
        fontSize:"1.5rem",
        marginBottom:"40px"
      },
      view:{
          display:"block",
          // flexDirection:"row",
          position:"absolute",
      },
      viewHead:{
         display:"flex",
         color:"black",
         fontSize:"2.5rem",
         position:"relative",
         top:"-190px",
         left:"440px",
        //  opacity:"0.2"
      },
      viewPara:{
        display:"flex",
        fontSize:"1.5rem",
        position:"relative",
        top:"-190px",
        left:"430px",
        // opacity:"0.2"
      },
      cardStyle:{
        border:"none",
        margin:"7px"
      }
};

function Main() {

  const [isHovering, setIsHovering] = useState(false);

   const handleMouseOver = (e) => {
    e.target.style.color="#23a5c4"
  };

  const handleMouseOut = (e) => {
    e.target.style.color="black"
  };

  const handleButtonOver = (e) => {
    e.target.style.backgroundColor="#fc97bb"
  };

  const handleButtonOut = (e) => {
    e.target.style.backgroundColor="#fa73a2"
  };

  const handleBlueOver = (e) => {
    e.target.style.backgroundColor="#4fb4d6"
  };

  const handleBlueOut = (e) => {
    e.target.style.backgroundColor="#07a4d9"
  };

  const handleAnchorOver = (e) => {
    e.target.style.color="#23a5c4"
  };

  const handleAnchorOut = (e) => {
    e.target.style.color="#0c1b45"
  };

  const handleCardOver = (e) => {
    setIsHovering(true);
    e.target.style.opacity="0.2";
  };

  const handleCardOut = (e) => {
    e.target.style.opacity="1";
    setIsHovering(false);
  };


  return (
    <div style={styles.body}>

    <div style={styles.container1}>
       <div style={styles.col1}>
          <p style={styles.para1}>“Mixbook actually makes it <br/>fun to create photo books.”</p>
          <img src={wire} alt=""/>         
       </div>

       <div style={styles.col2}>
        <img src={rated} style={styles.rated} alt=""/>
       </div>

       <div style={styles.col3}>
         <p style={styles.pro2}>“You can customize everything to<br/> your liking.”</p>
         <h2 style={styles.heading1}>GOOD <br/>HOUSEKEEPING</h2>
       </div>
    </div>

  <div style={styles.full}>
  <div style={styles.container2}>
       <div style={styles.left}>
         <p style={styles.pro3}>Your Story, Your Way</p>
         <p style={styles.pro4}>Our editor gives you the creative freedom to fully customize your design — it's free, fun, and easy to use on any device.</p>
         <button onMouseOver={handleButtonOver} onMouseOut={handleButtonOut} style={styles.button1}>CREATE NOW</button>
       </div>

       <div style={styles.right}>
          <img src={mix} alt="" style={styles.mix}/>
       </div>
    </div>
  </div>
    
    <div style={styles.cardBlock}>
      <p style={styles.pro5}>What Will You Create Today?</p>

      <div style={styles.card}>
        
      <div style={styles.card1}>
      <img src={card1} style={styles.cardImg} alt=""/>
      <div style={styles.cardContain}>
      <h4 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={styles.cardHead}>Photo Books</h4>
      </div>
      </div>

      <div style={styles.card1}>
      <img src={card2} style={styles.cardImg} alt=""/>
      <div style={styles.cardContain}>
      <h4 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={styles.cardHead}>Cards</h4>
      </div>
      </div>

      <div style={styles.card1}>
      <img src={card3} alt=""style={styles.cardImg}/>
      <div style={styles.cardContain}>
      <h4 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={styles.cardHead}>Calendars</h4>
      </div>
      </div>

      <div style={styles.card1}>
      <img src={card4} alt="" style={styles.cardImg}/>
      <div style={styles.cardContain}>
      <h4 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={styles.cardHead}>Home Decor</h4>
      </div>
      </div>
      
      </div>

    </div>


  <Carousel style={styles.carouselBlock}>
        <Carousel.Item interval={1500} > 

        <div style={styles.carousel1}>

        <img style={styles.img2} src={img2} alt=""/>

        <div style={styles.martha}>
          <p style={styles.pro6} >Martha Stewart for Mixbook</p>
          <p style={styles.pro7} >Effortless Holiday gifts that spark joy and connection.</p>
          <button onMouseOver={handleButtonOver} onMouseOut={handleButtonOut} style={styles.btn2}>EXPLORE COLLECTION</button>
       </div>
       </div>
          
        </Carousel.Item>

        <Carousel.Item interval={1000} >
        <div style={styles.carousel1}>

        <div style={styles.explore}>
        <img style={styles.img2} src={img3} alt="" />
       </div>

        <div style={styles.martha}>
        <p style={styles.pro6} >New! Organize Trip Pics In A Snap</p>
          <p style={styles.pro7} >An easy, breezy way to create travel books.</p>
          <button onMouseOver={handleButtonOver} onMouseOut={handleButtonOut} style={styles.btn2}>LEARN MORE</button>
       </div>
       </div>
        </Carousel.Item>

        <Carousel.Item interval={500} >
        <div style={styles.carousel1}>

        <div style={styles.explore}>
        <img style={styles.img2} src={img4} alt="" />
       </div>

        <div style={styles.martha}>
          <p style={styles.pro6} >New! Automagic Creation</p>
          <p style={styles.pro7} >Jumpstart your story in an instant with templates designed to fit your photos.</p>
          <button onMouseOver={handleButtonOver} onMouseOut={handleButtonOut} style={styles.btn2}>CREATE NOW</button>
       </div>
       </div>
        </Carousel.Item>
    </Carousel>

  
    <div>
      <div style={styles.container2}>
       <div style={styles.leftBlock}>
         <p style={styles.pro8}>100% Happiness <br/>Guaranteed</p>
         <p style={styles.pro9}>At Mixbook, we believe your creation experience should be fun and uncomplicated. It’s why we work hard to ensure every step of your creation process — from design to your finished product — is just the way you want it every time, or we’ll make it right.</p>
         <button onMouseOver={handleBlueOver} onMouseOut={handleBlueOut} style={styles.btn5}>FIND OUT MORE</button>
       </div>

       <div style={styles.right}>
          <img src={video} alt="" style={styles.mixes}/>
       </div>
    </div>
  </div>
   
   <div style={styles.community}>
       <p style={styles.our}>Meet Our Community Of Mixbookers</p>
       <p style={styles.chance}>Get inspired by what others are making, or add your own project to<br/>
       Instagram for a chance to be featured here.</p>


    <Carousel2 breakPoints={breakPoints}>
    
    <div style={styles.caros1}> 

     <Card style={styles.cardStyle} >
      <Card.Img onMouseOver={handleCardOver} onMouseOut={handleCardOut} src={p9} style={styles.cardImg} alt=""/>
      {/* <Card.Text style={styles.view} > */}
      {isHovering && <Card.Text style={styles.view}>
      <h2 style={styles.viewHead} >View</h2>
      <p style={styles.viewPara} >2606 Likes</p>  
      </Card.Text>
      }
      {/* </Card.Text> */}
     </Card>
      
     
     <Card style={styles.cardStyle}>
     <div style={styles.card1} >
      <img onMouseOver={handleCardOver} onMouseOut={handleCardOut} src={p10} style={styles.cardImg} alt=""/>
      {isHovering && <div style={styles.view}>
      <h2 style={styles.viewHead} >View</h2>
      <p style={styles.viewPara} >2606 Likes</p>  
      </div>
      }
      </div>
     </Card>
     

      <Card style={styles.cardStyle}>
      <div style={styles.card1} onMouseOver={handleCardOver} onMouseOut={handleCardOut}>
      <img src={p11} style={styles.cardImg} alt=""/>
      <div style={styles.view}>
      {isHovering && <h2 style={styles.viewHead} >View</h2>}
       {isHovering && <p style={styles.viewPara} >2606 Likes</p> } 
      </div>
      </div>
      </Card>


      <Card style={styles.cardStyle}>
      <div style={styles.card1} onMouseOver={handleCardOver} onMouseOut={handleCardOut}>
      <img src={p12} style={styles.cardImg} alt=""/>
      <div style={styles.view}>
      {isHovering && <h2 style={styles.viewHead} >View</h2>}
       {isHovering && <p style={styles.viewPara} >2606 Likes</p> } 
      </div>
      </div>
      </Card>
          
        </div>

        <div style={styles.caros2}>

     <Card style={styles.cardStyle}>
     <div style={styles.card1} onMouseOver={handleCardOver} onMouseOut={handleCardOut}>
      <img src={p5} style={styles.cardImg} alt=""/>
      <div style={styles.view}>
      {isHovering && <h2 style={styles.viewHead} >View</h2>}
       {isHovering && <p style={styles.viewPara} >2606 Likes</p> } 
      </div>
      </div>
     </Card>

      <Card style={styles.cardStyle}>
      <div style={styles.card1} onMouseOver={handleCardOver} onMouseOut={handleCardOut}>
      <img src={p6} style={styles.cardImg} alt=""/>
      <div style={styles.view}>
      {isHovering && <h2 style={styles.viewHead} >View</h2>}
       {isHovering && <p style={styles.viewPara} >2606 Likes</p> } 
       
      </div>
      </div>
      </Card>

      <Card style={styles.cardStyle}>
      <div style={styles.card1} onMouseOver={handleCardOver} onMouseOut={handleCardOut}>
      <img src={p7} style={styles.cardImg} alt=""/>
      <div style={styles.cardContain}>
      </div>
      </div>
      </Card>

      <Card style={styles.cardStyle}>
      <div style={styles.card1} onMouseOver={handleCardOver} onMouseOut={handleCardOut}>
      <img src={p8} style={styles.cardImg} alt=""/>
      <div style={styles.view}>
      {isHovering && <h2 style={styles.viewHead} >View</h2>}
       {isHovering && <p style={styles.viewPara} >2606 Likes</p> } 
       
      </div>
      </div>
      </Card>
        </div>

        <div style={styles.caros3} >
      <Card style={styles.cardStyle}>
      <div style={styles.card1} onMouseOver={handleCardOver} onMouseOut={handleCardOut}>
      <img src={p1} style={styles.cardImg} alt=""/>
      <div style={styles.view}>
      {isHovering && <h2 style={styles.viewHead} >View</h2>}
       {isHovering && <p style={styles.viewPara} >2606 Likes</p> } 
       
      </div>
      </div>
      </Card>

      <Card style={styles.cardStyle}>
      <div style={styles.card1} onMouseOver={handleCardOver} onMouseOut={handleCardOut}>
      <img src={p2} style={styles.cardImg} alt=""/>
      <div style={styles.view}>
      {isHovering && <h2 style={styles.viewHead} >View</h2>}
       {isHovering && <p style={styles.viewPara} >2606 Likes</p> } 
       
      </div>
      </div>
      </Card>

      <Card style={styles.cardStyle}>
      <div style={styles.card1} onMouseOver={handleCardOver} onMouseOut={handleCardOut}>
      <img src={p3} style={styles.cardImg} alt=""/>
      <div style={styles.view}>
      {isHovering && <h2 style={styles.viewHead} >View</h2>}
       {isHovering && <p style={styles.viewPara} >2606 Likes</p> } 
      </div>
      </div>
      </Card>

      <Card style={styles.cardStyle}>
      <div style={styles.card1} onMouseOver={handleCardOver} onMouseOut={handleCardOut}>
      <img src={p4} style={styles.cardImg} alt="" />
       <div style={styles.view}>
       {isHovering && <h2 style={styles.viewHead} >View</h2>}
       {isHovering && <p style={styles.viewPara} >2606 Likes</p> } 
      </div>
      </div>
      </Card>

        </div>
      </Carousel2>
     
     <button style={styles.btn5} onMouseOver={handleBlueOver} onMouseOut={handleBlueOut}>Get Inspired</button>
   </div>


   <div style={styles.footer}>
      
      <div style={styles.mainFoot}>
      <div style={styles.foot1}>
        <h2 onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.second}>Contact Us</h2>
        <p style={styles.pro10}>Have questions ? <span style={styles.have}>Chat with us</span> or email us at <span style={styles.have}>hello@mixbook.com. </span> We'll be glad to help!</p>
      
      <ul style={styles.list}>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Help</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Returns</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Shipping</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Photo Book Pricing</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Deals</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>About</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Careers</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Customer Stories</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>#1 Rated in Photo Books</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Mobile App</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Inspiration</li>
      </ul>
      
      </div>

      <div style={styles.foot2}>
        <h2  onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.second}>Products</h2>
        <ul style={styles.list}>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Photo Books</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Baby Photo Books</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Travel Photo Books</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Home Decor</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Canvas Prints</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Poster Prints</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Acrylic Prints</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Metal Prints</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Cards</li>
        <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Designer Collection</li>
      </ul>
      </div>

      <div style={styles.foot3}>
        <ul style={styles.list}>
          <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Calendars</li>
          <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Photo Birth Announcements</li>
          <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Holiday Photo Cards</li>
          <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Save the Date Cards</li>
          <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Engagement Announcements</li>
          <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Wedding Invitations</li>
          <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Wedding Photo Books</li>
          <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Wedding Guest Books</li>
          <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Wedding Albums</li>
        </ul>
      </div>

      <div style={styles.foot4}>
         <h2 onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.second}>Programs</h2>
         <ul style={styles.list}>
          <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>For Business</li>
          <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>School Yearbooks</li>
          <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Affiliate Program</li>
          <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Volume Discounts</li>
         </ul>

         <h2 onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.second}>Locations</h2>
         <ul style={styles.list}>
          <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Australia</li>
          <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>Canada</li>
          <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>European Union</li>
          <li onMouseOver={handleAnchorOver} onMouseOut={handleAnchorOut} style={styles.first}>United Kingdom</li>
         </ul>
      </div>
      </div>

     <hr  style={{
          // background: 'black',
          // color: 'lime',
          borderColor: 'black',
          height: '1px',
          borderStyle:"dashed",
          width:"1300px",
          marginLeft:"120px",
          marginBottom:"20px"
        }}/> 
  
   <div style={styles.foo5}>
     <h2 style={styles.head1}>Get Exclusive Offers And Mixbook News</h2>
   
     <div style={styles.box}>
     <form>
        <input style={styles.email} type="text" placeholder="EMAIL" />
        <input style={styles.btn4} type="submit" value="SIGN UP" />
      </form>
     </div>

     <div style={styles.social}>
            <img style={styles.emoji} src={fb} alt=""></img>
            <img style={styles.emo} src={pinterest} alt=""></img>
            <img style={styles.emoji} src={insta} alt=""></img>
            <img style={styles.emoji} src={twitter} alt=""></img>
      </div>

      <div style={styles.anchor}>
        <a style={styles.my} href="/">Press</a>
        <a style={styles.my} href="/">Terms of Service</a>
        <a style={styles.my} href="/">Privacy</a>
        <a style={styles.my} href="/">Returns</a>

        <p style={styles.prot}>© 2006-2023 Mixbook</p>
      </div>

   </div>
   

   </div>

    </div>
  )
}

export default Main
