
import { useEffect } from "react";

export const Message = () => {
    
    useEffect( () => {
        const handleMouseMove = () => {
            console.log(':3');
        }
    
        window.addEventListener('mousemove',handleMouseMove);

        //console.log('aquí estoy');

         return () => {
            console.log('Ya me fui');
            window.removeEventListener('mousemove',handleMouseMove);
        }
    },
    []
    );

    return (
        <>
        <h1>Message</h1>
        </>
    )
}