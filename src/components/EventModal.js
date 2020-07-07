import React from "react";
import "../App.css";
import { Modal, Progress, Tabs, Spin, Alert } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;

class EventModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      spin: true,
      title: "",
      disc: "",
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

    fetch(`/test_timeline/event?id=${newProps.id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        this.setState({
          spin: false,
          title: response.title,
          disc: response.disc,
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
          country: "China",
          disc: "Researchers at ...",
          time: "2020-6-27",
          id: 1,
          title: "Spain discovers coronavirus in waste water...",
          type: 5,
          media: [
            {
              media_id: 1,
              news_title: "Title 1",
              url: "https://www.bbc.com/news/world-us-canada-53026389",
              newsAttitude: 0,
              newsAttiScore: 0.4,
            },
            {
              media_id: 2,
              news_title: "Title 2",
              url: "https://www.bbc.com/news/world-us-canada-53026389",
              newsAttitude: 0,
              newsAttiScore: 0.5,
            },
            {
              media_id: 3,
              news_title: "Title 3",
              url: "https://www.bbc.com/news/world-us-canada-53026389",
              newsAttitude: 0,
              newsAttiScore: 0.6,
            },
            {
              media_id: 4,
              news_title: "Title 4",
              url: "https://www.bbc.com/news/world-us-canada-53026389",
              newsAttitude: 0,
              newsAttiScore: 0.7,
            },
            {
              media_id: 5,
              news_title: "Title 5",
              url:
                "https://news.cgtn.com/news/2020-06-13/Chinese-mainland-reports-11-new-COVID-19-cases-six-local-infections-RhwpVnijF6/index.html",
              newsAttitude: 2,
              newsAttiScore: 0.8,
            },
            {
              media_id: 6,
              news_title: "Title 6",
              url: "https://www.bbc.com/news/world-us-canada-53026389",
              newsAttitude: 0,
              newsAttiScore: 0.9,
            },
            {
              media_id: 7,
              news_title: "Title 7",
              url: "https://www.bbc.com/news/world-us-canada-53026389",
              newsAttitude: 0,
              newsAttiScore: 1,
            },
          ],
        };
        this.setState({
          spin: false,
          title: response.title,
          disc: response.disc,
          type: response.type,
          id: response.id,
          country: response.country,
          time: response.time,
          media: response.media,
        });
      });
  }

  closeModal = (e) => {
    this.setState({
      visible: false,
      spin: true,
      title: "",
      disc: "",
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
    let media_name = {
      1: "CNN",
      2: "Fox News",
      3: "BBC",
      4: "US News",
      5: "CGTN",
      6: "The Times",
      7: "Xinhua",
    };
    for (let i = 0; i < this.state.media.length; i++) {
      let media_id = this.state.media[i]["media_id"];
      mediaTabs.push(
        <TabPane tab={media_name[media_id]} key={i}>
          <a
            href={this.state.media[i].url}
            target="_blank"
            rel="noopener noreferrer"
            key={media_id}
          >
            <img
              className="media-icon"
              alt={media_name[media_id]}
              src={require(`../assets/${media_id}.jpg`)}
            ></img>
            {this.state.media[i]["news_title"]}
          </a>
          <div className="data-panel">
            <div>Attitude: {atti[this.state.media[i]["newsAttitude"]]}</div>
            <div className="progress-wrapper">
              Score:&nbsp;
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={100 * this.state.media[i]["newsAttiScore"]}
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
        title={this.state.time}
        visible={this.state.visible}
        onOk={this.closeModal}
        onCancel={this.closeModal}
        closable={false}
      >
        <Spin tip="Loading..." spinning={this.state.spin}>
          <Alert
            message={this.state.title}
            description={this.state.disc}
            type="info"
          />
          <Tabs tabPosition="top">{mediaTabs}</Tabs>
        </Spin>
      </Modal>
    );
  }
}
export default EventModal;
