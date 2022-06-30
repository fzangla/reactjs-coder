import { useState } from "react";


const useItemCount = (stock, initial) => {
  const [count, setCount] = useState(initial);

  const handlerClickRestar = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  const handlerClickSumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  return {
    count,
    handlerClickRestar,
    handlerClickSumar
  };
};

export default useItemCount;
