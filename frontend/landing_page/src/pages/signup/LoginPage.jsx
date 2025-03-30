import "./SignupPage.css";
import SignupNavbar from "./SignupNavbar.jsx";
import Login from "./Login.jsx";
import SignupRules from "./SignupRules.jsx";
import SignupFooter from "./SignupFooter.jsx";

function LoginPage() {
    return (
        <div className="container signup-container">
            <SignupNavbar />
            <Login />
            <SignupRules />
            <SignupFooter />
        </div>
    );
}

export default LoginPage;