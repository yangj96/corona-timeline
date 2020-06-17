import React from "react";
import { Modal,  Button } from "antd";
import "../App.css";
import {
  GlobalOutlined,
} from "@ant-design/icons";
import CoronaMap from "./CoronaMap";
import BubbleMap from "./BubbleMap";

class GlobeDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      country: ""
    }
  }

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

  getChildrenMsg = (result, msg) => {
    console.log(msg);
    // result是子组件那bind的第一个参数this
    this.setState({
      country: msg,
      visible: false
    });
    this.props.parent.countrySelected(this, this.state.country);
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
          width="1024px"
          style = {{}}
          title="Select Country/Region"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <BubbleMap parent={this}/>
        </Modal>
      </div>
    );
  }
}

export default GlobeDiv;
