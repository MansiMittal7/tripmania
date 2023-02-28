import { Component } from "react";
import effiltower from "../assets/effiltower.jpg";
import NYC from "../assets/NYC.jpg";
import rome from "../assets/rome.jpg";
import Burj_Khalifa_building from "../assets/Burj_Khalifa_building.jpg";
import "./DestinationStyles.css";


class DestinationData extends Component{
    render()  {
      return(
        <div className={this.props.className}>
        <div className="des-text">
        <h2>{this.props.heading}</h2>
        <p>
          {this.props.text}
        </p>
        </div>
    <div className="image">
        <img alt="img" src={this.props.img1} />
        <img alt="img" src={this.props.img2} />
    </div>
    </div>
    
       
      )
    }
}

export default DestinationData;