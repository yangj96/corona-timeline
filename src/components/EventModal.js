import React from "react";
import "../App.css";
import { Modal, Progress, Tabs } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;

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
    };
  }

  componentWillReceiveProps(newProps, nextContext) {
    this.setState({
      visible: newProps.visible,
    });
    let get_url = "http://39.97.176.70:3306/search/" + newProps.id + "/news";
    fetch(get_url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        this.setState({
          title: response.title,
          desc: response.desc,
          type: response.type,
          id: response.id,
          country: response.country,
          time: response.time,
          media: response.media,
        });
      })
      .catch((error) => {
        console.log(error);
        let response = {
          title: "Title " + newProps.id,
          desc: "Description " + newProps.id,
          type: 0,
          id: newProps.id,
          country: "cn",
          time: 0,
          media: [
            {
              "media-name": "BBC",
              "media-id": 0,
              "news-title": "Title 1",
              url: "https://www.bbc.com/news/world-us-canada-53026389",
              newsAttitude: 0,
              newsAttiScore: 80,
            },
            {
              "media-name": "CGTN",
              "media-id": 1,
              "news-title": "Title 2",
              url:
                "https://news.cgtn.com/news/2020-06-13/Chinese-mainland-reports-11-new-COVID-19-cases-six-local-infections-RhwpVnijF6/index.html",
              newsAttitude: 2,
              newsAttiScore: 60,
            },
          ],
        };
        this.setState({
          title: response.title,
          desc: response.desc,
          type: response.type,
          id: response.id,
          country: response.country,
          time: response.time,
          media: response.media,
        });
      });
  }

  handleOk = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
      title: "",
      desc: "",
      type: 0,
      id: 0,
      country: 0,
      time: 0,
      media: [],
    });
  };

  handleCancel = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
      title: "",
      desc: "",
      type: 0,
      id: 0,
      country: 0,
      time: 0,
      media: [],
    });
  };

  render() {
    let mediaTabs = [];
    let atti = ["Neutral", "Left-Wing", "Right-Wing"];
    for (let i = 0; i < this.state.media.length; i++) {
      mediaTabs.push(
        <TabPane tab={this.state.media[i]["media-name"]} key={i}>
          <a
            href={this.state.media[i].url}
            target="_blank"
            rel="noopener noreferrer"
            key={this.state.media[i]["media-id"]}
          >
            <img
              className="media-icon"
              alt={this.state.media[i]["media-name"]}
              src={require("../assets/" +
                this.state.media[i]["media-id"] +
                ".jpg")}
            ></img>
            {this.state.media[i]["news-title"]}
          </a>
          <div className="data-panel">
            <div>Attitude: {atti[this.state.media[i]["newsAttitude"]]}</div>
            <div class="progress-wrapper">
              Score:&nbsp;
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={this.state.media[i]["newsAttiScore"]}
                format={(percent) => {
                  if (percent < 60) return <FrownOutlined />;
                  else if (percent < 70) return <MehOutlined />;
                  else return <SmileOutlined />;
                }}
              />
            </div>
          </div>
        </TabPane>
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
        <Tabs tabPosition="top">{mediaTabs}</Tabs>
      </Modal>
    );
  }
}
export default EventModal;
