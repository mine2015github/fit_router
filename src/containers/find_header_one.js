import React, {Component} from "react";

 import Carousel from 'antd-mobile/lib/carousel';
 import WhiteSpace from 'antd-mobile/lib/white-space';
 import WingBlank from 'antd-mobile/lib/wing-blank';
 import List from 'antd-mobile/lib/list';
 import Icon from "antd-mobile/lib/icon";

 import Flex from "antd-mobile/lib/flex";

 import $ from "n-zepto";

 import Gap from "../components/gap.js";

 import {lunbo, topic, hotEvent, expert} from "../data/find_header_one.json";

 class FindOne extends Component {

   state = {lunbo, topic, hotEvent, expert};

   componentDidMount() {
     $(".load-img img").on('load', function(){
       $(this).css("height", "auto");
     });

       $(".slider-frame").css("min-height", "12rem");
   }

   render(){

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
      <div style={{paddingBottom: "3rem"}}>
        <div className="load-img">
          <Carousel {...settings} >

            {this.state.lunbo.map(ii => (
              <a href="https://www.baidu.com" key={ii} style={{display: "block"}}>
                <img
                  src={require("../images/select/" + ii + ".jpg")}
                  alt="icon"
                  style={{width: "100%"}}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                  }}
                  />
              </a>
            ))}
          </Carousel>
        </div>

        <Gap marginTop="-0.3rem"/>

        <WingBlank>
          <div className="run-train" style={{title}}>
            话题讨论
            <Icon type="right" size="lg" />
          </div>

          <div>
            <Flex>
              {
                this.state.topic.map((ii,index) => (
                  <Flex.Item key={index}>
                    <a href="https://www.baidu.com" style={{fontSize: "0.8rem",display: "block", position: "relative", color: "#fff"}}>
                      <img
                        src={require("../images/topic/" + ii.id + ".jpg")}
                        alt="icon"
                        style={{width: "100%"}}
                        onLoad={() => {
                          window.dispatchEvent(new Event('resize'));
                        }}
                        />
                      <div style={{position: "absolute", top:"50%", marginTop: "-1rem", width: "50%", height: "2rem", transform: "translate(50%,0)"}}>
                        <div>{ii.title}</div>
                      </div>
                    </a>
                  </Flex.Item>
                ))
              }
            </Flex>
          </div>
        </WingBlank>

        <Gap/>

        <WingBlank>
          <div className="run-train" style={{title}}>
            热门活动
            <Icon type="right" size="lg" />
          </div>
          <div className="load-img">
            {
              this.state.hotEvent.map((ii,index) =>{
                return (
                  <a href="https://www.baidu.com" key={index} style={{fontSize: "0.8rem",display: "block", position: "relative", color: "#fff"}}>
                    <img
                      src={require("../images/hot_event/" + ii.id + ".jpg")}
                      alt="icon"
                      style={{width: "100%"}}
                      onLoad={() => {
                        window.dispatchEvent(new Event('resize'));
                      }}
                      />

                    <div style={{position:"absolute", top: "50%", left: "1rem", transform:"translate(0,-50%)", height: "1rem", lineHeight:"1rem",
                       borderRadius:"0.5rem", padding: "0.5rem", fontSize: "0.5rem", color:"#000", background:"#fff"}}>报名进行中</div>

                     <div style={{position:"absolute", top:"64%", left: "1rem",  height: "1rem", lineHeight:"1rem",
                        fontSize: "1rem", color:"#fff"}}>{ii.title}</div>

                      <div style={{position:"absolute", top:"80%", right: "0rem",  height: "1rem", lineHeight:"1rem",
                        padding:"0.3rem",fontSize: "0.3rem", borderRadius:"0.2rem", color:"#fff", background:"#24c789"}}>直播</div>
                  </a>
                );})
              }
          </div>
        </WingBlank>


        <div>
          <div className="run-train" style={{title, padding:"0 0.3rem"}}>
            达人推荐
            <Icon type="right" size="lg" />
          </div>
          <div>
            {
              this.state.expert.map((ii,index) => (
                <div key={index} style={{position:"relative"}}>
                  <a href="https://www.baidu.com" className="clearfix"
                    style={{borderBottom:"1px solid lightgray" ,padding: "1rem",fontSize: "0.8rem",display: "flex"}}>
                    <img
                      src={ii.headImg}
                      alt="icon"
                      style={{width: "3rem", height: "3rem", borderRadius:"50%"}}
                      onLoad={() => {
                        window.dispatchEvent(new Event('resize'));
                      }}
                      />

                    <div style={{flex:1, color:"#000", padding:"0.3rem"}}>
                      <p style={{margin: "0 0 0.5rem 0"}}>{ii.nickName}</p>
                      <p style={{margin: "0", fontSize:"0.5rem", color:"gray"}}>{ii.intro}</p>
                    </div>
                  </a>

                  <div style={{ position:"absolute",height: "1rem", fontSize:"0.5rem", lineHeight:"1rem", right:"1rem" ,top:"50%", transform:"translate(0,-50%)" ,textAlign:"center",
                    padding: "0.3rem 1.2rem", borderRadius:"1rem", border:"1px solid #24c789", color:"#24c789"}}>关注</div>
                </div>
              ))
            }
          </div>
        </div>

        <Gap marginTop="0rem"/>

        <WingBlank>
          <div className="run-train" style={{title}}>
            精选文章
            <Icon type="right" size="lg" />
          </div>

          <a className="load-img" href="https://www.baidu.com" style={{display:"block", color:"#000", textAlign:"center", fontSize:"0.8rem"}}>
            <img src={require("../images/select_article/1.jpg")} style={{width:"100%"}} />
            <p>小粗腿、高低肩、没准都是扁平足的锅！</p>
          </a>

        </WingBlank>



      </div>
    );
  }
}

export default FindOne;
