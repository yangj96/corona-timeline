import React from "react";
import "../App.css";
import { Modal, Progress } from "antd";
import {
  FrownOutlined,
  SmileOutlined,
} from "@ant-design/icons";

class EventModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      title: "",
      desc: "",
      type: 0,
      id: props.id,
      country: 0,
      time: 0,
      media: [],
    }
  }

  componentWillReceiveProps(newProps, nextContext) {
    console.log(newProps.id);
    // 根据id进行请求，获取弹窗内容
    let response = {
      // fake response
      title: "Title " + newProps.id,
      desc: "Description " + newProps.id,
      type: 0,
      id: newProps.id,
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
      visible: newProps.visible,
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

  render() {
    //报道该事件的媒体图标
    let mediaIcon = [];
    for (let i = 0; i < this.state.media.length; i++) {
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
            src={require("../assets/" +
              this.state.media[i]["media-id"] +
              ".jpg")}
          ></img>
        </a>
      );
    }

    return (
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
    );
  }
}
export default EventModal;
