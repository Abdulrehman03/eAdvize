import React, { useState } from "react";
import { Box } from "@mui/system";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Header from "../../Components/Header";
import FooterOne from "../../Components/candidatureFooter/Web1920-Footer/Footer1920-17";
import FooterTwo from "../../Components/candidatureFooter/Web1920-Footer/Footer1920_18";
import { useTheme } from "@emotion/react";
import { useStyle } from "./style";
import Step1 from "./Web1920_17";
import Step2 from "./Web190_18";
import Step3 from "./Web1920_30";
import Step4 from "./Web1920_26";
import Step5 from "./Web1920_27";
import Step6 from "./Web1920_29";
import Step7 from "./Web1920_25";
import stepOneImage from "../../Assests/step1.png";
import stepTwoImage from "../../Assests/step2.png";
import stepThreeImage from "../../Assests/step3.png";
import stepFourImage from "../../Assests/step4.png";

const index = () => {
  const theme = useTheme();
  const classes = useStyle(theme);
  const [step, setStep] = useState(-1);
  const steps = [
    "Appel à candidature",
    "Déliberation",
    "Projet affecté",
    "Projet Terminé",
  ];
  const stepChange = (value) => {
    setStep(value);
  };
  const renderComponent = (param) => {
    switch (param) {
      case -1:
        return <Step1 stepChange={stepChange} />;
      case 0:
        return <Step2 stepChange={stepChange} />;
      case 1:
        return <Step3 stepChange={stepChange} />;
      case 2:
        return <Step4 stepChange={stepChange} />;
      case 3:
        return <Step5 stepChange={stepChange} />;
      case 4:
        return <Step6 stepChange={stepChange} />;
      case 5:
        return <Step7 stepChange={stepChange} />;
    }
  };
  return (
    <>
      <Header />
      <div className={classes.root}>
        <Container>
          <br />
          <br />
          <Grid container justifyContent="center">
            <Grid md={6}>
              <Grid container justifyContent="space-around">
                <Grid md={3}>
                  <div
                    style={{ marginLeft: "42%" }}
                    onClick={() => stepChange(0)}
                  >
                    <img src={stepOneImage} />
                  </div>
                </Grid>
                <Grid md={3}>
                  <div style={{ marginLeft: "42%" }}>
                    <img src={stepTwoImage} />
                  </div>
                </Grid>
                <Grid md={3}>
                  <div style={{ marginLeft: "42%" }}>
                    <img src={stepThreeImage} />
                  </div>
                </Grid>
                <Grid md={3}>
                  <div style={{ marginLeft: "42%" }}>
                    <img src={stepFourImage} />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid md={6}>
              <Box sx={{ marginTop: "5px" }}>
                <Stepper activeStep={3} alternativeLabel>
                  <Stepper activeStep={step} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>
                          <div>{label}</div>
                        </StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Stepper>
              </Box>
            </Grid>
          </Grid>

          <br />
          {renderComponent(step)}
          <br />
          <br />
          <br />
        </Container>
      </div>
      {step === -1 && <FooterOne stepChange={stepChange} />}
      {step === 0 && <FooterTwo stepChange={stepChange} />}
    </>
  );
};
export default index;
