import * as React from "react";
import "./style.scss";
const Footer = (): JSX.Element => {
  return (
    <div className="footer-wrapper">
      <div className="panel">
        <ul id="regions" className="list-inline">
          <li className="region-all">
            <a href="/">All</a>
          </li>
          <li className="region-africa">
            <a href="/region/africa/">Africa</a>
          </li>
          <li className="region-asia">
            <a href="/region/asia/">Asia</a>
          </li>
          <li className="region-europe">
            <a href="/region/europe/">Europe</a>
          </li>
          <li className="region-north-america">
            <a href="/region/north-america/">North America</a>
          </li>
          <li className="region-oceania">
            <a href="/region/oceania/">Oceania</a>
          </li>
          <li className="region-south-america">
            <a href="/region/south-america/">South America</a>
          </li>
          <li className="region-global">
            <a href="/region/global/">Global</a>
          </li>
        </ul>
      </div>
      <hr />
        <div className="text-center footer-text">
          <a href="/help/">Help</a> | <a href="/pricing/">Pricing Sheet</a> |{" "}
          <a href="/submit/">Submit Your Event</a> | Powered by{" "}
          <a href="https://www.munzee.com/">Munzee</a>
        </div>
    </div>
  );
};

export default Footer;
