import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Class for exporting alerts to App.js for rending in the UI
export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };
  //When component updates, this alert will run
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.title) alert.error(`Title: ${error.msg.title.join()}`);
      if (error.msg.author) alert.error(`Author: ${error.msg.author.join()}`);
      if (error.msg.note_body)
        alert.error(`Note: ${error.msg.note_body.join()}`);
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
    }

    if (message !== prevProps.message) {
      if (message.noteDeleted) alert.success(message.noteDeleted);
      if (message.noteAdded) alert.success(message.noteAdded);
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
