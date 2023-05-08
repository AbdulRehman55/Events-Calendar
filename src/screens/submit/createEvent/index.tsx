import React from "react";
import "./style.scss";
import { DropDown, Input } from "../../../components";
import { Grid } from "@mui/material";

const CreateEvent = (): JSX.Element => {
  return (
    <div className="create-event-container">
      <h1 className="text-center">Create an Event</h1>
      <Grid container>
        <Grid xs={2.5} />
        <Grid item xs={7.5}>
          <div className="description">
            Are you ready to create and host your very own Munzee Event?! Just
            fill out the information below and submit your event. This will make
            your event LIVE on the calendar, and then people can RSVP.
            <br />
            <br />
            <b>All fields are required.</b> If you're not sure of your event
            details like time or location, just enter "TBD" in those sections
            and you can update it later!
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Input
            inputType="input"
            placeholder="Your Name"
            className="form-input"
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            inputType="input"
            placeholder="Munzee Username"
            className="form-input"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Input
          inputType="input"
          placeholder="Your Email Address"
          className="form-input"
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          inputType="input"
          placeholder="Event Name"
          className="form-input"
        />
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Input
            placeholder="Event Date (local date)"
            className="form-input"
            readOnly
            inputType="input"
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            placeholder="Event Time (local time)"
            className="form-input"
            readOnly
            inputType="input"
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Input
            inputType="input"
            placeholder="Event Location"
            className="form-input"
          />
        </Grid>
        <Grid item xs={3}>
          <Input
            inputType="input"
            placeholder="Street Address"
            className="form-input"
          />
        </Grid>
        <Grid item xs={3}>
          <Input inputType="input" placeholder="City" className="form-input" />
        </Grid>
        <Grid item xs={3}>
          <Input
            inputType="input"
            placeholder="Country/State"
            className="form-input"
          />
        </Grid>
      </Grid>
      <Grid xs={12}>
        <DropDown
          placeholder="Select Event Region"
          options={[
            { label: "Africa", value: "Africa" },
            { label: "Asia", value: "Asia" },
            { label: "Europe", value: "Europe" },
            { label: "North America", value: "North America" },
            { label: "Oceania", value: "Oceania" },
            { label: "South America", value: "South America" },
          ]}
        />
      </Grid>
      <Grid xs={12}>
        <Input
          placeholder="Please include all necessary details for the event.Is there a web address for more information? Do attendees need to bring anything?"
          className="form-input"
          inputType="textArea"
        />
      </Grid>
    </div>
  );
};

export default CreateEvent;
