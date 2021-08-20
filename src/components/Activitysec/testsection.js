import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./activitysec.css";
const testsection = () => {
    return (
        <div className="testsection">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                    <div className="BarsName">Running</div>
                    </div>
                    <div className="col-10">
                    <div className="MainBars">
                        <div className="progress-bar1"></div>
                        
                     </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default testsection;