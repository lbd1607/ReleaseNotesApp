import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getNotes, deleteNotes } from "../../actions/notes";

//Contains list of created release notes to be rendered on the page. Called in Dashboard.js

export class Notes extends Component {
  //Add propTypes for notes proptypes
  static propTypes = {
    notes: PropTypes.array.isRequired,
    getNotes: PropTypes.func.isRequired,
    deleteNotes: PropTypes.func.isRequired
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
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Note</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {/* Pull in data from state mapped to props */}
            {this.props.notes.map(note => (
              <tr key={note.title}>
                <td>{note.title}</td>
                <td>{note.author}</td>
                <td>{note.note_body}</td>
                <td>{note.created_at}</td>
                <td>
                  <button
                    onClick={this.props.deleteNotes.bind(this, note.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

//Map state to props of this component for use with 'this.props...'.
const mapStateToProps = state => ({
  notes: state.notes.notes
});

export default connect(mapStateToProps, { getNotes, deleteNotes })(Notes);
