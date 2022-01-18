import * as React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { useTheme } from "@mui/styles";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { useStyles } from "./modelstyle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const handleClose = () => {
    props.setModel(false);
  };

  return (
    <div>
      <Dialog
        fullWidth={true}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        maxWidth="sm"
        open={props.openModel}
      >
        <br />
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <DialogContent style={{ textAlign: "center" }}>
          <Typography variant="h5" className={classes.title}>
            Connexion à mon compte BeAdvize
          </Typography>
          <div className={classes.divider} style={{ width: "56px" }}></div>
          <Typography variant="body2" className={classes.subHead}>
            Pas encore membre BeAdvize ? Inscrivez-vous.
          </Typography>
          <div className={classes.btngroup}>
            <div style={{ marginRight: "0.5rem" }}>
              <Button
                variant="contained"
                className={classes.google}
                startIcon={<GoogleIcon />}
              >
                Connexion avec Google
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                className={classes.Linkedin}
                startIcon={<LinkedInIcon />}
              >
                Connexion avec Linkedin
              </Button>
            </div>
          </div>
          <div>
            <TextField
              id="outlined-basic"
              placeholder="E-mail professionnel"
              variant="outlined"
              className={classes.emailField}
            />
          </div>
          <br />
          <div>
            <TextField
              id="outlined-basic"
              placeholder="Mot de passe"
              variant="outlined"
              className={classes.password}
            />
          </div>
          <br />
          <Button variant="contained" className={classes.button}>
            Connexion
          </Button>
          <br />
          <div className={classes.displayFlex}>
            <div>J’ai perdu mon mot de passe.</div>
            <div>consultant</div>
            <div>client</div>
            <div>ESN</div>
          </div>
          <br />
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

CustomizedDialogs.prototype = {
  openModel: PropTypes.bool,
  setModel: PropTypes.func,
};
