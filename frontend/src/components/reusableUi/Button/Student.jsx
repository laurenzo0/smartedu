import Button from "./Button";
import { FaGraduationCap } from "react-icons/fa";

function Student() {
  return (
    <div>
      <Button text="Student" type="student-btn">
        <FaGraduationCap className="icon" />
      </Button>
    </div>
  );
}

export default Student;