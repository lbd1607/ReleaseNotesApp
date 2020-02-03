import React, { Fragment } from "react";
import Form from "./Forms";
import Notes from "./Notes";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Notes />
    </Fragment>
  );
}
