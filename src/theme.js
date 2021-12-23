import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#27F5BA",
    },
    secondary: {
      main: green[500],
    },
    background: {
      footer: "#000",
    },
  },
});

export default theme;
