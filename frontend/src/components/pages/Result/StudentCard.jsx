import "./StudentCard.css";
import { useUser } from "../../../contexts/UserContext";

function StudentCard(){
  const { user } = useUser();
  return(
    
    <div >
      <div className="result-header" >
        <h4>MY RESULT</h4>
      </div>
      
      
    <div className="student-card">

      <div className="avatar"></div>

      <div className="student-info">
        <h3>{user ? `${user.last_name}, ${user.first_name}` : 'Student'}</h3>
        <p>One of nine: Score: 240/300</p>
        <p>Test Taken: 300</p>
      </div>

      <div className="mathguru-img">
        <img src="/assets/images/mathguru.png" alt="student reading" width={"100px"}/>
      </div>

    </div>
    </div>
  )
}

export default StudentCard;