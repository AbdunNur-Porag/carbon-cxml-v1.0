const initialLoad=(
  <div>
    <div class="center-align"style={{
      width:"100vw",
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>
     Please Wait...
    </div>
  </div>
);
const form=(
  <div></div>
);
const data={
  title:"Carbon Plus",
  subTitle:"Explore Your Desire",
}
const bodyBack={}
const background=(
  <div style={{
    display:"flex",
    justifyContent:"center",
    height:"100vh",
    height:"100vw",
  }}>
    {/*appbackground*/}
    <div style={{
      width:"100vw",
      maxWidth:"500px",
      height:"100vh",
      maxHeight:"800px",
      background:"#FF4108",
      display:"flex",
      justifyContent:"center", 
      alignItems:"center",
    }}>
      {/*from background*/}
     <div style={{
       width:"100%",
       height:"70%",
       background:"#ffffff",
       margin:"10px",
       borderRadius:"20px",
     }}>
          { /*TITLE*/ }
   <div class="padding">
       <div class="center-align">
         <img class="extra" src="/asstes/logo.png"alt="logo.png"/>
       </div>
       <div class="padding center-align">
         <h6>
           <data.title/>
         </h6>
         <p style={{
           marginTop:"-5px",
         }}>
           <data.subTitle/>
         </p>
       </div>
     </div>
       
       
     </div>
  
    </div>
  </div>
);
const app=(
  <div>
    <background/>
  </div>
);