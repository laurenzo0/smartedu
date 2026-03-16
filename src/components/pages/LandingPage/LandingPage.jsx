import Button from "../../reusableUi/Button/Button";
import Submit from "../../reusableUi/Button/submit";
import Complete from "../../reusableUi/Button/Complete";
import Student from "../../reusableUi/Button/Student";
import GetStarted from "../../reusableUi/Button/GetStarted";
import ResetPassword from "../../reusableUi/Button/ResetPassword";
import SignUp from "../../reusableUi/Button/SignUp";

function LandingPage() {
  return (
    // <div>
    //   <Button text="GET STARTED" type="primary" />

    //   <Button text="Submit" type="success" />

    //   <Button text="Complete" type="success" />

    //   <Button text="Reset Password" type="long" />

    //   <Button text="Sign Up" type="success" />
      
    // </div>
    <>
    <Submit />
    <Complete />
    <Student />
    <GetStarted />
    <ResetPassword />
    <SignUp />

    </>
  );
}

export default LandingPage;