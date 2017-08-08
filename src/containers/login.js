import React, {Component} from "react";
import $ from "n-zepto";

import Tabs from 'antd-mobile/lib/tabs';
import WhiteSpace from 'antd-mobile/lib/white-space';

import "../styles/login.scss";


const TabPane = Tabs.TabPane;


class Login extends Component {
  constructor(props){
    super(props);
    this.isPasswdShow = false;
  }

  componentDidMount(){
    $("#login .am-tabs-tab").eq(0).css("border-bottom", "2px solid #108ee9");
  }

  callback(key) {
  }

  handleTabClick(key) {
    $("#login .am-tabs-tab").eq(key-1).css("border-bottom", "2px solid #108ee9").siblings(".am-tabs-tab").css("border-bottom", "none");
  }

  passwdHandler = ()=>{

    /*
    子元素使用transform时，导致 .passwd_show的borderRadius有问题，需要每次重新设置？？？？
    */
    if (!this.isPasswdShow){
      $("#login .passwd_show div").eq(0).css({
        transform: "translate3d(1.5rem, 0,0)"
      });
      $("#login .passwd_show").eq(0).css({backgroundColor:"#108ee9", borderColor: "#108ee9" ,color: "#fff", borderRadius:"10px/50%"}).find("span").text("abc");

      $("#login input[name=passwd]").eq(0).attr('type', "text");
      this.isPasswdShow = true;
    } else {
        $("#login .passwd_show div").eq(0).css({
        transform: "translate3d(0, 0,0)"
      });
      $("#login .passwd_show").eq(0).css({backgroundColor:"#fff", borderColor:"#ddd", color: "#000", borderRadius:"10px/50%"}).find("span").text("");
      $("#login input[name=passwd]").eq(0).attr('type', "password");
      this.isPasswdShow = false;
    }
  }

  render(){

    const commonStyles = {
      position:"relative",
      height:"3rem",
      marginBottom:"1.5rem"
    };

    const inputStyles = {
      position:"absolute",
      width: "100%",
      height:"100%",
      left: "0rem",
      top: "0rem",
      border:"1px solid #ddd",
      borderRadius:"6px",
      paddingLeft:"0.8rem",
      boxSizing:"border-box",
      fontSize:"1rem"
    };

    const yanzhengma = {
      position:"absolute",
      right: "0rem",
      top: "0rem",
      top: "50%",
      marginTop: "-0.4rem",
      fontSize: "0.8rem",
      border: "none",
      background: "none",
      color: "gray",
      fontSize:"0.8rem"
    };

    const loginBtn = {
      display:"block",
      width: "100%",
      height:"3rem",
      lineHeight: "3rem",
      textAling: "center",
      border: "none",
      borderRadius: "6px",
      backgroundColor: "#00d762",
      fontSize: "1.2rem",
      color: "#fff"
    };

    const passwd = {
      position: "absolute",
      width: "2.5rem",
      height: "1rem",
      borderRadius: "10px/50%",
      top: "50%",
      marginTop: "-0.5rem",
      right: "0.1rem",
      border: "1px solid #ddd"
    };

    const passwdOne = {
      position: "absolute",
      top: "-1px",
      left: "-1px",
      width: "1rem",
      height: "1rem",
      background: "#fff",
      borderRadius: "50%",
      border: "1px solid #ddd",
      boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
      transition: "transform .3s,-webkit-transform .3s"
    };



    return (
      <div id="login">
        <div style={{textAlign:"center",fontSize:"2rem", color:"#1296db", padding:"1.5rem"}}>
          <img style={{width:"3rem", height:"3rem", verticalAlign:"middle"}} src="http://orkwtps3q.bkt.clouddn.com/image/svg/logo.svg"/>
          <span style={{marginLeft:"0.5rem"}}>Fit Youself</span>
          <div style={{fontSize:"1.2rem"}}>美好身材,出汗可得</div>
        </div>

        <div style={{width:"80%", margin:"0 auto"}}>
          <WhiteSpace />
          <Tabs defaultActiveKey="1" animated={false} onChage={this.callback} onTabClick={this.handleTabClick}>

            <TabPane tab="短信登录" key="1">
              <div style={{padding:"1.5rem 0rem"}}>
                <section style={commonStyles}>
                  <input style={inputStyles} type="text" name="phonenumber" placeholder="手机号"/>
                  <button style={yanzhengma}>获取验证码</button>
                </section>

                <section style={commonStyles}>
                  <input style={inputStyles} type="text" name="yanzhengma" placeholder="验证码"/>
                </section>

                <section style={{fontSize:"0.8rem", color:"#999"}}>
                   温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意
                   <a href="#" target="_blank"style={{color:"#2395ff"}}>《用户服务协议》</a>
                </section>

                <section style={{marginTop: "2rem"}}>
                  <button style={loginBtn}>登录</button>
                </section>

                <section style={{marginTop:"2rem", textAlign:"center"}}>
                  <a href="#" style={{color: "#999"}}>关于我们</a>
                </section>

              </div>
            </TabPane>

            <TabPane tab="密码登录" key="2">
              <div style={{padding:"1.5rem 0rem"}}>
                <section style={commonStyles}>
                  <input style={inputStyles} type="text" name="usercount" placeholder="手机/邮箱/用户名"/>
                </section>

                <section style={commonStyles}>
                  <input style={inputStyles} type="password"  name="passwd" placeholder="密码"/>
                  <div className="passwd_show" onClick={this.passwdHandler} style={passwd}>
                    <div style={passwdOne}></div>
                    <span></span>
                  </div>
                </section>

                <section style={{marginTop: "2rem"}}>
                  <button style={loginBtn}>登录</button>
                </section>

                <section style={{marginTop:"2rem", textAlign:"center"}}>
                  <a href="#" style={{color: "#999"}}>关于我们</a>
                </section>

              </div>
            </TabPane>

          </Tabs>
          <WhiteSpace />
        </div>

      </div>
    );
  }
}

export default Login;
