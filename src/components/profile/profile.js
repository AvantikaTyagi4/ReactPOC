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
    var styles = {
      default_tab:{
        textDecoration:"none",
        justifyContent:'left',
        color: "#000",
        alignItems: "flex-start",
        padding: "0.4rem 0% 0% 2.5rem",
        minHeight: "30px",
        fontSize: "16px",
        textTransform:"none",
      },
      active_tab:{
        color: "#fff",
        backgroundColor: "rgba(93, 167, 83, 0.74)",
        textTransform:"none",
        justifyContent:'left',
        alignItems: "flex-start",
        padding: "0.4rem 0% 0% 2.5rem",
        minHeight: "30px",
        fontSize: "16px",
        fontWeight:"bold",
      }
    }
  
    styles.tab = []
    styles.tab[0] = styles.default_tab;
    styles.tab[1] = styles.default_tab;
    styles.tab[2] = styles.default_tab;
    styles.tab[3] = styles.default_tab;
    styles.tab[4] = styles.default_tab;
    styles.tab[5] = styles.default_tab;
    styles.tab[this.state.tabIndex] = styles.active_tab;
  
    return (
      <Box style={{ marginTop: "110px" }}>
        <Box sx={{ display: "flex", margin: 2 }}>
          <Tabs
            value={this.state.tabIndex}
            onChange={this.handleTabChange}
            variant="fullWidth"
            orientation="vertical"
            sx={{ border: 1, borderColor: "divider",width:'400px' , textDecoration:'none', height:'180px'}}
            TabIndicatorProps={{
              style: {  height: "0px", }
            }}
            
          >
            <Tab label="Personal Details" style={styles.tab[0]}/>
            <Tab label="Identity Documents" style={styles.tab[1]} />
            <Tab label="Address"  style={styles.tab[2]}/>
            <Tab label="Education" style={styles.tab[3]}/>
            <Tab label="Employment" style={styles.tab[4]}/>
            <Tab label="References" style={styles.tab[5]}/>
          </Tabs>
          <Box sx={{ marginLeft: 2 , width:'80%'}}>
            {this.state.tabIndex === 0 && (
              <Box>
                <Typography variant="h5" marginLeft="20px" marginBottom="10px">Personal Details</Typography>
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
            {this.state.tabIndex === 3 && (
              <Box>
                <Typography>The Fourth tab</Typography>
              </Box>
            )}
            {this.state.tabIndex === 4 && (
              <Box>
                <Typography>The Fifth tab</Typography>
              </Box>
            )}
            {this.state.tabIndex === 5 && (
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
