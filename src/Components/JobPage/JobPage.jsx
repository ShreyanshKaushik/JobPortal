import React ,{useState} from 'react';

export default function JobPage() {
    const [list, setList] = useState(null)
    const listArray =[{
        name:"Hudle",
        description:"xxxxx"
    },
    {
        name:"Google",
        description:"xxxxx"
    },
    {
        name:"Microsoft",
        description:"xxxxx"
    },
    {
        name:"Facebook",
        description:"xxxxx"
    },
    {
        name:"Deskera",
        description:"xxxxx"
    },
    {
        name:"TCS",
        description:"xxxxx"
    }]
    return(
        <div style={{display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center",  fontSize:"large", backgroundColor:"#f7f7f7"}}>
        <div style={{display:"flex", width:"100%", padding:"5px",height:"100px", justifyContent:"start", alignItems:"center",marginBottom:"10px", backgroundColor:"#f0bcc2", color:"white",
    fontSize:"3.5em"}}>
            Job List...
        </div>
        <div >
            {listArray !== null && listArray.map((data) =>{
                return(
                    <div style={{display:"flex",flexDirection:"column",border:"2px solid #e6939b", width:"350px", padding:"15px", marginBottom:"10px", justifyContent:"center", alignItems:"center",
                    boxShadow:"5px", backgroundColor:"#ffffff",borderRadius:"5px"}}>
                        <div style={{marginBottom:"5px"}}>{data.name}</div>
                        <div style={{marginBottom:"5px"}}>{data.description}</div>
                        <label >Apply 
                    <input type="checkbox" style={{marginLeft:"2px"}}/>
                        </label>
                    </div>
                )
            })}
        </div>
        <button style={{backgroundColor:"blue", color:"white", padding:"25px", borderRadius:"5px", width:"350px", fontSize:"2 em",cursor:"pointer",marginBottom:"10px"}}>Submit</button>
        </div>
    )
}