export default function StatusBadge({isOnline}){


 return(
    <p  style={{isOnline:"online",color:"red"}}>{isOnline?"online":"offline"}</p>
       
 )
}