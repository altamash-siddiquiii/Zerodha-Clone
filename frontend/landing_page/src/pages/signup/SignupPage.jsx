import "./SignupPage.css";
import SignupNavbar from "./SignupNavbar.jsx";
import Signup from "./Signup.jsx";
import SignupRules from "./SignupRules.jsx";
import SignupFooter from "./SignupFooter.jsx";

function SignupPage() {
    return (
        <div className="container signup-container">
            <SignupNavbar />
            <Signup />
            <SignupRules />
            <SignupFooter />
        </div>
    );
}

export default SignupPage;