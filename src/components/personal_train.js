
import React, {Component} from "react";



class PersonalTrain extends Component {

  showTrain = ()=>{
    this.props.showTrain(this.props.index);
  }

  render(){
    return (
      <div onClick={this.showTrain} style={{margin: "0rem", padding: "0rem"}}>
        {this.props.children}
      </div>
    );
  }
}

export default PersonalTrain;
