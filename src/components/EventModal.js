import React from "react";
import "../App.css";
import { Modal, Progress, Tabs, Spin, Alert, Typography, Badge } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
const { Title, Paragraph, Text } = Typography;
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
        let media = response.media;
        let mediaArr = [];
        for (let i = 0; i < media.length; i++) {
          let cur_id = media[i]["media_id"];
          const mediaObj = {
            id: cur_id,
            news: [
              {
                url: media[i].url,
                title: media[i].title,
                attitude: media[i].attitude,
                score: Math.round(100 * media[i].score),
              },
            ],
            attitude: media[i].attitude,
            score: Math.round(100 * media[i].score),
          };
          while (i + 1 < media.length && media[i + 1]["media_id"] === cur_id) {
            i = i + 1;
            let newsObj = {
              url: media[i].url,
              title: media[i].title,
              attitude: media[i].attitude,
              score: Math.round(100 * media[i].score),
            };
            mediaObj.news.push(newsObj);
            mediaObj.attitude += newsObj.attitude;
            mediaObj.score += newsObj.score;
          }
          mediaObj.attitude = Math.round(
            mediaObj.attitude / mediaObj.news.length
          );
          mediaObj.score = Math.round(mediaObj.score / mediaObj.news.length);
          mediaArr.push(mediaObj);
        }

        console.log(mediaArr);

        this.setState({
          spin: false,
          title: response.title,
          disc: response.disc,
          type: response.type,
          id: response.id,
          country: response.country,
          time: response.time,
          media: mediaArr,
        });
      })
      .catch((error) => {
        console.log(error);
        // let response = {
        //   country: "China",
        //   disc: "Researchers at ...",
        //   time: "2020-6-27",
        //   id: 1,
        //   title: "Spain discovers coronavirus in waste water...",
        //   type: 5,
        //   media: [
        //     {
        //       media_id: 1,
        //       title: "Title 1",
        //       url: "https://www.bbc.com/news/world-us-canada-53026389",
        //       attitude: 0,
        //       score: 0.4,
        //     },
        //     {
        //       media_id: 2,
        //       title: "Title 2",
        //       url: "https://www.bbc.com/news/world-us-canada-53026389",
        //       attitude: 0,
        //       score: 0.5,
        //     },
        //     {
        //       media_id: 3,
        //       title: "Title 3",
        //       url: "https://www.bbc.com/news/world-us-canada-53026389",
        //       attitude: 0,
        //       score: 0.6,
        //     },
        //     {
        //       media_id: 4,
        //       title: "Title 4",
        //       url: "https://www.bbc.com/news/world-us-canada-53026389",
        //       attitude: 0,
        //       score: 0.7,
        //     },
        //     {
        //       media_id: 5,
        //       title: "Title 5",
        //       url:
        //         "https://news.cgtn.com/news/2020-06-13/Chinese-mainland-reports-11-new-COVID-19-cases-six-local-infections-RhwpVnijF6/index.html",
        //       attitude: 2,
        //       score: 0.8,
        //     },
        //     {
        //       media_id: 6,
        //       title: "Title 6",
        //       url: "https://www.bbc.com/news/world-us-canada-53026389",
        //       attitude: 0,
        //       score: 0.9,
        //     },
        //     {
        //       media_id: 7,
        //       title: "Title 7",
        //       url: "https://www.bbc.com/news/world-us-canada-53026389",
        //       attitude: 0,
        //       score: 1,
        //     },
        //   ],
        // };
        // this.setState({
        //   spin: false,
        //   title: response.title,
        //   disc: response.disc,
        //   type: response.type,
        //   id: response.id,
        //   country: response.country,
        //   time: response.time,
        //   media: response.media,
        // });
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
      let medium = this.state.media[i];
      let media_id = medium.id;
      let newsList = [];
      for (let j = 0; j < medium.news.length; j++) {
        newsList.push(
          <li key={j} className="news-li">
            <a
              href={medium.news[j].url}
              target="_blank"
              rel="noopener noreferrer"
              key={j}
              className="no-overflow"
            >
              {medium.news[j].title}
            </a>
            <Badge
              style={{
                backgroundColor:
                  medium.news[j].score > 60 ? "#52c41a" : "#108ee9",
              }}
              count={medium.news[j].score}
            ></Badge>
          </li>
        );
      }
      mediaTabs.push(
        <TabPane tab={media_name[media_id]} key={i}>
          <Paragraph>
            <ul>{newsList}</ul>
          </Paragraph>
          <div className="data-panel">
            <div>Attitude: {atti[this.state.media[i]["attitude"]]}</div>
            <div className="progress-panel">
              <div>Overall Score:&nbsp;</div>
              <div className="progress-wrapper">
                <Progress
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  percent={this.state.media[i]["score"]}
                  format={(percent) => {
                    if (percent < 60)
                      return (
                        <div className="progress-info">
                          <div>{percent}</div>
                          <FrownOutlined />
                        </div>
                      );
                    else if (percent < 70)
                      return (
                        <div className="progress-info">
                          <div>{percent}</div>
                          <MehOutlined />
                        </div>
                      );
                    else
                      return (
                        <div className="progress-info">
                          <div>{percent}</div>
                          <SmileOutlined />
                        </div>
                      );
                  }}
                />
              </div>
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
