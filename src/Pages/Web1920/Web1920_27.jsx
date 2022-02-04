import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { useStyle } from "./style";
import { Box } from "@mui/system";
import { Typography, Grid, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";

function createData(name, calories, fat, carbs, protein, edit) {
  return { name, calories, fat, carbs, protein, edit };
}

const rows = [
  createData(
    "10.12.20",
    "Lorem ipsum dolor sit amet, consetetur",
    "37,500",
    "9500,00 €",
    "15.01.21",
    "FA-32-L"
  ),
  createData(
    "10.12.20",
    "Lorem ipsum dolor sit amet, consetetur",
    "43,500",
    "450,00 €",
    "15.01.21",
    "FA-32-L"
  ),
  createData(
    "10.12.20",
    "Lorem ipsum dolor sit amet, consetetur",
    "77,500",
    "9500,00 €",
    "En attente",
    "FA-32-L"
  ),
];

const Web1920_27 = ({ stepChange }) => {
  const theme = useTheme();
  const classes = useStyle(theme);
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <div>
        <br />
        <Box width="75%" p="4" className={classes.container}>
          <div className={classes.innerContainer}>
            <div>
              <p className={classes.title}>Facturation</p>
              <div className={classes.divider}></div>
            </div>
            <Grid container>
              <Grid md={4}>
                <div className={classes.quesContain}>
                  <p className={classes.subtitle} style={{ color: "#04C38F" }}>
                    Total Facture
                  </p>
                  <p className={classes.description}>450,00 €</p>
                </div>{" "}
              </Grid>
              <Grid md={4}>
                {" "}
                <div className={classes.quesContain}>
                  <p className={classes.subtitle} style={{ color: "#04C38F" }}>
                    En attente de paiement
                  </p>
                  <p className={classes.description}>Semaine prochaine</p>
                </div>{" "}
              </Grid>

              <Grid md={4}>
                {" "}
                <div className={classes.quesContain}>
                  <Typography variant="h5" style={{ color: "#04C38F" }}>
                    Disponibilite
                  </Typography>
                  <p className={classes.description}>Semaine prochaine</p>
                </div>{" "}
              </Grid>
            </Grid>
            <Table
              sx={{ minWidth: 550 }}
              style={{ overflow: "scroll" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="left">Etape</TableCell>
                  <TableCell align="left">Montant HT</TableCell>
                  <TableCell align="left">Montant TTC</TableCell>
                  <TableCell align="left">Versement</TableCell>
                  <TableCell align="left">Réference</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows?.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ font: "normal 600 18px/24px Open Sans" }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        font: "normal normal normal 18px/22px Helvetica Neue",
                      }}
                    >
                      {row.calories}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ font: "normal normal bold 18px/24px Open Sans" }}
                    >
                      {row.fat}€
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ font: "normal normal bold 18px/24px Open Sans" }}
                    >
                      {row.carbs}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        font: "normal normal normal 18px/22px Helvetica Neue",
                      }}
                    >
                      {row.protein}
                    </TableCell>
                    <TableCell align="left">
                      {row.edit}
                      <EditIcon
                        style={{
                          fontSize: "14px",
                          marginTop: "5px",
                          marginLeft: "5px",
                          font: "normal normal normal 18px/22px Helvetica Neue",
                        }}
                      />{" "}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div>
              <button
                className={classes.tagbtn}
                style={{
                  transform: " matrix(1, 0, 0, 1, 0, 0)",
                  border: "2px solid #143D66",
                  width: "191px",
                }}
              >
                Retour au dasboard
              </button>
            </div>
          </div>
        </Box>
        <br />
        <Box
          width="75%"
          p="4"
          className={classes.container}
          style={{ border: "5px solid #D3D3D3" }}
        >
          <br />
          <div className={classes.innerContainer}>
            <div>
              <p className={classes.title}>Votre Proposition</p>
              <div className={classes.divider}></div>
            </div>
            <div className={classes.quesContain}>
              <p className={classes.subtitle} py={2}>
                Vos retours sur cette mission : Interrogations, pertinence de
                votre profil, Intérêt professionnel
              </p>
              <p className={classes.description}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className={classes.quesContain}>
              <p className={classes.subtitle} py={2}>
                Vos missions précédente en lien avec le projet du client
              </p>
              <p className={classes.description}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
            <Grid container>
              <Grid md={3}>
                <div>
                  <p className={classes.subtitle} py={2}>
                    TJM
                  </p>
                  <p className={classes.subtitle}>450,00 €</p>
                </div>{" "}
              </Grid>
              <Grid md={9}>
                {" "}
                <div>
                  <p className={classes.subtitle} py={2}>
                    Disponibilite
                  </p>
                  <p className={classes.description}>Semaine prochaine</p>
                </div>{" "}
              </Grid>
            </Grid>
          </div>
        </Box>
        <br />
        <Box>
          <br />
          <Box
            width="75%"
            p="4"
            className={classes.container}
            style={{ border: "5px solid #D3D3D3" }}
          >
            <div className={classes.innerContainer}>
              <div className={classes.titlecontainer}>
                <p className={classes.title} sx={{ display: "inline" }}>
                  Titre &emsp;
                </p>
                <p
                  style={{
                    textAlign: "left",
                    font: "normal normal normal 22px/30px Open Sans",
                    letterSpacing: "0px",
                    color: "#143D66",
                    opacity: "1",
                    margin: "0px",
                  }}
                  sx={{ display: "inline" }}
                >
                  Lorem ipsum dolor sit amet, consetetur
                </p>
              </div>
              <div className={classes.divider}></div>
              <div>
                <Grid container width="100%" mt={2}>
                  <Grid sm={12} md={4} pr={1}>
                    <Box py={1}>
                      <p className={classes.subtitle}>Poste proposé</p>
                      <p className={classes.description}>Lorem Ipsum</p>
                    </Box>
                    <Box py={1}>
                      <p className={classes.subtitle}>Lieu de travail</p>
                      <p className={classes.description}>Paris</p>
                    </Box>
                    <Box py={1}>
                      <p className={classes.subtitle}>TJM</p>
                      <p className={classes.description}>450 Euros</p>
                    </Box>
                  </Grid>
                  <Grid sm={12} md={4} pr={1}>
                    <Box py={1}>
                      <p className={classes.subtitle}>
                        Séniorité du consultant
                      </p>
                      <p className={classes.description}>3 / 5 ans</p>
                    </Box>
                    <Box py={1}>
                      <p className={classes.subtitle}>Début de la mission</p>
                      <p className={classes.description}>Des que Possible</p>
                    </Box>
                  </Grid>
                  <Grid sm={12} md={4} pr={1}>
                    <Box py={1}>
                      <p className={classes.subtitle}>Fréquence par semaine</p>
                      <p className={classes.description}>Temps Plein</p>
                    </Box>
                    <Box py={1}>
                      <p className={classes.subtitle}>Durée de la mission</p>
                      <p className={classes.description}>3 a 5 mois</p>
                    </Box>
                  </Grid>
                </Grid>
              </div>

              {/* Descraption */}
              <div className={classes.title} style={{ marginTop: "2rem" }}>
                <p className={classes.subtitle}>Description</p>
                <div className={classes.divider}></div>
                <div style={{ marginTop: "1rems" }}>
                  <p className={classes.description}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet
                  </p>
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <p className={classes.description}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet
                  </p>
                </div>
              </div>
            </div>
            <br />
          </Box>
          <br />
        </Box>
      </div>
    </div>
  );
};
export default Web1920_27;
