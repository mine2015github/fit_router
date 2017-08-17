import React, {Component} from "react";
import Flex from 'antd-mobile/lib/flex';

import $ from "n-zepto";
import IScroll from 'iscroll/build/iscroll';
import "whatwg-fetch";
import Line from "../../components/line.js";

import HotVideoItem from "../../components/hot_video_item.js";

import {hotVideos} from "../../data/hot_videos.json";


class HotVideo extends Component {

  constructor(props){
    super(props);
    this.height = $(window).height();
    this.state = {scrollHeight:this.height, hotVideos};
  }

  componentWillMount(){

    /*
    向后台请求数据，并且将数据设置到 state中
    fetch(this.scrollId, {
      method:"get"
    }).then(function(response){
      return response.json();
    }).then(function(data){

    }).catch(function(e){
      console.log(e);
    });
    */
  }

  componentDidMount(){
    const _this = this;

    $(window).scrollTop(0);
    $("body").css({height:this.height, overflow:"hidden"});

    $(".am-tabs-bar").css("display", "none");

    //2个图标遮挡
    $(".state-publish").hide();
    $(".state-attention").hide();


    this.setState({scrollHeight: this.height - $(".hot_video_top").height() - 48});

    setTimeout(function() {
      //如果有问题，可以稍作延迟
      //垂直滚动时，不要设置eventPassthrough: true，否则就无效
      new IScroll("#hot_video_items", {mouseWheel: true});
    }, 100);

  }

  closeHandler = ()=>{
    $("body").css({height:"auto", overflow:"auto"});
    $(".am-tabs-bar").css("display", "flex");
    $(".state-publish").show();
    $(".state-attention").show();

    // window.location.href = this.props.prev;//速度有些慢
    window.history.go(-1);
  }

  formatTime(min){
    if (min > 59  && min < 24 * 60){
      //返回小时
      return parseInt(min / 60) + "小时";
    }

    if (min > 24 * 60){
      //返回天
      return parseInt(min / (24 * 60)) + "天";
    }

    return min + "分钟";//返回分钟
  }


  render() {
    const _this = this;

    return (
      <div className="hot_video"  style={{position:"absolute", minHeight:this.height, top: (this.props.isFirst === true ? "0rem":"-1rem"), left: "0", right:"0",zIndex:"11"}}>
        <div className="clearfix hot_video_top" style={{ height: "2rem", padding:"1rem", background:"#584f60"}}>
          <img onClick={this.closeHandler} style={{cssFloat: "left", width:"1rem", height: "2rem",background: "none"}}
            src="http://orkwtps3q.bkt.clouddn.com/image/svg/back.svg"/>
          <div style={{color:"#fff",fontSize:"1rem",cssFloat: "left", height:"2rem", lineHeight:"2rem", marginLeft:"1rem"}}>热门视频</div>
        </div>

          <div id="hot_video_items" style={{height:this.state.scrollHeight, background:"#fff", overflow:"hidden"}}>
            <div>
              {
                this.state.hotVideos.map((e,index)=>{
                  return (
                    <div key={index}>
                    <HotVideoItem  headImg={e.headImg} nickName={e.nickName} videoSrc={e.videoSrc} timeAgo={_this.formatTime(e.timeAgo)}/>
                    </div>
                  );
                })
              }
            </div>
          </div>

      </div>
    );
  }
}

export default HotVideo;
