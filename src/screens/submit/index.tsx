import React from "react";
import { Container, DatePicker } from "../../components";
import AdditonalEvent from "./additionalEvent";
import CreateEvent from "./createEvent";
import "./style.scss";

const Submit = (): JSX.Element => {
  return (
    <Container>
      <div className="submit-container">
        {/* <CreateEvent />
        <AdditonalEvent /> */}
        <DatePicker />
      </div>
    </Container>
  );
};
export default Submit;
