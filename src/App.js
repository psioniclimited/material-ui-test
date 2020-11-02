import React, {useState} from "react";
import { Switch,Grid, Typography, Button, Paper } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import "./index.css";
// import Header from "./Header";
// import Content from "./Content";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  return (
    // <Grid container direction="column">
    //   <Grid item>
    //     <Header />
    //   </Grid>
    //   <Grid item container>
    //     <Grid item xs={0} sm={2} />
    //     <Grid item xs={12} sm={8}>
    //       <Content />
    //     <Grid item xs={0} sm={2} />
    //     </Grid>
    //   </Grid>
    // </Grid>
    <ThemeProvider theme={theme}>
      <Paper style={{height: "100vh"}}>
        <Grid container direction="column">
          <Typography variant="h1">This is an app !</Typography>
          <Button variant="contained">This is a button</Button>
          <Button variant="contained" color="secondary">Another button</Button>
          <Switch checked={darkMode} onChange={()=>setDarkMode(!darkMode)}></Switch>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
