



import React from "react";




export default function Email(){


    return(
      <div className="flex justify-center align-middle bg-purple-200 p-8">
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:"center",maxWidth:'511px'}}>
         <div style={{backgroundColor:'#fff',padding:'1rem 2rem'}}>
            <img src={`https://www.competition.blazestore.in/uploads/congrats.png`} style={{width:'100%'}} />
         </div>
         <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#1A9B90'}}>
          
          <p style={{paddingLeft:'2rem',fontSize:21,color:'#fff',width:'100%',textAlign:'left',paddingTop:'2rem'}}>Welcome to Clanfest</p>
            <p style={{paddingLeft:'2rem',fontSize:16,color:'#fff',width:'100%',textAlign:'left'}}>Your Registration is Confirmed</p>

  <p style={{paddingLeft:'2rem',paddingTop:'2rem',fontSize:15,color:'#fff',width:'100%',textAlign:'left'}}>  Thank you for registering on Clanfest, your go-to platform for design submissions and creative collaboration</p>
          <p style={{paddingLeft:'2rem',fontSize:15,color:'#fff',width:'100%',textAlign:'left'}}>{`Your account has been successfully created, and you're now ready to explore and submit your designs for Clanfest`}</p>


           <p style={{paddingLeft:'2rem',paddingTop:'2rem',fontSize:15,color:'#fff',width:'100%',textAlign:'left'}}>Here’s what you can do next:</p>
  <ul style={{paddingLeft:'2rem',fontSize:15,color:'#fff',width:'100%',textAlign:'left'}}>
    <li>Complete your profile to help others know more about you.</li>
    <li>Complete your payment to enable design submission for the Clanfest.</li>
    <li>Submit your design for the Clanfest.</li>
  </ul>

  <p style={{paddingLeft:'2rem',paddingTop:'2rem',fontSize:15,color:'#fff',width:'100%',textAlign:'left'}}>If you have any questions or need assistance, feel free to reply to this email or contact our support team.</p>
  <p style={{paddingLeft:'2rem',paddingTop:'2rem',fontSize:15,color:'#fff',width:'100%',textAlign:'left',paddingBottom:'2rem'}}>Let’s create something amazing together!</p>

  <button style={{backgroundColor:'#FEE687',color:'#99999',marginLeft:'2rem',marginRight:'2rem',width:'100%',fontSize:17,width:'100%',maxWidth:'95%',marginTop:'2rem',marginBottom:'2rem',height:'41px'}}>
    Dashboard
  </button>
         </div>
         <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#222',paddingLeft:'2rem',paddingTop:'2rem',paddingBottom:'2rem'}}>
           <img src={`https://www.competition.blazestore.in/uploads/logomain.png`} style={{maxWidth:211,marginRight:'auto',marginLeft:'.1rem'}} />
           <p style={{fontSize:15,width:'100%',color:'#fff',marginTop:'1rem',marginLeft:'1rem',paddingLeft:'.5rem'}}>Contact us on : +919821847814 </p>
           <div style={{display:'flex',justifyItems:'flex-start',width:'100%',paddingLeft:'1rem',paddingTop:'1rem'}}>
               <a href="https://www.instagram.com/blazestore.in/"> <img src={`https://www.competition.blazestore.in/uploads/insta.png`} style={{width:'100%',width:41,paddingRight:'.5rem'}} /> </a>
             <a href="https://api.whatsapp.com/send/?phone=9821847814&text&type=phone_number"> <img src={`https://www.competition.blazestore.in/uploads/whats.png`} style={{width:'100%',width:41,paddingRight:'.5rem'}} /> </a>
           </div>
         </div>
        </div>
      </div>
    )
}