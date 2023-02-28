import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
    return(
       <>
       <Navbar/>
      <Hero
      cName="hero"
    heroImg=" https://images.unsplash.com/photo-1672740276184-74e76b16c0f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=60 "
    title="MOMENTS BECOME MEMORIES"
    
    text="Choose Your Favorite Destination."
    buttonText="Travel Plan"
    url="/"
    btnClass="show"
     />
     <Destination />
     <Trip/>
     <Footer/>
    </> 
    );
}

export default Home;
