import { useContext } from "react";
import { MareContext } from "../providers/mare-provider";

const useMare = () => {
    const { mareState, getMareData, calcHora } = useContext(
      MareContext
    );
  
    return { mareState, getMareData, calcHora };
  };
  
  export default useMare;