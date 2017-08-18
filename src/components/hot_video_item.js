import React, {Component} from "react";
import "./hot_video_item.scss";


class HotVideoItem extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="hot_video_item">

        <div className="hot_video_item_top">
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

      </div>
    );
  }
}

export default HotVideoItem;
