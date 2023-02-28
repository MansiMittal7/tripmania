import "./TripStyles.css";
import TripData from "./TripData"
import Trip1 from "../assets/maldives.png"
import Trip2 from "../assets/switzerland.png"
import Trip3 from "../assets/Tokyo.jpg"

function Trip(){
    return (

    <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        <div className="tripcard">
        <TripData
        image={Trip1}
        heading= "Trip in Maldives"
        text="The Maldives is famous for a number of reasons, including its vibrant culture, pristine beaches, sprawling greenery, and fascinating landmarks. Apart from the numerous enchanting landmarks, Maldives is also famous for water sports and other adventure activities."
        />
        <TripData
        image={Trip2}
        heading= "Trip in Tokyo"
        text="Travel and find happiness within yourself. Allow us to convince you. You won't regret it. Experience holidays in Tokyo and find the best time to go and the best places to visit. Travel Information. Sustainable Tourism. Cheap and Fun Travel."
        />

        <TripData
        image={Trip3}
        heading= "Trip in Maldives"
        text="The Maldives is famous for a number of reasons, including its vibrant culture, pristine beaches, sprawling greenery, and fascinating landmarks. Apart from the numerous enchanting landmarks, Maldives is also famous for water sports and other adventure activities."
        />
        </div>
    </div>

    );
}

export default Trip;
