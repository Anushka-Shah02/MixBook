import React, { Fragment } from 'react'
import calendar from '../images/cal1.jpg'
import travel from '../images/travel.jfif'
import review from '../images/review11.jpg'
import family from '../images/family2.jpg'
import wedding from '../images/wedding.jfif'
import {useState} from 'react';
import Navbar from './Navbar';
import './Calendar.css';

// import cal1 from '../images/cal1.jpg'
// import cal2 from '../images/cal2.jpg'
// import cal3 from '../images/cal3.jpg'
// import cal4 from '../images/cal4.jpg'
// import cal5 from '../images/cal5.jpg'
// import cal6 from '../images/cal6.jpg'
// import cal7 from '../images/cal7.jpg'
// import cal8 from '../images/cal8.jpg'
// import cal9 from '../images/cal9.webp'
// import cal10 from '../images/cal10.webp'

let menu=[
  {
      id:1,
      image:calendar,
      category:"calendar"
  },
  {
      id:2,
      image:review,
      category:"review" 
  },
  {
      id:3,
      image:travel,
      category:"travel"
  },
  {
      id:4,
      image:wedding,
      category:"wedding"
  },
  {
      id:5,
      image:family,
      category:"family"
  },
  
];

const styles={

    col1:{
        display:"flex",
        flexDirection:"column",
        width:"100px",
        marginTop:"40px",
        marginRight:"110px"
    },
    col2:{
        display:"flex",
        flexDirection:"column",
        width:"100px"
    },
    column2:{
            display:"flex",
            flexDirection:"column",
            width:"100px",
            marginRight:"110px"
    },
    calendar:{
       marginBottom:"30px",
       height:"160px",
       cursor:"pointer",
       width:"160px",
       boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    booth:{
        display:"flex",
        flexDirection:"row",
        overflow:"hidden",
        paddingTop:"20px",
        backgroundColor:"#fff5f5",
        paddingBottom:"60px"
    },
    col3:{ 
      marginLeft:"110px",
      marginRight:"30px"
    },
    top:{
      display:"flex",
      flexDirection:"row", 
      marginTop:"30px",
    },
    calen1:{
        marginRight:"25px",
        height:"160px",
        width:"160px",
        cursor:"pointer",
        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
     },
     calen2:{
        marginTop:"25px",
        cursor:"pointer",
        marginRight:"25px",
        height:"160px",
        width:"160px",
        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
     },
     beauty:{
      fontSize:"5rem",
      fontWeight:"700",
      color:"#0c1b45",
      marginTop:"20px"
    },
    create:{
      fontSize:"2rem"
    },
    // btc:{
    //   border:"none",
    //   borderRadius:"5%",
    //   padding:"13px",
    //   margin:"8px",
    //   fontSize:"1.5rem",
    //   fontWeight:"500",
    //   color:"white",
    //   backgroundColor:"#fca8a2"
    // }
};


function Calendar() {

      const[items,setItems]=useState(menu);
  
      const filterMenu=(category)=>{
          const update=menu.filter((element)=>{
            // update.target.style.backgroundColor="black";
              return element.category===category;
          });
          setItems(update);
      }


  return (
    <Fragment onLoad={()=>filterMenu('calendar')} >
      <Navbar/>
      
      {
         items.map((element)=>{
               const{ image}=element;
            return(
      
        
          <div style={styles.booth}>
        
          <div style={styles.col1}> 
            <div className='hover-zoom' id="1"><img style={styles.calendar} src={image} alt=""/></div>
            <div className='hover-zoom' id="2"><img style={styles.calendar} src={image} alt=""/></div>
            <div className='hover-zoom' id="3"><img style={styles.calendar} src={image} alt=""/></div>            
          </div>

         <div style={styles.col2}>
            <div className='hover-zoom' id="4"><img style={styles.calendar} src={image} alt=""/></div>
            <div className='hover-zoom' id="5"><img style={styles.calendar} src={image} alt=""/></div>
            <div className='hover-zoom' id="6"><img style={styles.calendar} src={image} alt=""/></div>
         </div>

          <div style={styles.col3}>
            <div style={styles.top}>
            <div className='hover-zoom' id="7"> <img style={styles.calen1} src={image} alt=""/></div>
            <div className='hover-zoom' id="8"> <img style={styles.calen2} src={image} alt=""/></div>
            <div className='hover-zoom' id="9"> <img style={styles.calen1} src={image} alt=""/></div>
            <div className='hover-zoom' id="10"> <img style={styles.calen2} src={image} alt=""/></div>
          </div>

          {/* <Centre/> */}

            <div style={styles.centre}>
                <h1 style={styles.beauty}>Beautiful <span><i>Designs</i></span> Made Easy</h1>
                <p style={styles.create}>Let your creativity run wild with the #1 rated photo book company</p>
                <button className="btn" onMouseOver={()=>filterMenu('calendar')} >CALENDARS</button>
                <button className="btn" onMouseOver={()=>filterMenu('review')}   >YEAR IN REVIEW</button>
                <button className="btn" onMouseOver={()=>filterMenu('travel')} >TRAVEL</button>
                <button className="btn" onMouseOver={()=>filterMenu('wedding')} >WEDDING</button>
                <button className="btn" onMouseOver={()=>filterMenu('family')}  >FAMILY</button>
            </div>

            <div style={styles.top}>
            <div className='hover-zoom' id="calImage"> <img style={styles.calen1} src={image} alt=""/></div>
            <div className='hover-zoom' id="calImage"> <img style={styles.calen2} src={image} alt=""/></div>
            <div className='hover-zoom' id="calImage"> <img style={styles.calen1} src={image} alt=""/></div>
            <div className='hover-zoom' id="calImage"> <img style={styles.calen2} src={image} alt=""/></div>
            </div>
         </div>

         <div style={styles.column2}>
         <div className='hover-zoom' id="calImage"><img style={styles.calendar} src={image} alt=""/></div>
         <div className='hover-zoom' id="calImage"><img style={styles.calendar} src={image} alt=""/></div>
         <div className='hover-zoom' id="calImage"><img style={styles.calendar} src={image} alt=""/></div>
         </div>

         <div style={styles.col1}>
         <div className='hover-zoom' id="calImage"><img style={styles.calendar} src={image} alt=""/></div>
         <div className='hover-zoom' id="calImage"><img style={styles.calendar} src={image} alt=""/></div>
         <div className='hover-zoom' id="calImage"><img style={styles.calendar} src={image} alt=""/></div>
         </div>  
         </div> 
            
            )
            })
         }
       
      {/* </div> */}
    </Fragment>
  )
}

export default Calendar
