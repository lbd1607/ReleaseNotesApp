import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getNotes } from "../../actions/notes";

//Contains list of created release notes to be rendered on the page. Called in Dashboard.js

export class Notes extends Component {
  //Add PropTypes for notes proptypes
  static PropTypes = {
    notes: PropTypes.array.isRequired
  };

  //Call getNotes() action from props
  componentDidMount() {
    this.props.getNotes();
  }

  //Render list of release notes
  render() {
    return (
      <Fragment>
        <h2>Notes</h2>
        <table className="table table-striped">
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Note</th>
            <th>Created At</th>
          </tr>
        </table>
      </Fragment>
    );
  }
}

//Map state to props of this component for use with 'this.props...'.
const mapStateToProps = state => ({
  notes: state.notes.notes
});

export default connect(mapStateToProps, { getNotes })(Notes);
