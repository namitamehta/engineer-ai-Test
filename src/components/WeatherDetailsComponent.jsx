import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Paper,
  makeStyles,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const WeatherDetailsComponent = ({ wealtherDetails, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={wealtherDetails.open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Weather Details For</DialogTitle>
      {wealtherDetails.Data && (
        <DialogContent>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell>Temperature:</TableCell>
                  <TableCell align="right">
                    <Paper className={classes.paper}>
                      {wealtherDetails.Data.current.temperature}
                    </Paper>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Weather Icons:</TableCell>
                  <TableCell align="right">
                    <Paper className={classes.paper}>
                      <img
                        src={wealtherDetails.Data.current.weather_icons}
                        height="10"
                        width="10"
                        alt="Icon"
                      ></img>
                    </Paper>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Wind Speed:</TableCell>
                  <TableCell align="right">
                    <Paper className={classes.paper}>
                      {wealtherDetails.Data.current.wind_speed}
                    </Paper>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Precip:</TableCell>
                  <TableCell align="right">
                    <Paper className={classes.paper}>
                      {wealtherDetails.Data.current.precip}
                    </Paper>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default WeatherDetailsComponent;
