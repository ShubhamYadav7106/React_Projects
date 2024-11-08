import {useEffect} from "react";
const UseScript=(url)=>{
    useEffect(()=>{
        const script=document.createElement('script');
        script.type='text/javascript';
        script.src=url;
        script.async=true;
        script.defer=true;
        document.body.appendChild(script)
        return()=>{
           document.body.removeChild(script); 
        }
    },{url})
    
}
export default UseScript; 