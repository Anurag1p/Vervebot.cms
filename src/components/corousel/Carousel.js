import React from "react";
import "./carousel.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ICMS from "../../assets/images/icms.png";
import { CalendarFilled, LeftOutlined, RightOutlined } from '@ant-design/icons'
import CMS from "../../assets/images/cms.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



const tutorialSteps = [
  {
    title: "How Companies are Saving Money & resources by using Our ICMS Solution",
    imgPath:ICMS,
    date: "March 29, 2022",
    calender: <CalendarFilled />,
    tech: "ICMS"
  },
  {
    title: "How Our Company Tools Help Business to Manage Employee's Project ",
    imgPath:CMS,
    date: "March 29, 2022",
    calender: <CalendarFilled />,
    tech: "Company Tools"
  },
];



const useStyles = makeStyles((theme) => ({
  root: {
     maxWidth: "100%",
     flexGrow: 1,
     borderRadius:'10px',
     overflow:"hidden",
     marginTop:"10px",
     transformScale:"1.1",
     backgroundColor:'#ffffff'
     
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    borderTopLeftRadius:"10px",
    backgroundColor: theme.palette.background.default
  },
  img: {
    borderTopLeftRadius:"10px",
    borderTopRightRadius:"10px",
    height: 400,
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%"
  }
}));

const Button = {
  padding: "2px 0 8px 8px",
  border:"none",
  background:"transparent"
  
};

function Carousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <div className="feature-container">
      <span className="featureline"></span>
        <h2 className='feature-heading'>Blogs</h2>
        <div className='feature-arrows'>
          <button
            size="small"
            onClick={handleBack}
            style={ Button}
            disabled={activeStep === 0}

          >
            {theme.direction === "rtl" ? (
              <RightOutlined className="back-arrow" />
            ) : (
              <LeftOutlined className="back-arrow" />
            )}
          </button>

          <button
            style={Button}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >

            {theme.direction === "rtl" ? (
              <LeftOutlined className="back-arrow" />
            ) : (
              <RightOutlined className="back-arrow" />


            )}
          </button>

        </div>
      </div>
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

       
            <div className="row p-5">
              <div className=" col-12 carousel-sub-category-content-main2 ">
                <div className=" d-flex">
                  <div><button className="carousel-card-btn">{tutorialSteps[activeStep].tech}</button></div>
                </div>
                <div className="pt-3">
                  <p className="carousel-title"><b>{tutorialSteps[activeStep].title}</b></p>
                </div>
              </div>
            </div>
      </div>
    </>
  );
}

export default Carousel;