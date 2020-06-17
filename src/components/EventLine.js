import React from "react";
import { Timeline } from "antd";
import "../App.css";
import EventModal from "./EventModal";
import GlobeDiv from "./GlobeDiv";

const typeColorDict = {
  0: "green",
  1: "blue",
  2: "orange",
  3: "purple"
};

class EventLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      visible: false,
      isFirst: false,
      isLast: false,
      count: 15,
      selectCountry: "",
      events: [
        {
          "time": "2020-02-01",
          "title": "xxxxxx",
          "disc": "yyyyy",
          "country": "CANADA",
          "type": 0,
          "id": 0
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "CANADA",
          "type": 1,
          "id": 1
        },
        {
          "time": "2020-02-03",
          "title": "bbbbbb",
          "disc": "cccccc",
          "country": "CANADA",
          "type": 0,
          "id": 2
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "CHINA",
          "type": 2,
          "id": 3
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "CHINA",
          "type": 3,
          "id": 4
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "CHINA",
          "type": 2,
          "id": 5
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "CHINA",
          "type": 0,
          "id": 6
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "CHINA",
          "type": 1,
          "id": 7
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "Russia",
          "type": 0,
          "id": 8
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "Russia",
          "type": 0,
          "id": 9
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "Russia",
          "type": 0,
          "id": 9
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "Russia",
          "type": 0,
          "id": 9
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "Russia",
          "type": 0,
          "id": 9
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "Russia",
          "type": 0,
          "id": 9
        },
        {
          "time": "2020-02-06",
          "title": "zzzzz",
          "disc": "aaaaaa",
          "country": "Russia",
          "type": 0,
          "id": 9
        },
      ]
    }
  }

  handleClick(id) {
    this.setState({id, visible: true});
  }

  countrySelected = (result, msg) => {
    console.log(msg);
    this.setState({
      selectCountry: msg
    });
  };

  render() {
    let timeList = (count) => {
      let res = [];
      if (this.state.selectCountry === "") {
        for(let i = 0; i < count; i++) {
          res.push(
            <Timeline.Item
              label={this.state.events[i].time + " " + this.state.events[i].title}
              color={typeColorDict[this.state.events[i].type]}
              onClick={() => this.handleClick(this.state.events[i].id)}>
              {this.state.events[i].disc}
            </Timeline.Item>
          )
        }
      } else {
        for(let i = 0; i < count; i++) {
          if (this.state.events[i].country.toLowerCase()  === this.state.selectCountry.toLowerCase()) {
            res.push(
              <Timeline.Item
                label={this.state.events[i].time + " " + this.state.events[i].title}
                onClick={() => this.handleClick(this.state.events[i].id)}>
                {this.state.events[i].disc}
              </Timeline.Item>
            )
          }
        }
      }
      if (res.length)
        return res;
      else
        return <p align="center">There is no news related to COVID-19 in this country!</p>
    };

    return (
      <div className="events-list">
        <Timeline mode="left">
          {timeList(this.state.count)}
        </Timeline>
        <EventModal id={this.state.id} visible={this.state.visible}/>
        <GlobeDiv parent={this}/>
      </div>
    );
  }
}

export default EventLine;
