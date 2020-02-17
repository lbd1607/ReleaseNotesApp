import React, { Fragment } from "react";
import Form from "./Forms";
import Notes from "./Notes";

//Creates a dashboard containing the note form from Form.js and the list of created notes from Notes.js

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Notes />
    </Fragment>
  );
}
