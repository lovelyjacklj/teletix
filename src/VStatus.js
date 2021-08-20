
import { useState, useEffect } from 'react';

const VStatus = () => {

    const[data, setData]= useState([]);
    const getData =  async()=>{
    const res = await fetch('http://192.168.18.50:8888/home/UserVehicles?username=tp_yousaf&password=eW91c2Fm');
    setData( await res.json());
  }
  useEffect(()=>{
    getData();
  },[]); 
    
    return (
      <>
      <h1>My Data</h1>
      {
        data.map((val) =>{
            return(
                <div>{val.VehicleName}</div>
            )
        })
      }
      </>
    
    );
    }

export default VStatus;