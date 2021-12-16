import React,{useState} from 'react'
import './beer.css'
 
function Beer() {
     const [age,setage]=useState()
     const [state,setstate]=useState()
     const  change=(event)=>{
         setage(event.target.value)
     }
     const Submit=(event)=>{
        event.preventDefault()
        if(age<18){
            setstate("no beer")
        }
        else{
            setstate("beer")
        }
     }
    
    return (
        <div className='beer'>
            <form onSubmit={Submit} className='form' >
            <h3>Enter your Age</h3>
            <input value={age} onChange={change} className='input' type="number" /><br />
            <button className='button'>Submit</button>
            </form>
            {
                state==="no beer" && <h1>Sorry.. No Beer for you</h1>
            }
            
            {
                state==="beer" &&
                <div>
                    <h1>Take your beer</h1> <br /><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZg89-_qvpcTK-YPLmbdlbYPmet_tVVBEkOQ&usqp=CAU" alt="not found" />

                </div> 
                
                
                                    

            }
            
            
            
        
            
        </div>
    )
}



export default Beer 
