import React, {Component} from "react";
import ReactDOM from "react-dom";
// import { Carousel, WhiteSpace, WingBlank,List } from 'antd-mobile';

 import Carousel from 'antd-mobile/lib/carousel';
 import WhiteSpace from 'antd-mobile/lib/white-space';
 import WingBlank from 'antd-mobile/lib/wing-blank';
 import List from 'antd-mobile/lib/list';

import Gap from "../components/gap.js";
import Back from "../components/back.js";
import PersonalTrain from "../components/personal_train.js";

import {lunbo,dayRec,news,personal} from "../data/train_header_one.json";

import "../styles/train_header_one.scss";


import "whatwg-fetch";
import $ from "n-zepto";

const Item = List.Item;
const Brief = Item.Brief;

/*
引入本地图片
import img1 from "../images/star/1.jpg";
<img src={require("../image/start/1.jpg")}>
*/


class TrainOne extends Component {

  constructor(props){
    super(props);
    this.state = {lunbo, dayRec, news,personal};
    const _this = this;

    fetch("/train/one", {
      method: "get"
    }).then(function(response){
      return response.json();
    }).then(function(data){
      _this.setState({data: data});
    }).catch(function(err){
      console.log(err);
    });
  }


  componentWillMount(){
  }


  componentDidMount() {

    //图片资源加载完毕之后，设置为自动高度（不再使用设置的背景高度）
    $(".load-img img").on('load', function(){
      $(this).css("height", "auto");
    });

    //解决轮播图图片在页面多次访问时的高度太低问题
    $(".slider-frame").css("min-height", "12rem");
  }

  showTrain = (index)=>{
    var trains = this.state.personal;
    trains.forEach(function(ele,i){
      if (index === i){
        ele.showTrain = true;
      } else {
        ele.showTrain = false;
      }
    });
    this.setState({personal:trains});

     $(".bottom_bars .am-tabs-bar").css("display", "none");

     /*
     显示子窗口时，不需要父窗口滚动，因此，直接将body进行设置。
     */
     $("body").scrollTop(0);
     $("body").css({"overflow":"hidden", "height": $(window).height + 'px'});
  }


   closeTrainShow = () =>{
     var trains = this.state.personal;
     trains.forEach(function(e,i){
       e.showTrain = false;
     });
     this.setState({personal: trains});

     $(".bottom_bars .am-tabs-bar").css("display", "flex");

     /*
     关闭子窗口时，恢复body的滚动。
     */
     $("body").css({"overflow":"auto", "height":'auto' });
   };


  render() {

    // console.log(this.state.data);

    const _this = this;

    const settings = {
      className: "my-carousel",
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      autoplay: true,
      dotActiveStyle: {
        backgroundColor: "#33a3f4"
      }
    };

    const title = {
      fontSize: "0.8rem",
      padding: "1rem 0"
    };

    return (
      <div className="train_header_one" style={{paddingBottom: "3rem"}}>
        <WingBlank  className="star-class load-img">
          <div  style={title}>明星课程</div>
          <Carousel {...settings}>

            {this.state.lunbo.map(ii => (
              <a href="https://www.baidu.com" key={ii} style={{display: "block"}}>
                <img
                  src={require("../images/star/" + ii + ".jpg")}
                  alt="icon"
                  style={{width: "100%"}}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                  }}
                  />
              </a>
            ))}
          </Carousel>
        </WingBlank>
        <Gap/>

        <WingBlank>
          <div  style={title}>我的训练</div>

          <div>
            {
              this.state.personal.map((ii,index)=>(
                <PersonalTrain key={index} index={index} showTrain={_this.showTrain}>
                  <List className="my-list" >
                    <Item extra={ii.time + "分钟"}>
                      {ii.title}
                      <Brief>上次训练{ii.lastTrain}天以前</Brief>
                    </Item>
                  </List>
                </PersonalTrain>
              ))
            }
          </div>
        </WingBlank>

        <div className="sub_back" style={{margin: "0rem", padding:"0rem"}}>
          {
            this.state.personal.map((ii,index)=>(
              <Back key={index} show={ii.showTrain} setClose={_this.closeTrainShow}  title={ii.title}>
                <div style={{height: "1000px"}}>
                  我的高度是1000px
                </div>
              </Back>
            ))
          }
        </div>

        <Gap/>

        <WingBlank className="load-img">
          <div  style={title}>今日推荐运动</div>
          <div>
            {this.state.dayRec.map(ii => (
              <a href="https://www.baidu.com" key={ii.index} style={{color: "#fff",display: "block", position: "relative"}}>
                <img
                  src={require("../images/dayRec/" + ii.index + ".jpg")}
                  alt="icon"
                  style={{width: "100%"}}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                  }}
                  />
                <div style={{fontSize: "1rem",position:"absolute", top:"30%", left: "5%"}}>
                  <div>{ii.item}</div>
                  <div style={{fontSize: "0.5rem", marginTop: "0.5rem"}}>{ii.time}分钟</div>
                </div>
              </a>
            ))}
          </div>
        </WingBlank>


        <WingBlank className="load-img">
          <div  style={title}>健康日报</div>
          <div>
            {this.state.news.map(ii => (
              <div key={ii.index}>
                <a href="https://www.baidu.com" style={{color: "#fff",display: "block"}}>
                  <img
                    src={require("../images/news/" + ii.index + ".jpg")}
                    alt="icon"
                    style={{width: "100%"}}
                    onLoad={() => {
                      window.dispatchEvent(new Event('resize'));
                    }}
                    />
                </a>
                <p style={{fontSize: "0.8rem",margin: "0.5rem 0 ", textAlign: "center"}}>{ii.title}</p>
              </div>
            ))}
          </div>
        </WingBlank>

      </div>
    );
  }
}

export default TrainOne;
