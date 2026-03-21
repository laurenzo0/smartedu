// import "./PerformanceGauge.css";
import "./Performance.css";

function PerformanceGauge(){
  return(
    <div className="gauge-card">

      <div className="performance">
        <h3>Overall Performance</h3>
        <p>Fair</p>

      </div>


      

      <div className="gauge">
        <div className="half-circle">
          <span>50%</span>
        </div>
      </div>

    </div>
  )
}

export default PerformanceGauge;