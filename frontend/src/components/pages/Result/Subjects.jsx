import SubjectCard from "./SubjectCard";
import english from "../../../assets/images/english-lang.png";
import math from "../../../assets/images/maths-lang.png";
import cs from "../../../assets/images/csc.png";

import "./Subjects.css";

function Subjects(){
  return(
    <div className="subjects">
  <h4>SEE YOUR PERFORMANCE IN EACH SUBJECT</h4>

  <div className="subjects-grid">
    <SubjectCard image={english}/>
    <SubjectCard image={math}  />
    <SubjectCard image={cs}  />
  </div>
</div>
  )
}

export default Subjects;