import React, {Component} from "react";

import Carousel from 'antd-mobile/lib/carousel';
import WhiteSpace from 'antd-mobile/lib/white-space';
import WingBlank from 'antd-mobile/lib/wing-blank';
import List from 'antd-mobile/lib/list';
import Flex from 'antd-mobile/lib/flex';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import $ from 'n-zepto';
import Show from "../components/show.js";
import HotVideo from "../pages/video/hot_video.js";

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
      <div className="state_header_one"  style={{paddingBottom: "3rem"}}>

        <Link to="/hotvideo">
          <div className="hot">
            <img  src={require("../images/hot/video.jpg")} />
            <p className="title-1"> Hot Video</p>
            <p className="title-2">今日热门视频</p>
            <p className="play-button"></p>
          </div>
        </Link>

        <Route path="/hotvideo" exact render={(props)=>{
            return <HotVideo isFirst={true}/>
          }} ></Route>

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
