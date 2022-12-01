import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";
class Dashboard extends React.Component {
  render() {
    const headingStyle = {
      color: "green",
      marginTop: "60px",
    };
    return (
      <Box
        sx={{ flexGrow: 1 }}
        backgroundColor="#11ffee00"
        style={{ marginTop: "70px", margin: "30px" }}
      >
        <Grid container spacing={3} disableEqualOverflow>
          <Grid xs={12}>
            <Typography
              variant="h4"
              component="div"
              textAlign="center"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              style={headingStyle}
            >
              Welcome onboard, Mr. John Smith.
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              style={{ color: "#bab9b9" }}
            >
              Candidate Info
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              style={{ color: "#bab9b9" }}
            >
              Checklist
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Box
              component="div"
              sx={{ border: "1px solid ", paddingBottom: "15px" }}
            >
              <Grid container spacing={2}>
                <Grid xs={6}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  >
                    Offer Acceptance Date
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  >
                    22-05-2022
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  >
                    Date of Joining
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  >
                    31-08-2022
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  >
                    HR Assigned
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  >
                    Porto Helsinki
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  >
                    HR Email ID
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  >
                    porto.hoki@liveedu.co.in
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box
              component="div"
              sx={{ border: "1px solid ", paddingBottom: "15px" }}
            >
              <Grid container spacing={2}>
                <Grid xs={6}>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                 Candidate Registered
                </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  >
                    &#9989;
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  >
                    Profile Completeness
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  >
                    2/5 (40%)
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  >
                    Background Verification Status
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  >
                    &#9989;
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  >
                    Joined
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  >
                    &#10060;
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid xs={12} >
          <Typography
                    variant="inherit"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" , } }}
                  >
          Please complete the profile section to start background verification and for seamless background verification.
          </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Dashboard;
