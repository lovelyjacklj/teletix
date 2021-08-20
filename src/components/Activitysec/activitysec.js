import { useEffect, useState } from "react";

import "./activitysec.css";

const Activitysec = () => {

const[data, setData]=  useState([]);
const getData = async()=>{
const vehicles = await fetch('http://192.168.18.50:8888/home/UserVehicles?username=fn_amir&password=YW1pcg==')
setData( await vehicles.json());
}

useEffect(()=>{
    getData();
},[]);

// let Running= 0;
// let Idle = 0;
// let Parked=0;
// let Offline=0
// for(let i=0; i < data.length; i++){
//     if(data[i].StatusId ===2) Parked++;
    
    
// }
// return (Parked/data.length)*100;
let stop = 0;
function stopstatus(inputs){
   
    for(const input of inputs){
        if(input.StatusId === 2) stop += 1;
    }
    return stop = (stop/data.length)*100;
}
stopstatus(data);
let offline=0;
function offlinestatus(inputs){
for(const input of inputs){
    if(input.StatusId === 1) offline += 1;
}
return offline = (offline/data.length)*100;
}
offlinestatus(data);
let run=0;
function runstatus(inputs){
for(const input of inputs){
    if(input.StatusId ===4) run += 1;
}
return run=(run/data.length)*100;

}
runstatus(data);
let idle=0;
function idlestatus(inputs){
for(const input of inputs){
    if(input.StatusId ===3) idle += 1;
}
return idle=(idle/data.length)*100;

}
idlestatus(data);




// 


    return (
        <>
        <div className="activitysec">

    
    <div className="container ">
        <div className="row">
            <div className="col-2 "><h3>Running</h3></div>
            <div className="col">
                <div className="bsection1">
            <div className="MainBars">
            <div className="progress-bar1" style={{width: `${run}%`}} ></div>
             <span className="Perctage" id="pt1">{run}%</span>
            </div>
            <span className="Time">12:00</span>
            </div>
            </div>
        </div>

        <div className="row">
            <div className="col-2 "><h3>Idle</h3></div>
            <div className="col">
                <div className="bsection2">
            <div className="MainBars">
            <div className="progress-bar2" style={{width: `${idle}%`}} ></div>
             <span className="Perctage" id="pt2">{idle}%</span>
            </div>
            <span className="Time">12:00</span>
            </div>
            </div>
        </div>
        <div className="row">
            <div className="col-2 "><h3>Stop</h3></div>
            <div className="col">
                <div className="bsection3">
            <div className="MainBars">
            <div className="progress-bar3" style={{width: `${stop}%`}} ></div>
             <span className="Perctage" id="pt3">{stop}%</span>
            </div>
            <span className="Time">12:00</span>
            </div>
            </div>
        </div>
        <div className="row">
            <div className="col-2 "><h3>Inactive</h3></div>
            <div className="col">
                <div className="bsection4">
            <div className="MainBars">
            <div className="progress-bar4" style={{width: `${offline}%`}} ></div>
             <span className="Perctage" id="pt4">{offline}%</span>
            </div>
            <span className="Time">12:00</span>
            </div>
            </div>
        </div>

        
        </div>   {/*container end
        */}
        
            
       

        {/* <div className="barsection">
            <div className="BarsName">Idle</div>
            <div className="MainBars">
            <div className="progress-bar2"></div>
            </div>
        </div>
        <h5 className="Value1">20%</h5>
        <span className="Value2">07:00</span>
        

        <div className="barsection">
            <div className="BarsName">Stop</div>
            <div className="MainBars">
            <div className="progress-bar3"></div>
            </div>
        </div>
        <h5 className="Value1">20%</h5>
        <span className="Value2">07:00</span>


        <div className="barsection">
            <div className="BarsName">Inactive</div>
            <div className="MainBars">
            <div className="progress-bar4"></div>
            </div>
        </div>
        <h5 className="Value1">20%</h5>
        <span className="Value2">07:00</span> */}

        </div>
        </>
    );
};

export default Activitysec;