import React, { useEffect } from "react";
import { Button, Input, SearchBox } from "../../../components";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Grid } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import "./style.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxpc2hhaGlkbmF3YXoiLCJhIjoiY2tpcm42ODN0Mjd2cTJ2cWo1Y3Fib3M3OCJ9.BVqyVXtghqXv6N-nDW2C9Q";

const AdditonalEvent = (): JSX.Element => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [12.2502, 64.3372],
      zoom: 1,
    });
    // map.addControl(new mapboxgl.FullscreenControl());
  }, []);
  return (
    <div className="event-info-container">
      <h2 className="text-center">Additional Event Info</h2>
      <Grid container>
        <Grid xs={2.5} />
        <Grid item xs={7.5}>
          <div className="description">
            You can purchase an Event Package from the Freeze Tag online store
            AFTER you create your event. All of this information may be edited
            once you've purchased the package.
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Input
            readOnly
            placeholder="Go Live Date (MHQ)"
            inputType="input"
            className="form-input"
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            readOnly
            placeholder="Go Live Time (MHQ)"
            inputType="input"
            className="form-input"
          />
        </Grid>
      </Grid>
      <div className="location-wrapper">
        <Grid container spacing={3} pt={3}>
          <Grid item xs={6}>
            <strong>Event Indicator Location</strong>
            <br />
            <br />
            <Button className="btn primary">Use My Location</Button>
            <br />
            <br />
            <p>or</p>
            <Grid display="flex" justifyContent="center">
              <SearchBox type="text" placeholder="Search" />
            </Grid>
            <br />
            <p>Coordinates</p>
            <Grid xs={5.5} display="flex" flexDirection="column" margin="0 auto">
              <Input
                placeholder="Latitude"
                inputType="input"
                className="form-input"
                mb={false}
              />
              <Input
                placeholder="Longitude"
                inputType="input"
                className="form-input"
              />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <div id="map" className="map"></div>;
          </Grid>
        </Grid>
      </div>
      <p>Co-Host Munzee Usernames</p>
      <p className="subtext">(you can also change or add these later)</p>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Input
            placeholder="Co-Host Username"
            inputType="input"
            className="form-input"
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            placeholder="Co-Host Username"
            inputType="input"
            className="form-input"
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            placeholder="Co-Host Username"
            inputType="input"
            className="form-input"
          />
        </Grid>
      </Grid>
      <div className="captcha-wrapper">
        <p>
          You <strong>MUST</strong> click the "I'm not a robot" button.
        </p>
        <Grid container>
          <Grid item xs={2.8} />
          <Grid item xs={6}>
            <ReCAPTCHA
              style={{ display: "flex", justifyContent: "center" }}
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              // onChange={onChange}
            />
          </Grid>
        </Grid>
      </div>
      <Grid textAlign="center">
        <Button className="btn lg success">CREATE MY EVENT!</Button>
      </Grid>
    </div>
  );
};

export default AdditonalEvent;
