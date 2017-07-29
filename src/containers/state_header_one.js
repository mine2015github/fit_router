import React, {Component} from "react";

import Carousel from 'antd-mobile/lib/carousel';
import WhiteSpace from 'antd-mobile/lib/white-space';
import WingBlank from 'antd-mobile/lib/wing-blank';
import List from 'antd-mobile/lib/list';
import Flex from 'antd-mobile/lib/flex';

import $ from 'n-zepto';

import Show from "../components/show.js";


import "../styles/state_header_one.scss";

import {show} from "../data/state_header_one.json";


class StateOne extends Component {

  constructor(props){
    super(props);
    this.state = {"show":show};
  }


  componentDidMount() {
    $(".load-img img").on('load', function(){
      $(this).css("height", "auto");
    });
  }

  render(){
    return (
      <div  style={{paddingBottom: "3rem"}}>

        <div className="hot">
         {/*
           //后续再写视频的操作
          <video  muted  loop style={{"width": "100%", "height": "10rem"}}>
            <source src="http://orkwtps3q.bkt.clouddn.com/video/mp4/5s.mp4"/>
          </video>
          */}
          <img src={require("../images/hot/video.jpg")} />
          <p className="title-1"> Hot Video</p>
          <p className="title-2">今日热门视频</p>
          <p className="play-button"></p>
        </div>

        <div className="show clearfix">
        {
          this.state.show.map((elem,index)=>(
            <div className="load-img" key={index}>
            <Show  imgSrc={elem.img} content={elem.content}
            nickName={elem.nickName} support={elem.support}/>
            </div>
          ))
        }
        </div>

      </div>
    );
  }
}

export default StateOne;
