import { Navbar, Sidebar } from "components";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <Navbar />
        <div>Some content when you click on folder display here</div>
      </Grid>
    </Grid>
  );
}

export default App;
