import React from 'react'
import logo from '../images/logo.png'
import search from '../images/search.png'
import cart from '../images/cart.png'

const styles={
    pink:{
        backgroundColor:"#ffe9e8",
        height:"40px"
        },
        grey:{
        backgroundColor:"#edebeb",
        height:"40px",
        display:"flex",
        flexDirection:"column"
        },
        para1:{
            fontSize:"1.4rem",
            padding:"7px"
        },
        para2:{
            fontSize:"1.3rem",
            padding:"7px",
            color:"#0c1b45"
        },
        greyPara:{
            fontSize:"1.3rem",
            padding:"7px",
            cursor:"pointer",
            color:"#0c1b45",
            top:"-43px",
            position:"relative",
            left:"350px"
        },
        anchor:{
            color:"#0c1b45",
            fontSize:"1.3rem",
            padding:"7px",
            cursor:"pointer"
        },
        btn:{
            border:"1px solid #0c1b45",
            borderRadius:"8%",
            marginTop:"7px",
            marginBottom:"11px",
            fontWeight:"700",
            cursor:"pointer",
            color:"#0c1b45"
        },
        bar:{
            marginLeft:"150px",
            display:"flex",
            flexDirection:"row",
        },
        nav:{
            height:"80px",
            display:"flex",
            flexDirection:"row"
        },
        navbar:{
            display:"flex",
            flexDirection:"row",
            marginLeft:"55px"
        },
        headAnchor:{
            textDecoration:"none",
            color:"#0c1b45",
            fontSize:"1.4rem",
            fontWeight:"700",
            marginTop:"20px",
            padding:"10px"
        },
        logo:{
            marginLeft:"90px",
            height:"50px",
            marginTop:"13px"
        },
        find:{
            marginTop:"25px",
            height:"33px",
            marginLeft:"10px",
            cursor:"pointer",
            color:"#0c1b45"
        },
        sign:{
            textDecoration:"none",
            color:"#0c1b45",
            fontSize:"1.8rem",
            // fontWeight:"500",
            padding:"10px"
        },
        login:{
            textDecoration:"none",
            color:"#23a5c4",
            fontSize:"1.8rem",
            fontWeight:"700",
            padding:"10px"
        },
        rightNav:{
            marginLeft:"190px",
            marginTop:"23px"
        },
        cart:{
            position:"relative",
            top:"-3px",
            height:"40px"
        },
        dropContent:{
            display:"none",
            position: "absolute",
            backgroundColor: "#f9f9f9",
            minWidth: "160px",
            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
            zIndex: "1"
        },
        dropText:{
            float:"none",
            color: "black",
            padding: "6px 16px",
            textDecoration: "none",
            display: "block",
            textAlign: "left",
            fontSize:"1.4rem"
        }
};
function Navbar() {
       
    const handleMouseOver = (e) => {
        e.target.style.color="#23a5c4"
      };
    
      const handleMouseOut = (e) => {
        e.target.style.color="#0c1b45"
      };

      const handleSignOver = (e) => {
        e.target.style.color="#0c1b45"
      };
    
      const handleSignOut = (e) => {
        e.target.style.color="#23a5c4"
      };
    //   const handleDisplayOver = (e) => {
    //     e.target.style.display="block"
    //   };
    
    //   const handleDisplayOut = (e) => {
    //     e.target.style.display="none"
    //   };
  return (
    <div>
        <div style={styles.pink}>
         <p style={styles.para1}>Shipping is unavailable to your region. We ship to the US, Canada, Europe, UK, and Australia</p>
       </div>

       <div style={styles.grey}>
          <div style={styles.bar}>
          <p style={styles.para2}><b>20% + 23% Off Almost Everything + Free Shipping on $23+ Code YAY2023 Ends: 01/04</b></p>
          <a href="/" style={styles.anchor} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >Details</a>
          <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={styles.btn}>APPLY</button>
          </div>

          <div style={styles.right}>
            <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={styles.greyPara}>Create a custom calendar for the new year! | Shop Calendars »</p>
          </div>
       </div>

       <div style={styles.nav}>
          
        <img style={styles.logo} src={logo} alt=""/>
          <div style={styles.navbar}>
          <a  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}  style={styles.headAnchor} href="/">PHOTO BOOKS</a>
          <a onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={styles.headAnchor} href="/">CARDS</a>
          <a onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={styles.headAnchor} href="/">CALENDARS</a>
          <a onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={styles.headAnchor} href="/">HOME DECOR</a>
          <a onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={styles.headAnchor} href="/">OCCASIONS</a>
          <a onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={styles.headAnchor} href="/">DEALS</a>
          <img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={styles.find} src={search} alt=""/>
          </div>
        
        <div style={styles.dropdown}>
        
        <div style={styles.dropContent}>
        <a style={styles.dropText} href="/">Simple</a>
        <a style={styles.dropText} href="/">Travel Photo Books</a>
        <a style={styles.dropText} href="/">Everyday</a>
        <a style={styles.dropText} href="/">Year in Review</a>
        <a style={styles.dropText} href="/">Seasonal</a>
        <a style={styles.dropText} href="/">Holiday</a>
        <a style={styles.dropText} href="/">Family</a>
        <a style={styles.dropText} href="/">Kids</a>
        <a style={styles.dropText} href="/">Baby</a>
        </div>
        
        
        </div>
        <div style={styles.rightNav}>
            <a onMouseOver={handleSignOver} onMouseOut={handleSignOut} style={styles.login} href="/">Sign Up</a>
            <a onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={styles.sign} href="/">Log In</a>
            <a onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={styles.sign} href="/">Help</a>
            <img src={cart} style={styles.cart} alt="" />
        </div>
       </div>

    </div>
  )
}

export default Navbar
