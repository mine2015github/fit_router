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

    return (
      <div id="login">
        <div className="login_top">
          <img src="http://orkwtps3q.bkt.clouddn.com/image/svg/logo.svg"/>
          <span>Fit Youself</span>
          <div>美好身材,出汗可得</div>
        </div>

        <div style={{width:"80%", margin:"0 auto"}}>
          <WhiteSpace />
          <Tabs defaultActiveKey="1" animated={false} onChange={this.callback} onTabClick={this.handleTabClick}>

            <TabPane tab="短信登录" key="1">
              <div style={{padding:"1.5rem 0rem"}}>
                <section className="section_com">
                  <input className="input_area" type="text" name="phonenumber" placeholder="手机号"/>
                  <button className="yanzhengma">获取验证码</button>
                </section>

                <section className="section_com">
                  <input className="input_area" type="text" name="yanzhengma" placeholder="验证码"/>
                </section>

                <section className="hint">
                   温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意
                   <a href="#" target="_blank">《用户服务协议》</a>
                </section>

                <section style={{marginTop: "2rem"}}>
                  <button className="login_btn">登录</button>
                </section>

                <section className="about_us">
                  <a href="#">关于我们</a>
                </section>

              </div>
            </TabPane>

            <TabPane tab="密码登录" key="2">
              <div style={{padding:"1.5rem 0rem"}}>
                <section className="section_com" >
                  <input className="input_area" type="text" name="usercount" placeholder="手机/邮箱/用户名"/>
                </section>

                <section className="section_com">
                  <input className="input_area" type="password"  name="passwd" placeholder="密码"/>
                  <div className="passwd_show" onClick={this.passwdHandler}>
                    <div></div>
                    <span></span>
                  </div>
                </section>

                <section style={{marginTop: "2rem"}}>
                  <button className="login_btn">登录</button>
                </section>

                <section className="about_us">
                  <a href="#" >关于我们</a>
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
