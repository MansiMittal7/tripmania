import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/images.png"
import Footer from "../components/Footer";
import SignUpPage from "../components/SignUpPage";

 function Signup() {
  return (
    <>
    <Navbar />
    <Hero
    cName="hero-mid"
    heroImg={AboutImg}
     title="Sign Up"
   
    btnClass="hide"
    />
    <SignUpPage/>
    <Footer/>
    </> 
    
    
  );
}

export default Signup;

