import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addNotes } from "../../actions/notes";

//Contains the form for adding release notes. Called in Dashboard.js

export class Forms extends Component {
  state = {
    title: "",
    author: "",
    note_body: ""
  };

  static propTypes = {
    addNotes: PropTypes.func.isRequired
  };

  //onChange and onSubmit functionality
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { title, author, note_body } = this.state;
    const note = { title, author, note_body };
    this.props.addNotes(note);
    this.setState({
      title: "",
      author: "",
      note_body: ""
    });
  };

  //Form and fields
  render() {
    const { title, author, note_body } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add a Release Note</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input
              className="form-control"
              type="text"
              name="author"
              onChange={this.onChange}
              value={author}
            />
          </div>
          <div className="form-group">
            <label>Note</label>
            <input
              className="form-control"
              type="text"
              name="note_body"
              onChange={this.onChange}
              value={note_body}
              //required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addNotes })(Forms);
