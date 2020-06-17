import React from "react";
import { Timeline } from "antd";
import "../App.css";
import EventModal from "./EventModal";

class EventLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      visible: false,
      isFirst: false,
      isLast: false,
      count: 10,
      selectCountry: false,
      events: [
        {
          "time": "2020-02-01",
          "title": "xxxxxx",
          "disc": "yyyyy",
          "country": "",
          "type": 0,
          "id": 0
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "",
          "type": 0,
          "id": 1
        },
        {
          "time": "2020-02-03",
          "title": "bbbbbb",
          "disc": "cccccc",
          "country": "",
          "type": 0,
          "id": 2
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "",
          "type": 0,
          "id": 3
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "",
          "type": 0,
          "id": 4
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "",
          "type": 0,
          "id": 5
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "",
          "type": 0,
          "id": 6
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "",
          "type": 0,
          "id": 7
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "",
          "type": 0,
          "id": 8
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "",
          "type": 0,
          "id": 9
        }
      ]
    }
  }

  handleClick(id) {
    this.setState({id, visible: true});
  }

  render() {
    let timeList = (count) => {
      let res = [];
      if (!this.state.selectCountry) {
        for(let i = 0; i < count; i++) {
          res.push(
            <Timeline.Item
              label={this.state.events[i].time + " " + this.state.events[i].title}
              onClick={() => this.handleClick(this.state.events[i].id)}>
              {this.state.events[i].disc}
            </Timeline.Item>
          )
        }
      }
      return res;
    };

    return (
      <div className="events-list">
        <Timeline mode="left">
          {timeList(this.state.count)}
        </Timeline>
        <EventModal id={this.state.id} visible={this.state.visible}/>
      </div>
    );
  }
}

export default EventLine;
