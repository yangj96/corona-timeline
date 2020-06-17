import React from "react";
import { Modal,  Button } from "antd";
import "../App.css";
import {
  GlobalOutlined,
} from "@ant-design/icons";

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

export default GlobeDiv;
