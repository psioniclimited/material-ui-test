import "./index.css";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  hstyle: {
    fontStyle: "oblique",
    color: "red",
  },
  buttonStyle: {
    color: "green",
    border: 0,
  },
});

function App() {
  const classes = useStyle();

  return (
    <div className="App">
      <Typography className={classes.hstyle} variant="h2" color="primary">
        Hello there
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        className={classes.buttonStyle}
      >
        Experimental Button
      </Button>
    </div>
  );
}

export default App;
