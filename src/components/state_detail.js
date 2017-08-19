import React, {Component} from "react";
import "./state_detail.scss";

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {withRouter} from "react-router";

import $ from 'n-zepto';
import PropoTypes from "prop-types";
import Toast from 'antd-mobile/lib/toast';

import Modal from "antd-mobile/lib/modal";
const operation = Modal.operation;


class StateDetail extends Component {

  static propotypes = {

  }

  constructor(props){
    super(props);
    this.height = $(window).height();
  }


  componentDidMount(){

  }

  horn(){
    Toast.info("加油1次",2);
  }


  render(){

    const _this = this;

    const commonStyle = {
      cssFloat: "left",
      width: "1.2rem",
      height: "1.2rem",
      marginRight: "2rem"
    };

    return (
      <div className="state_detail_item"  style={{position:"absolute", minHeight:this.height, top: (this.props.isFirst === true ? "0rem":"-1rem"), left: "0", right:"0",zIndex:"11"}}>

        <div className="clearfix item_top" style={{ height: "2rem", padding:"1rem", background:"#584f60"}}>
          <img onClick={this.closeHandler} style={{cssFloat: "left", width:"1rem", height: "2rem",background: "none"}}
            src="http://orkwtps3q.bkt.clouddn.com/image/svg/back.svg"/>
          <div style={{color:"#fff",fontSize:"1rem",cssFloat: "left", height:"2rem", lineHeight:"2rem", marginLeft:"1rem"}}>动态详情</div>
        </div>

        <div className="state_detail_item_top">
          <div  className="clearfix" style={{padding: "1rem"}}>
            <img style={{cssFloat: "left", width:"2.5rem", height:"2.5rem", borderRadius:"50%", border: "0.06rem solid gray"}} src={this.props.headImg}/>
            <div style={{cssFloat: "left", height: "2.5rem", paddingLeft: "0.5rem"}}>
              <span style={{fontSize: "0.5rem"}}>{this.props.nickName}</span>
              <p style={{fontSize: "0.2rem", color: "gray", margin: "0.2rem 0 0 0"}}>{this.props.timeAgo}之前&nbsp;</p>
            </div>
            <button style={{cssFloat: "right", border: "none", width: "4rem", height: "2rem", borderRadius: "0.9rem", padding: "0.2rem 1rem",fontSize: "0.5rem", color: "#fff", background: "#24c789"}}>关注</button>
          </div>
        </div>

        <div className="hot_video_src">
        {/*object-fit用于让video进行填充*/}
          <video  className="video_tag" muted  loop>
            <source src={this.props.videoSrc}/>
          </video>

          <div className="video_icon">
            <img src="http://orkwtps3q.bkt.clouddn.com/image/png/playVideo.png"/>
          </div>
        </div>

          <div  className="clearfix  share">
          <img onClick={this.horn} style={commonStyle} src="//orkwtps3q.bkt.clouddn.com/image/svg/horn.svg" />

          <img style={commonStyle} src="//orkwtps3q.bkt.clouddn.com/image/svg/message1.svg" />

          <img style={commonStyle} src="//orkwtps3q.bkt.clouddn.com/image/svg/share.svg" />

          <div onClick={() => operation([
          { text: '举报', onPress: () => console.log('举报被点击')}
          ])}
          style={{cssFloat: "right", fontSize: "2rem", marginTop: "-1.2rem"}}>...</div>

          </div>
          <p className="desc">{this.props.desc}</p>
      </div>
    );
  }
}

export default StateDetail;
