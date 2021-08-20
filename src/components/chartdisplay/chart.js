import {useState, useEffect} from "react";
import "./chart.css";
import donutchart from "../../assets/maincircle.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Chart = () => {
const[data, setData]= useState([]);
  const getData =  async()=>{
  const vehicles = await fetch('http://124.29.208.13:8888/home/UserVehicles?username=fn_amir&password=YW1pcg==');
  setData( await vehicles.json());
  
}
useEffect(()=>{
  getData();
  },[]); 

let Idle=0;
let Offline=0;  
let Moving=0;
let Parked=0;
for(let i=0; i< data.length; i++){
  if(data[i].StatusId === 2) Parked++;{
    if(data[i].StatusId === 4) Moving++;
    if(data[i].StatusId === 1) Offline++;
    if(data[i].StatusId === 3) Idle++;
  }

}

  return (
    <>
            <div className="contain">
            <div className="Chart">
            <img  src={donutchart} alt="dchart"  />
         
                <div className="Rvalue">{Moving}</div>
                <div className="Idlevalue">{Idle}</div>
                <div className="Stopvalue">{Parked}</div>
                <div className="InAvalue">{Offline}</div>
                <div className="Movingvalue">0</div>
                <div className="Centeredvalue">{data.length}</div>
            </div>
            </div> 
      </>   
    );
};


export default Chart;