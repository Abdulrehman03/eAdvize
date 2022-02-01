import React from "react";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/styles";
import { useStyles } from "./JeProposeUneMissionTab";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { InputLabel } from "@mui/material";
import { TextareaAutosize } from '@mui/base';
import TabsJeProposeUne from "./TabsJeProposeUne";
import "./JeProposeUneMission.scss";

const JeProposeUneMissionTab = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      <Container>
        <div>
          <div className={classes.eAdvizeJeProposeUneMission_insideContent}>
            <div
              className={classes.eAdvizeJeProposeUneMission_insideContentFlex}
            >
              {/*  */}
              <Typography variant="h5" className={classes.title}>
                Je crée mon compte BeAdvize
              </Typography>
              <div className={classes.divider} style={{ width: "56px" }}></div>

              <div className={classes.textFieldGroup}>
                <InputLabel variant="standard" className={classes.labelText}>
                  Titre
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  placeholder="Lorem Ipsum"
                  variant="outlined"
                  className={classes.textField}
                />
              </div>
              <div className={classes.textFieldGroup}>
                <InputLabel variant="standard" className={classes.labelText}>
                  Enterprise
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  placeholder="Lorem Ipsum"
                  variant="outlined"
                  className={classes.textField}
                />
              </div>
              <div className={classes.textFieldGroup}>
                <InputLabel variant="standard" className={classes.labelText}>
                  Contact client
                </InputLabel>
                <TextField
                  id="outlined-basic"
                  placeholder="Lorem Ipsum"
                  variant="outlined"
                  type="email"
                  className={classes.textField}
                />
              </div>
              <div className={classes.textFieldGroup}>
                <Grid container spacing={7}>
                  <Grid item md={6} sm={12}>
                    <InputLabel
                      variant="standard"
                      className={classes.labelText}
                    >
                      Email
                    </InputLabel>
                    <TextField
                      id="outlined-basic"
                      placeholder="Lorem Ipsum"
                      variant="outlined" 
                      className={classes.textField}
                    />
                  </Grid>

                  <Grid item md={6} sm={12} justifyContent="center">
                    <InputLabel
                      variant="standard"
                      className={classes.labelText}
                    >
                      Télephone
                    </InputLabel>
                    <TextField
                      id="outlined-basic"
                      placeholder="Lorem Ipsum"
                      variant="outlined"
                      type="number"
                      className={classes.textField}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.textFieldGroup}>
                <InputLabel variant="standard" className={classes.labelText}>
                  Description
                </InputLabel> 
                <TextareaAutosize 
                aria-label="minimum height"
                minRows={6}
                placeholder="Lorem Ipsum"
                style={{ width: '100%' }}
                className={classes.textArea}
                />
              </div> 

              <Typography variant="body2" className={classes.subHead}>
              Sur quel mode de facturation je vais fonctionner?
              </Typography> 

              <TabsJeProposeUne />
            </div>
            {/*  */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default JeProposeUneMissionTab;
