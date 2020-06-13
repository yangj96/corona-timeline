import React from "react";
import "./App.css";
import { Modal, Progress, Button, Menu, Dropdown } from "antd";
import {
  FrownOutlined,
  SmileOutlined,
  GlobalOutlined,
  DownOutlined,
} from "@ant-design/icons";

class EventDiv extends React.Component {
  state = {
    visible: false,
    title: "",
    desc: "",
    type: 0,
    id: 0,
    country: 0,
    time: 0,
    media: [],
  };

  handleClick(id) {
    console.log(id);
    // 根据id进行请求，获取弹窗内容
    let response = {
      // fake response
      title: "Title " + id,
      desc: "Description " + id,
      type: 0,
      id: id,
      country: "cn",
      time: 0,
      media: [
        {
          "media-id": 0,
          url: "https://www.bbc.com/news/world-us-canada-53026389",
        },
        {
          "media-id": 1,
          url:
            "https://news.cgtn.com/news/2020-06-13/Chinese-mainland-reports-11-new-COVID-19-cases-six-local-infections-RhwpVnijF6/index.html",
        },
      ],
    };
    this.setState({
      visible: true,
      title: response.title,
      desc: response.desc,
      type: response.type,
      id: response.id,
      country: response.country,
      time: response.time,
      media: response.media,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  renderEvent(id) {
    return (
      <div onClick={() => this.handleClick(id)}>
        <p className="event-title">This is Event Title {id}</p>
        <p className="event-desc">this is event description</p>
      </div>
    );
  }

  render() {
    //报道该事件的媒体图标
    var mediaIcon = [];
    for (var i = 0; i < this.state.media.length; i++) {
      mediaIcon.push(
        <a
          href={this.state.media[i].url}
          target="_blank"
          rel="noopener noreferrer"
          key={this.state.media[i]["media-id"]}
        >
          <img
            className="media-icon"
            alt="cgtn"
            src={require("./assets/" +
              this.state.media[i]["media-id"] +
              ".jpg")}
          ></img>
        </a>
      );
    }

    return (
      <div className="events-list">
        {this.renderEvent(0)}
        {this.renderEvent(1)}
        {this.renderEvent(2)}
        {this.renderEvent(3)}
        <Modal
          title={this.state.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>{this.state.desc}</p>
          <p>
            Class et amet feugiat curae sodales ac cubilia habitasse urna, ante
            in taciti tristique habitant mus pulvinar molestie, primis porta
            morbi bibendum lectus eros volutpat rhoncus. Fermentum arcu rhoncus
            blandit sed congue semper facilisis, facilisi eu sit interdum diam
            lacinia, tellus curabitur hendrerit inceptos aenean a. Nisl nec
            inceptos lacus cum nunc adipiscing commodo, in mus blandit fringilla
            convallis odio sagittis vel, urna augue ultricies fusce feugiat
            malesuada. Cras iaculis dui penatibus quam gravida aliquam, orci
            massa aptent congue mollis sagittis dignissim, integer semper
            vehicula auctor eu.
          </p>

          <div className="media-list">{mediaIcon}</div>

          <div className="data-panel">
            <div className="icon-wrapper">
              <SmileOutlined />
              <Progress percent={60} />
            </div>
            <div className="icon-wrapper">
              <FrownOutlined />
              <Progress percent={30} />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

class GlobeDiv extends React.Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <div className="globe-button">
          <Button
            type="primary"
            shape="circle"
            icon={<GlobalOutlined />}
            onClick={this.showModal}
          />
        </div>
        <Modal
          title="Select Country/Region"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        ><p>Should have a world map</p>
        </Modal>
      </div>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <EventDiv />
        <GlobeDiv />
      </div>
    );
  }
}
