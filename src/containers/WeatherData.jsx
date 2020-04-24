import React, { Component } from "react";
import {
  getContryData,
  getContryWeatherData,
} from "../services/weatherDataService";
import {
  Box,
  TextField,
  withStyles,
  Button,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  Paper,
  TableHead,
} from "@material-ui/core";
import WeatherDetailsComponent from "../components/WeatherDetailsComponent";

const styles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  submitBox: {
    margin: theme.spacing(1),
  },
});

class WeatherData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: [],
      countryName: "",
      wealtherDetails: {
        Data: null,
        open: false,
      },
      loader: false,
    };
  }

  handleClick = (e) => {
    let countryName = this.state.countryName;
    getContryData(countryName).then((data) => {
      let responseData = data.data;
      this.setState({
        countryData: [...responseData],
      });
    });
  };

  handleChange = (e) => {
    this.setState({ countryName: e.target.value });
  };

  handleDialogClose = () => {
    this.setState({
      wealtherDetails: {
        Data: null,
        open: false,
      },
    });
  };

  getWeatherDataClick = (e, capitalName) => {
    getContryWeatherData(capitalName).then((weatherData) => {
      this.setState({
        wealtherDetails: {
          Data: weatherData.data,
          open: true,
        },
      });
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Box>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Country"
              variant="outlined"
              onChange={(e) => this.handleChange(e)}
            />
          </form>
          <Box className={classes.submitBox}>
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => this.handleClick(e)}
              disabled={!this.state.countryName}
            >
              Submit
            </Button>
          </Box>
          {this.state.countryData.length > 0 && (
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Country Name</TableCell>
                    <TableCell>Capital</TableCell>
                    <TableCell>Population</TableCell>
                    <TableCell>Latlng</TableCell>
                    <TableCell>Flag</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.countryData.map((row, index) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.capital}</TableCell>
                      <TableCell>{row.population}</TableCell>
                      <TableCell>{row.latlng}</TableCell>
                      <TableCell>
                        <img
                          src={row.flag}
                          height="10"
                          width="10"
                          alt={row.name}
                        ></img>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={(event) =>
                            this.getWeatherDataClick(event, row.capital)
                          }
                          disabled={!this.state.countryName}
                        >
                          View Weather
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          <WeatherDetailsComponent
            wealtherDetails={this.state.wealtherDetails}
            handleClose={() => this.handleDialogClose()}
          />
        </Box>
      </>
    );
  }
}
export default withStyles(styles)(WeatherData);
