import React, { createContext, useCallback, useState, useEffect } from "react";
import api from "../services/api";
///ARRANJAR UM JEITO DE IMPORTAR AS INFORMAÇÕES LAT, LNG E DATA

export const MareContext = createContext([]);

const MareProvider = ({ children }) => {
  const [mareState, setMareState] = useState([
    {
      "height": "1.18",
      "time": "2019-03-15 03:40:44+00:00",
      "type": "high"
    },
    {
      "height": "0.60",
      "time": "2019-03-15 09:53:54+00:00",
      "type": "low"
    },
    {
      "height": "1.20",
      "time": "2019-03-15 16:23:29+00:00",
      "type": "high"
    },
    {
      "height": "0.61",
      "time": "2019-03-15 22:39:15+00:00",
      "type": "low"
    }
    
      /*{
          "height": "",
          "time": "",
          "type": "high"
      },
      {
          "height": "",
          "time": "",
          "type": "low"
      },
      {
          "height": "",
          "time": "",
          "type": "high"
      },
      {
          "height": "",
          "time": "",
          "type": "low"
      }*/
  ]);

  const getMareData = (lat,lng,date) => {
    
      if(lat && lng) {
        const data = `point?lat=${lat}&lng=${lng}&${date}`
        
        api
          .get(`point?lat=${lat}&lng=${lng}&${date}`)
          .then((response) => console.log(response.data))
        
          //setMareState(response.data.data)
    }

  };

  const calcHora = (xx) => {
      const time = xx; //"2019-03-15 16:23:29+00:00"
      const hora = time[11] + time[12] + time[13] + time[14] + time[15];
      return hora;
  };

  const contextValue = {
    mareState,
    getMareData: useCallback((lat,lng,date) => getMareData(lat,lng,date), []),
    calcHora: useCallback((xx) => calcHora(xx), []),
  };

  return (
    <MareContext.Provider value={contextValue}>
      {children}
    </MareContext.Provider>
  );
};

export default MareProvider;