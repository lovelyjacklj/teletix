
import './index.css';
import Header from "./components/ChartHeader/chartheader";
import Chart from "./components/chartdisplay/chart";
import Activity from "./components/Headingbar/headingbar";
import Activitysec from "./components/Activitysec/activitysec";
import Footer from "./components/Footer/footer";


// import Testsection from "./components/Activitysec/testsection";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import VStatus from "./VStatus";

let App =()=>{
    return(
        <>
          <Header/>
          <Chart/>
          {/* <VStatus/> */}
          
          <Activity/>
         <Activitysec/>
          {/* <Testsection/> */}
          <Footer/>
          
        </>
    );
}

export default App;