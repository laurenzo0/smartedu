
import "./StatsCard.css";

function StatsCard({title,value,english,maths,cs}){

  const total = english + maths + cs;

  return(
    <div className="stats-card">

      <h3>{title}</h3>
      <p>{value}</p>

      <div className="progress-bar">

        <div
          className="english"
          style={{width:`${(english/total)*100}%`}}
        ></div>

        <div
          className="maths"
          style={{width:`${(maths/total)*100}%`}}
        ></div>

        <div
          className="cs"
          style={{width:`${(cs/total)*100}%`}}
        ></div>

      </div>

      <div className="legend">
        <p><span className="blue"></span> English Language {english}</p>
        <p><span className="orange"></span> Mathematics {maths}</p>
        <p><span className="green"></span> Computer Science {cs}</p>
      </div>

    </div>
  )
}

export default StatsCard;