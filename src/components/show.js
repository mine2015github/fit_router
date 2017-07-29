
import React, {Component} from "react";

class Show extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    console.log(this.props.imgSrc);

    //img src中使用require(this.props.imgSrc)存在错误
    //更换为服务器图片
  }

  render(){

    const supportStyle = {
      height: "2rem",
      width: "4rem",
      lineHeight: "2rem",
      textAlign: "right",
      cssFloat: "right",
      background: "url('http://orkwtps3q.bkt.clouddn.com/image/svg/support.svg') left center no-repeat",
      backgroundSize: "2rem 1rem"
    };

    return (
      <div style={{fontSize: "0.8rem"}}>
        <img style={{"width": "100%"}} src={this.props.imgSrc}/>
        <p style={{"margin": "0rem", "paddingTop": "0.3rem", "height": "1.8rem", "overflow":"hidden"}}>
        {this.props.content}
        </p>
        <div style={{"height":"2rem", "lineHeight": "2rem"}}>
          <div style={{cssFloat: "left", height: "2rem"}}>{this.props.nickName}</div>
          <div style={supportStyle}>{this.props.support}</div>
        </div>
      </div>
    );
  }
}

export default Show;
