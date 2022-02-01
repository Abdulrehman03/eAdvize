import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Slider from "@mui/material/Slider";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { styled, alpha, useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useStyles } from "./listStyle";
import ListItem from "@mui/material/ListItem";
import Switch from "@mui/material/Switch";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  "& .MuiListItemButton-root:hover": {
    backgroundColor: "white !important",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid gray",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
}));
export default function NestedList() {
  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);
  const [open4, setOpen4] = React.useState(true);
  const [open5, setOpen5] = React.useState(true);
  const [open6, setOpen6] = React.useState(true);
  const [open7, setOpen7] = React.useState(true);
  const [checked, setChecked] = React.useState(["wifi"]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const theme = useTheme();
  const classes = useStyles(theme);

  const handleClick = () => {
    setOpen(!open);
  };
  const marks = [
    {
      value: 9,
      label: "120 € et -",
    },

    {
      value: 95,
      label: "550 €",
    },
  ];
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.list}
    >
      <ListItemButton>
        <ListItemText>
          <p style={{ margin: "0px", fontSize: "22px", fontWeight: "400" }}>
            Filtres
            <hr />
          </p>
        </ListItemText>
      </ListItemButton>

      <ListItemButton onClick={handleClick}>
        <ListItemText>
          <p className={classes.listTitle}>Tarif journalier</p>
        </ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton style={{ width: "100%" }}>
            <div
              style={{
                fontSize: "16px",
                margin: "0px",
                flexGrow: "1",
              }}
            >
              <p style={{ fontWeight: "bold", margin: "0px" }}>
                {" "}
                Maximum : 550 €/j
              </p>
              <br />
              <Slider
                aria-label="Custom marks"
                defaultValue={0}
                getAriaValueText={valuetext}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
              />
              <br />
              <hr />
              <br />
              <span className={classes.listTitle}>Lieu</span>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <br />
              <hr />
            </div>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => setOpen2(!open2)}>
        <ListItemText>
          <p className={classes.listTitle}>Niveau d’expérience</p>
        </ListItemText>
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText id="switch-list-label-wifi" />
            <div>
              <div>
                <Switch
                  edge="start"
                  onChange={handleToggle("wifi")}
                  checked={checked.indexOf("wifi") !== -1}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-wifi",
                  }}
                />
                <span className={classes.listItem2}>Junior : 0 à 2 ans</span>
              </div>
              <div>
                <Switch
                  edge="start"
                  onChange={handleToggle("wifi")}
                  checked={checked.indexOf("wifi") !== -1}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-wifi",
                  }}
                />
                <span className={classes.listItem2}>Senior : 3 à 5 ans</span>
              </div>
              <div>
                <Switch
                  edge="start"
                  onChange={handleToggle("wifi")}
                  checked={checked.indexOf("wifi") !== -1}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-wifi",
                  }}
                />
                <span className={classes.listItem2}>Senior : + de 5 ans</span>
              </div>
            </div>
          </ListItem>
        </List>
      </Collapse>

      <ListItemButton onClick={() => setOpen3(!open3)}>
        <ListItemText>
          <p className={classes.listTitle}>Catégorie</p>
        </ListItemText>
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <hr className={classes.nestedHr} />
        </List>
      </Collapse>

      <ListItemButton onClick={() => setOpen4(!open4)}>
        <ListItemText>
          <p className={classes.listTitle}>Spécialité</p>
        </ListItemText>
        {open4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <hr className={classes.nestedHr} />
        </List>
      </Collapse>

      <ListItemButton onClick={() => setOpen5(!open5)}>
        <ListItemText>
          <p className={classes.listTitle}>Secteur d’activité</p>
        </ListItemText>
        {open5 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open5} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText id="switch-list-label-wifi" />
            <div>
              <div>
                <Switch
                  edge="start"
                  onChange={handleToggle("wifi")}
                  checked={checked.indexOf("wifi") !== -1}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-wifi",
                  }}
                />
                <span className={classes.listItem}>Agence & SSII</span>
              </div>
              <div>
                <Switch
                  edge="start"
                  onChange={handleToggle("wifi")}
                  checked={checked.indexOf("wifi") !== -1}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-wifi",
                  }}
                />
                <span className={classes.listItem}>Edition de Logiciel</span>
              </div>
              <div>
                <Switch
                  edge="start"
                  onChange={handleToggle("wifi")}
                  checked={checked.indexOf("wifi") !== -1}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-wifi",
                  }}
                />
                <span className={classes.listItem}>Banque & Assurances</span>
              </div>
              <div>
                <Switch
                  edge="start"
                  onChange={handleToggle("wifi")}
                  checked={checked.indexOf("wifi") !== -1}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-wifi",
                  }}
                />
                <span className={classes.listItem}>Automobile</span>
              </div>
              <div>
                <Switch
                  edge="start"
                  onChange={handleToggle("wifi")}
                  checked={checked.indexOf("wifi") !== -1}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-wifi",
                  }}
                />
                <span className={classes.listItem}>BTP & Construction</span>
              </div>
              <div>
                <Switch
                  edge="start"
                  onChange={handleToggle("wifi")}
                  checked={checked.indexOf("wifi") !== -1}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-wifi",
                  }}
                />
                <span className={classes.listItem}>Biotechnologies</span>
              </div>
              <div>
                <Switch
                  edge="start"
                  onChange={handleToggle("wifi")}
                  checked={checked.indexOf("wifi") !== -1}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-wifi",
                  }}
                />
                <span className={classes.listItem}>Conseil & Audit</span>
              </div>
              <div>
                <Switch
                  edge="start"
                  onChange={handleToggle("wifi")}
                  checked={checked.indexOf("wifi") !== -1}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-wifi",
                  }}
                />
                <span className={classes.listItem}>E-Commerce</span>
              </div>
              <div>
                <Switch
                  edge="start"
                  onChange={handleToggle("wifi")}
                  checked={checked.indexOf("wifi") !== -1}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-wifi",
                  }}
                />
                <span className={classes.listItem}>Immobilier</span>
              </div>
              <div>
                <Switch
                  edge="start"
                  onChange={handleToggle("wifi")}
                  checked={checked.indexOf("wifi") !== -1}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-wifi",
                  }}
                />
                <span className={classes.listItem}>Jeux vidéo & Animation</span>
              </div>
              <div>
                <Switch
                  edge="start"
                  onChange={handleToggle("wifi")}
                  checked={checked.indexOf("wifi") !== -1}
                  inputProps={{
                    "aria-labelledby": "switch-list-label-wifi",
                  }}
                />
                <span className={classes.listItem}>Luxe</span>
              </div>
            </div>
          </ListItem>
        </List>
      </Collapse>

      <ListItemButton onClick={() => setOpen6(!open6)}>
        <ListItemText>
          <p className={classes.listTitle}>Télétravail</p>
        </ListItemText>
        {open6 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open6} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <hr className={classes.nestedHr} />
        </List>
      </Collapse>

      <ListItemButton onClick={() => setOpen7(!open7)}>
        <ListItemText>
          <p className={classes.listTitle}>Disponibilité</p>
        </ListItemText>
        {open7 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open7} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <hr className={classes.nestedHr} />
        </List>
      </Collapse>
    </List>
  );
}
