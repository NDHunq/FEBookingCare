import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import "./ManageDoctor.scss";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import Select from "react-select";

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];
const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentMarkdown: "",
      contentHTML: "",
      selectedOption: "",
      description: "",
    };
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {}
  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentMarkdown: text,
      contentHTML: html,
    });
  };
  handleSaveContentMarkDown = () => {
    console.log("content", this.state);
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };
  handleEditorChangeDesc = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  render() {
    return (
      <div className="manage-doctor-container">
        <div className="manage-doctor-title">Tao them thong tin bac si</div>
        <div className="more-infor">
          <div className="content-left form-group">
            <label>Chon bac si</label>
            <Select
              options={options}
              onChange={this.handleChange}
              value={this.state.selectedOption}
            />
          </div>
          <div className="content-right">
            <label>Thong tin gioi thieu</label>
            <textarea
              className="form-control"
              rows="4"
              onChange={(event) => {
                this.handleEditorChangeDesc(event);
              }}
              value={this.state.description}>
              llllllllllllllll
            </textarea>
          </div>
        </div>
        <div className="manage-doctor-editor">
          <MdEditor
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}></MdEditor>
        </div>
        <button
          onClick={() => this.handleSaveContentMarkDown()}
          className="save-content-doctor">
          Luu thong tin
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
