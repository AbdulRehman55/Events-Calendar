import * as React from "react";
import { Box, Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { mockData } from "./mockData";
import "./styles.scss";
import { Button, Calendar } from "../../components";
import { useNavigate } from "react-router-dom";

interface iProps {
  title: string;
  date: string;
  location: string;
  img: string;
}
const HomePage = (): JSX.Element => {
  const navigate = useNavigate();
  const getCarouselItems = () => {
    return mockData.map((item: iProps) => {
      return (
        <SliderItem
          title={item.title}
          date={item.date}
          location={item.location}
          img={item.img}
        />
      );
    });
  };

  return (
    <>
      <Box id="homepage-slider">
        <Carousel
          autoPlay={true}
          stopAutoPlayOnHover={true}
          animation={"slide"}
          navButtonsAlwaysVisible={true}
        >
          {getCarouselItems()}
        </Carousel>
      </Box>
      <Calendar />
      <Grid textAlign="center" mb={3}>
        <Button className="btn md success" onClick={() => navigate("/submit")}>
          Submit Your Event
        </Button>
      </Grid>
    </>
  );
};

const SliderItem = ({ title, date, location, img }: iProps) => {
  return (
    <Box className="slider-item">
      <Box>
        <span className="title">{title}</span>
        <span className="date">{date}</span>
        <span className="location">{location}</span>
        <a href="#">Check out the Event!</a>
      </Box>
      <img src={img} />
    </Box>
  );
};

export default HomePage;
