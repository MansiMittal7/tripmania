import effiltower from "../assets/effiltower.jpg";
import NYC from "../assets/NYC.jpg";
import rome from "../assets/rome.jpg";
import Burj_Khalifa_building from "../assets/Burj_Khalifa_building.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
    return(
    <div className="destination">
    <h1>Popular Destination</h1>
    <p>Tours give you the opportunity to explore a lot, within a time frame.</p>
    <DestinationData
    className="first-des"
       heading="Paris"
        text="Paris is one of the most beautiful cities in the world. It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city. The city is also known for its high-quality gastronomy and the terraces of its cafés."
    img1={effiltower}
    img2={NYC}
    /> 

<DestinationData
        className="first-des-reverse"
       heading="Dubai"
        text=" Dubai is today one of the most cosmopolitan cities in the world. One of the seven emirates that make up the United Arab Emirates, the city is home to more than 200 nationalities and offers an unforgettable experience to all visitors. Whether it is by the banks of the Creek, or at the top of the Burj Khalifa, the world’s tallest building, Dubai lives and breathes a sense of possibility and innovation. And with an unparalleled coastline, beautiful desert and magnificent cityscapes, memories are just waiting to be made here. "
    img1={rome}
    img2={Burj_Khalifa_building}
    /> 

    </div>
    );
}

export default Destination;
