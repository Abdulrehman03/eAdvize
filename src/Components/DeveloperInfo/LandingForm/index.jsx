import React from "react";
import { useTheme, styled } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useStyles } from "./formStyle";
import List from "./List";
import Tabs from "./Tabs";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
const LandingFormDeveloper = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    // <Container>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Item className={classes.leftDiv}>
            <List />
          </Item>
        </Grid>
        <Grid item md={9}>
          <Item className={classes.rightDiv}> 
            <br />
            <Tabs />
          </Item>
        </Grid>
      </Grid>
    </Box>
    // </Container>
  );
};
export default LandingFormDeveloper;
