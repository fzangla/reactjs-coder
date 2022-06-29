import { useState } from "react";

const useItemCount = (stock, initial) => {
  const [count, setCount] = useState(0);
  
    const result = setCount + handlerClickSumar - handlerClickRestar; 
  
  const handlerClickRestar = () => {
      setCount(count - 1);
    };
    const handlerClickSumar = () => {
        setCount(count + 1);
    }
    if( result<= stock){
    

    };
  //validar onAdd para que no pueda ser validarlo si esta en cero
  return {
      count,
      handlerClickRestar,
      handlerClickSumar
    };
};
    
export default useItemCount;
