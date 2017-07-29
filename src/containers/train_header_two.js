import React, {Component} from "react";
import PropTypes from "prop-types";
// import { Carousel, WhiteSpace, WingBlank,List, Icon } from 'antd-mobile';

import Carousel from 'antd-mobile/lib/carousel';
import WhiteSpace from 'antd-mobile/lib/white-space';
import WingBlank from 'antd-mobile/lib/wing-blank';
import List from 'antd-mobile/lib/list';
import Icon from 'antd-mobile/lib/icon';


import Gap from "../components/gap.js";
import Miles from "../components/run_mile.js";

import "../styles/train_header_two.scss";

import {runWays, runTrains} from "../data/train_header_two.json";

const Item = List.Item;
const Brief = Item.Brief;


class TrainTwo extends  Component {

  constructor(props){
    super(props);
    this.state = {runWays, ways: 16, runTrains};
  }
  render(){
    const title = {
      fontSize: "0.8rem",
      padding: "1rem 0"
    };

    return (
      <div className="train_header_two" style={{paddingBottom: "3rem"}}>
        <Miles mile={10} title="RUNNING"/>
        <Gap/>

        <WingBlank>
          <div  style={title}>跑步路线</div>
          <div>
            {
              this.state.runWays.map((ii)=>(
                <List key={ii.name} className="my-list-1">
                  <Item extra={`距离${ii.distance}公里`}>
                    {ii.name}
                    <Brief>全长{ii.long}公里 {ii.members}人打卡</Brief>
                  </Item>
                </List>
              ))
            }
          </div>

          <div style={{fontSize: "1rem", color:"#888",height: "3rem", lineHeight: "3rem", textAlign:"center"}}>查看附近{this.state.ways}条跑步路线</div>
        </WingBlank>

        <Gap marginTop="0rem"/>


        <WingBlank  className="load-img">
          <div className="run-train" style={{title}}>
            跑步相关训练
            <Icon type="right" size="lg" />
          </div>

          <div>
            {this.state.runTrains.map((ii, index) => (
              <a href="https://www.baidu.com" key={ii.name} style={{color: "#fff",display: "block", position: "relative"}}>
                <img
                  src={require(`../images/run/${index + 1}.jpg`)}
                  alt="icon"
                  style={{width: "100%"}}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                  }}
                  />
                <div style={{fontSize: "1rem",position:"absolute", top:"30%", left: "5%"}}>
                  <div style={{fontSize: "1.2rem"}}>{ii.name}</div>
                  <div style={{fontSize: "0.5rem", marginTop: "0.5rem"}}>{ii.members}人参加</div>
                  <div style={{fontSize: "0.5rem", marginTop: "0.5rem"}}>{ii.time}分钟</div>
                </div>
              </a>
            ))}
          </div>
        </WingBlank>

      </div>
    );
  }

}

export default  TrainTwo;
