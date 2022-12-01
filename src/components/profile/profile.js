import React from "react";
import Address from "./address";
import { Box, Tabs, Typography, Tab } from "@mui/material";
import PersonalDetails from "./personalDetails";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "1",
      tabIndex: 0,
    };
  }

  handleTabChange = (event, newValue) => {
    event.preventDefault();
    this.setState({ tabIndex: newValue });
  };
  render() {
    return (
      <Box style={{ marginTop: "110px" }}>
        <Box sx={{ display: "flex", margin: 2 }}>
          <Tabs
            value={this.state.tabIndex}
            onChange={this.handleTabChange}
            variant="fullWidth"
            orientation="vertical"
            sx={{ border: 1, borderColor: "divider" }}
            TabIndicatorProps={{
              sx: { color: "#000" },
            }}
          >
            <Tab label="Personal Details" />
            <Tab label="Identity Documents" />
            <Tab label="Address" />
            <Tab label="Education" />
            <Tab label="Employment" />
            <Tab label="References" />
          </Tabs>
          <Box sx={{ margin: 2 }}>
            {this.state.tabIndex === 0 && (
              <Box>
                <Typography variant="subtitle1">Personal Details</Typography>
                <PersonalDetails></PersonalDetails>
              </Box>
            )}
            {this.state.tabIndex === 1 && (
              <Box>
                <Typography>The second tab</Typography>
                <Address></Address>
              </Box>
            )}
            {this.state.tabIndex === 2 && (
              <Box>
                <Typography>The third tab</Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    );
  }
}
export default Profile;
