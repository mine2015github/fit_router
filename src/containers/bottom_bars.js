
import React, {Component} from "react";
// import {TabBar,Icon } from 'antd-mobile';

import TabBar from 'antd-mobile/lib/tab-bar';
import Icon from 'antd-mobile/lib/icon';

import TrainTabs from "./train_header.js";
import StateTabs from "./state_header.js";
import FindTabs from "./find_header.js";
import User from './user.js';


import "../styles/bottom_bars.scss";

class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'oneTab',
      hidden: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        {pageText}tab
      </div>
    );
  }

  render() {
    return (
      <div className="bottom_bars">
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="训练"
          key="训练"
          icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(http://orkwtps3q.bkt.clouddn.com/image/svg/lighting.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(http://orkwtps3q.bkt.clouddn.com/image/svg/lighting.1.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'oneTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'oneTab',
            });
          }}
          data-seed="logId"
        >
        <TrainTabs/>
        </TabBar.Item>


        <TabBar.Item
          icon={{ uri: 'http://orkwtps3q.bkt.clouddn.com/image/svg/state.svg' }}
          selectedIcon={{ uri: 'http://orkwtps3q.bkt.clouddn.com/image/svg/state.1.svg' }}
          title="动态"
          key="动态"
          selected={this.state.selectedTab === 'twoTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'twoTab',
            });
          }}
          data-seed="logId1"
        >
          <StateTabs/>
        </TabBar.Item>


        <TabBar.Item
          icon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(http://orkwtps3q.bkt.clouddn.com/image/svg/find.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(http://orkwtps3q.bkt.clouddn.com/image/svg/find.1.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          title="发现"
          key="发现"
          dot
          selected={this.state.selectedTab === 'threeTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'threeTab',
            });
          }}
        >
        <FindTabs/>
        </TabBar.Item>



        <TabBar.Item
          icon={{ uri: 'http://orkwtps3q.bkt.clouddn.com/image/svg/user.svg' }}
          selectedIcon={{ uri: 'http://orkwtps3q.bkt.clouddn.com/image/svg/user.1.svg' }}
          title="我的"
          key="我的"
          selected={this.state.selectedTab === 'fourTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'fourTab',
            });
          }}
        >
        <User/>
        </TabBar.Item>
      </TabBar>
    </div>
    );
  }
}

export default BottomBar;
