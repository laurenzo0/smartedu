import SubjectCard from "./SubjectCard";

import "./Subjects.css";

function Subjects(){
  return(
    <div className="subjects">
  <h4>SEE YOUR PERFORMANCE IN EACH SUBJECT</h4>

  <div className="subjects-grid">
    <SubjectCard image="/assets/images/english-lang.png"/>
    <SubjectCard image="/assets/images/maths-lang.png"  />
    <SubjectCard image="/assets/images/csc.png"  />
  </div>
</div>
  )
}

export default Subjects;