import React from "react";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./TermineTabSec.scss";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const boxWrapTwoData = [
  {
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    headingLink: "Total TTC",
    depart: "Départ",
    departTime: "20.12.21",
    countryName: "paris",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    headingLink: "Total TTC",
    depart: "Départ",
    departTime: "20.12.21",
    countryName: "paris",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    headingLink: "Total TTC",
    depart: "Départ",
    departTime: "20.12.21",
    countryName: "paris",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    headingLink: "Total TTC",
    depart: "Départ",
    departTime: "20.12.21",
    countryName: "paris",
  },
];

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const TermineTabSec = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <section>
        {/* box section 2 */}
        {boxWrapTwoData.map((item, index) => {
          return (
            <>
              <div className="TermineTabSec_sectionWrap">
                <Grid>
                  <Grid container>
                    <Grid item md={12} sm={12} className="gridLeft">
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="textLeft_box"
                      >
                        {item.description}
                      </Typography>
                      <div className="gridLeft_flexSectionInside">
                        <div>
                          <h3 className="headingLinkOne">{item.headingLink}</h3>
                          <p>{item.countryName}</p>
                        </div>
                        <div>
                          <h3 className="headingLink">{item.depart}</h3>
                          <p>{item.departTime}</p>
                        </div>
                        <div>
                          <div>
                            <Button
                              id="demo-customized-button"
                              aria-controls={
                                open ? "demo-customized-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={open ? "true" : undefined}
                              variant="contained"
                              disableElevation
                              onClick={handleClick}
                              endIcon={<KeyboardArrowDownIcon />}
                              className="btn_boxInside"
                            >
                              Fractures
                            </Button>
                            <StyledMenu
                              id="demo-customized-menu"
                              MenuListProps={{
                                "aria-labelledby": "demo-customized-button",
                              }}
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                            >
                              <MenuItem onClick={handleClose} disableRipple>
                                <EditIcon />
                                Edit
                              </MenuItem>
                              <MenuItem onClick={handleClose} disableRipple>
                                <FileCopyIcon />
                                Duplicate
                              </MenuItem>
                              <Divider sx={{ my: 0.5 }} />
                              <MenuItem onClick={handleClose} disableRipple>
                                <ArchiveIcon />
                                Archive
                              </MenuItem>
                              <MenuItem onClick={handleClose} disableRipple>
                                <MoreHorizIcon />
                                More
                              </MenuItem>
                            </StyledMenu>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default TermineTabSec;
