import {
  TextField,
  Typography,
  Container,
  Avatar,
  Stack,
  Button,
} from "@mui/material";
import React from "react";
import image from "../../assets/images/Profile_picture_default.png";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { Cookies } from "react-cookie";
import {
  getPersonalDetails,
  savePersonalDetails,
} from "../../services/personalDetailsService";
import { format, parseISO } from "date-fns";
import {
  DATE_TIME_FORMAT_JAVA,
  DATE_TIME_FORMAT_UI,
} from "../../constants/configuration";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import AlertDialog from "../dialog/empty-field-dialog";

const cookies = new Cookies();
class PersonalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalDetailForm: {
        candidateId: "",
        salutation: "",
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        personalEmail: "",
        maritalStatus: "UNMARRIED",
        nationality: "",
        fatherName: "",
        placeOfBirth: "",
        emergencyContactNumber: "",
        emergencyContactPerson: "",
        relation: "",
        bloodGroup: "",
        disability: "NO",
        disabilityName: "",
        contactNumber: "",
        createdAt: new Date().toLocaleString(),
        modifiedAt: new Date().toLocaleString(),
        completedPercentage: 0,
      },
      personalDetailError: {
        candidateId: false,
        salutation: false,
        firstName: false,
        middleName: false,
        lastName: false,
        gender: false,
        personalEmail: false,
        maritalStatus: false,
        nationality: false,
        fatherName: false,
        placeOfBirth: false,
        emergencyContactNumber: false,
        emergencyContactPerson: false,
        relation: false,
        bloodGroup: false,
        disability: true,
        disabilityName: false,
        contactNumber: false,
        createdAt: false,
        modifiedAt: false,
        completedPercentage: false,
      },
      personalDetailValidaionMessage: {
        candidateId: "",
        salutation: "",
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        personalEmail: "",
        maritalStatus: "",
        nationality: "",
        fatherName: "",
        placeOfBirth: "",
        emergencyContactNumber: "",
        emergencyContactPerson: "",
        relation: "",
        bloodGroup: "",
        disability: "",
        disabilityName: "",
        contactNumber: "",
        createdAt: "",
        modifiedAt: "",
        completedPercentage: "",
      },
      candidateId: cookies.get("candidateId") || 0,
      emptyFields: "",
      showModal: false,
    };
  }
  contactNumberHandleOnChange = (value, data, event, formattedValue) => {
    var form = this.state.personalDetailForm;

    form.contactNumber =
      "(+" + data.dialCode + ")" + value.slice(data.dialCode.length);

    this.setState(
      {
        personalDetailForm: form,
      },
      () => {
        this.calculatePercentageComplete();
      }
    );
  };
  emergencyContactNumberHandleOnChange = (
    value,
    data,
    event,
    formattedValue
  ) => {
    var form = this.state.personalDetailForm;

    form.emergencyContactNumber =
      "(+" + data.dialCode + ")" + value.slice(data.dialCode.length);

    this.setState({ personalDetailForm: form }, () => {
      this.calculatePercentageComplete();
    });
  };
  componentDidMount() {
    getPersonalDetails(this.state.candidateId).then((data) => {
      if (data) {
        if (data.status === 401 || data.status === 503) {
        } else {
        
          data.createdAt = format(
            parseISO(data.createdAt),
            DATE_TIME_FORMAT_UI
          );
          data.modifiedAt = format(
            parseISO(data.modifiedAt),
            DATE_TIME_FORMAT_UI
          );
          this.setState({ personalDetailForm: data });
        }
      }
    });
  }

  personalDetailFormChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState(
      {
        personalDetailForm: { ...this.state.personalDetailForm, [name]: value },
      },
      () => {
        this.calculatePercentageComplete();
      }
    );
    this.validateFormValues(name, value);

    //  this.calculatePercentageComplete();
  };

  validateFormValues(name, value) {
    let error = this.state.personalDetailError;
    let validate = this.state.personalDetailValidaionMessage;
    switch (name) {
      case "firstName":
        if (value !== "") {
          error.firstName = false;
          validate.fatherName = "";
        } else {
          error.firstName = true;
          validate.firstName = "First Name is required";
        }
        break;
      case "middleName":
        if (value !== "") {
          error.middleName = false;
          validate.middleName = "";
        } else {
          error.middleName = true;
          validate.middleName = "Middle Name is required";
        }
        break;
      case "lastName":
        if (value !== "") {
          error.lastName = false;
          validate.lastName = "";
        } else {
          error.lastName = true;
          validate.lastName = "Last Name is required";
        }
        break;
      case "personalEmail":
        if (value !== "") {
          // eslint-disable-next-line no-useless-escape
          const pattern =
            /[a-zA-Z0-9]+[\\.]?([a-zA-Z0-9]+)?[\\@][a-z]{3,9}[\\.][a-z]{2,5}/g;
          const result = pattern.test(value);
          if (result) {
            error.personalEmail = false;
            validate.personalEmail = "";
          } else {
            error.personalEmail = true;
            validate.personalEmail = "Invalid email";
          }
        } else {
          error.personalEmail = true;
          validate.personalEmail = "Email is required";
        }
        break;
      case "nationality":
        if (value !== "") {
          error.nationality = false;
          validate.nationality = "";
        } else {
          error.nationality = true;
          validate.nationality = "Nationality is required";
        }
        break;
      case "placeOfBirth":
        if (value !== "") {
          error.placeOfBirth = false;
          validate.placeOfBirth = "";
        } else {
          error.placeOfBirth = true;
          validate.placeOfBirth = "Place of Birth is required";
        }
        break;
      case "fatherName":
        if (value !== "") {
          error.fatherName = false;
          validate.fatherName = "";
        } else {
          error.fatherName = true;
          validate.fatherName = "Father is required";
        }
        break;
      case "emergencyContactPerson":
        if (value !== "") {
          error.emergencyContactPerson = false;
          validate.emergencyContactPerson = "";
        } else {
          error.emergencyContactPerson = true;
          validate.emergencyContactPerson =
            "Emergency Contact Person is required";
        }
        break;

      case "relation":
        if (value !== "") {
          error.relation = false;
          validate.relation = "";
        } else {
          error.relation = true;
          validate.relation = "Relation is required";
        }
        break;
      case "bloodGroup":
        if (value !== "") {
          error.bloodGroup = false;
          validate.bloodGroup = "";
        } else {
          error.bloodGroup = true;
          validate.bloodGroup = "Blood Group is required";
        }
        break;
      case "disability":
        if (value === "NO") {
          error.disability = true;
        } else {
          error.disability = false;
        }
        break;
      default:
    }
    this.setState({
      personalDetailError: error,
      personalDetailValidaionMessage: validate,
    });
  }

  calculatePercentageComplete() {
    var filledInputs = 0;
    const total = 12;
    var emptyFields = "";
    var form = this.state.personalDetailForm;
    form.firstName ? filledInputs++ : (emptyFields += "First name, ");
    form.middleName ? filledInputs++ : (emptyFields += "Middle name, ");
    form.lastName !== "" ? filledInputs++ : (emptyFields += "Last name, ");
    form.personalEmail !== ""
      ? filledInputs++
      : (emptyFields += "Personal email, ");
    form.contactNumber !== ""
      ? filledInputs++
      : (emptyFields += "Contact number, ");
    form.nationality.toString() !== ""
      ? filledInputs++
      : (emptyFields += "Nationality, ");
    form.fatherName.toString() !== ""
      ? filledInputs++
      : (emptyFields += "Father name, ");
    form.placeOfBirth.toString() !== ""
      ? filledInputs++
      : (emptyFields += "Place of birth, ");
    form.emergencyContactNumber.toString() !== ""
      ? filledInputs++
      : (emptyFields += "Emergency contact number, ");
    form.emergencyContactPerson.toString() !== ""
      ? filledInputs++
      : (emptyFields += "Emergency contact person, ");
    form.relation.toString() !== ""
      ? filledInputs++
      : (emptyFields += "Relation, ");
    form.bloodGroup.toString() !== ""
      ? filledInputs++
      : (emptyFields += "Blood group, ");
    var completePercentage = parseInt((filledInputs / total) * 100);

    form.completedPercentage = completePercentage;

    this.setState({ personalDetailForm: form, emptyFields: emptyFields });
  }
  savePersonalDetails = () => {
    var personalDetail = this.state.personalDetailForm;

    personalDetail.createdAt = format(
      new Date(personalDetail.createdAt),
      DATE_TIME_FORMAT_JAVA
    );
    personalDetail.modifiedAt = format(new Date(), DATE_TIME_FORMAT_JAVA);

    savePersonalDetails(personalDetail).then((data) => {
      if (data) {
        if (data.statusCode === 401 || data.statusCode === 503) {
        } else {
         
          data.createdAt = format(
            parseISO(data.createdAt),
            DATE_TIME_FORMAT_UI
          );
          data.modifiedAt = format(
            parseISO(data.modifiedAt),
            DATE_TIME_FORMAT_UI
          );
          this.setState({ personalDetailForm: data });
        }
      }
    });
    if (this.state.emptyFields !== "") {
     
      this.setState({
        emptyFields:
          "You missed some fields, please fill these fields. <br/> <br/> " +
          this.state.emptyFields,
        showModal: !this.state.showModal,
      });
    }
  };

  render() {
    const inputField = {
      width: "100%",
      marginTop: "20px",
    };
    const inputFieldSpecial = {
      width: "100%",
      marginTop: "10px",
    };
    const containerStyle = {
      borderBottom: "2px solid rgb(187 182 182)",
    };
    const inputStyle = {
      border: "none",
      width: "100%",
    };

    const buttonStyle = { background: "transparent", border: "none" };

    return (
      <>
        <AlertDialog
          open={this.state.showModal}
          handleCloseDialog={() => this.setState({ showModal: false })}
          header="Warning Information..!"
          content={this.state.emptyFields}
        ></AlertDialog>
        <Container
          maxWidth="xl"
          sx={{
            border: 1,
            borderColor: "divider",
            padding: "0px",
            margin: "0px",
          }}
          component="div"
        >
          <Stack direction="row" spacing={2}>
            <Typography variant="h6" flexGrow={1}>
              Personal Details
            </Typography>
            <div>
              <Avatar
                variant="square"
                src={image}
                sx={{ width: "100px", height: "100px", m: "10px" }}
              />
              <label style={{ marginLeft: "10px" }}>Profile Picture</label>
            </div>
          </Stack>
          <form>
            <Stack direction="row" spacing={1}>
              <div style={inputField}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="standard"
                  name="firstName"
                  onChange={this.personalDetailFormChange}
                  error={this.state.personalDetailError.firstName}
                  helperText={
                    this.state.personalDetailValidaionMessage.firstName
                  }
                  value={this.state.personalDetailForm.firstName}
                  required
                />
              </div>
              <div style={inputField}>
                <TextField
                  fullWidth
                  label="Middle Name"
                  variant="standard"
                  name="middleName"
                  onChange={this.personalDetailFormChange}
                  error={this.state.personalDetailError.middleName}
                  helperText={
                    this.state.personalDetailValidaionMessage.middleName
                  }
                  value={this.state.personalDetailForm.middleName}
                  required
                />
              </div>
              <div style={inputField}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="standard"
                  name="lastName"
                  onChange={this.personalDetailFormChange}
                  error={this.state.personalDetailError.lastName}
                  helperText={
                    this.state.personalDetailValidaionMessage.lastName
                  }
                  value={this.state.personalDetailForm.lastName}
                  required
                />
              </div>
            </Stack>
            <Stack direction="row" spacing={1}>
              <div style={inputField}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="standard"
                  name="personalEmail"
                  onChange={this.personalDetailFormChange}
                  error={this.state.personalDetailError.personalEmail}
                  helperText={
                    this.state.personalDetailValidaionMessage.personalEmail
                  }
                  value={this.state.personalDetailForm.personalEmail}
                  required
                />
              </div>
              <div style={inputFieldSpecial}>
                <label className="contactNumberLabel">Contact Number</label>
                <PhoneInput
                  country={"in"}
                  value={this.state.personalDetailForm.contactNumber}
                  onChange={this.contactNumberHandleOnChange}
                  placeholder="Contact Number"
                  containerStyle={containerStyle}
                  inputStyle={inputStyle}
                  buttonStyle={buttonStyle}
                />
                <span>
                  {this.state.personalDetailValidaionMessage.contactNumber}
                </span>
              </div>
              <div style={inputFieldSpecial}>
                {/* <FormControl> */}

                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="gender"
                  onChange={this.personalDetailFormChange}
                  value={this.state.personalDetailForm.gender}
                >
                  <FormControlLabel
                    value="FEMALE"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="MALE"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </div>
            </Stack>
            <Stack direction="row" spacing={1}>
              <div style={inputFieldSpecial}>
                <FormLabel>Marital Status</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="maritalStatus"
                  value={this.state.personalDetailForm.maritalStatus}
                  onChange={this.personalDetailFormChange}
                >
                  <FormControlLabel
                    value="UNMARRIED"
                    control={<Radio />}
                    label="Unmarried"
                  />
                  <FormControlLabel
                    value="MARRIED"
                    control={<Radio />}
                    label="Married"
                  />
                </RadioGroup>
              </div>
              <div style={inputField}>
                <TextField
                  fullWidth
                  label="Nationality"
                  variant="standard"
                  name="nationality"
                  onChange={this.personalDetailFormChange}
                  error={this.state.personalDetailError.nationality}
                  helperText={
                    this.state.personalDetailValidaionMessage.nationality
                  }
                  value={this.state.personalDetailForm.nationality}
                  required
                />
              </div>
              <div style={inputField}>
                <TextField
                  fullWidth
                  label="Place of Birth"
                  variant="standard"
                  name="placeOfBirth"
                  onChange={this.personalDetailFormChange}
                  error={this.state.personalDetailError.placeOfBirth}
                  helperText={
                    this.state.personalDetailValidaionMessage.placeOfBirth
                  }
                  value={this.state.personalDetailForm.placeOfBirth}
                  required
                />
              </div>
            </Stack>
            <Stack direction="row" spacing={1}>
              <div style={inputField}>
                <TextField
                  fullWidth
                  label="Father Name"
                  variant="standard"
                  name="fatherName"
                  onChange={this.personalDetailFormChange}
                  error={this.state.personalDetailError.fatherName}
                  helperText={
                    this.state.personalDetailValidaionMessage.fatherName
                  }
                  value={this.state.personalDetailForm.fatherName}
                  required
                />
              </div>
              <div style={inputField}>
                <TextField
                  fullWidth
                  label="Emergency Contact Person"
                  variant="standard"
                  name="emergencyContactPerson"
                  onChange={this.personalDetailFormChange}
                  error={this.state.personalDetailError.emergencyContactPerson}
                  helperText={
                    this.state.personalDetailValidaionMessage
                      .emergencyContactPerson
                  }
                  value={this.state.personalDetailForm.emergencyContactPerson}
                  required
                />
              </div>
              <div style={inputFieldSpecial}>
                <PhoneInput
                  country={"in"}
                  value={this.state.personalDetailForm.emergencyContactNumber}
                  onChange={this.emergencyContactNumberHandleOnChange}
                  placeholder="Contact Number"
                  containerStyle={containerStyle}
                  inputStyle={inputStyle}
                  buttonStyle={buttonStyle}
                />
                <span
                  disabled={
                    this.state.personalDetailError.emergencyContactNumber
                  }
                >
                  {
                    this.state.personalDetailValidaionMessage
                      .emergencyContactNumber
                  }
                </span>
              </div>
            </Stack>
            <Stack direction="row" spacing={1}>
              <div style={inputField}>
                <TextField
                  fullWidth
                  label="Relation"
                  variant="standard"
                  name="relation"
                  onChange={this.personalDetailFormChange}
                  error={this.state.personalDetailError.relation}
                  helperText={
                    this.state.personalDetailValidaionMessage.relation
                  }
                  value={this.state.personalDetailForm.relation}
                  required
                />
              </div>
              <div style={inputField}>
                <TextField
                  fullWidth
                  label="Blood Group"
                  variant="standard"
                  name="bloodGroup"
                  onChange={this.personalDetailFormChange}
                  error={this.state.personalDetailError.bloodGroup}
                  helperText={
                    this.state.personalDetailValidaionMessage.bloodGroup
                  }
                  value={this.state.personalDetailForm.bloodGroup}
                  required
                />
              </div>
              <div style={inputField}></div>
            </Stack>
            <Stack direction="row" spacing={1}>
              <div style={inputFieldSpecial}>
                <FormLabel>Disability</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="disability"
                  onChange={this.personalDetailFormChange}
                  value={this.state.personalDetailForm.disability}
                >
                  <FormControlLabel
                    value="YES"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="NO" control={<Radio />} label="No" />
                </RadioGroup>
              </div>
              <div style={inputField}>
                <TextField
                  fullWidth
                  label="Disability Name"
                  variant="standard"
                  name="disabilityName"
                  onChange={this.personalDetailFormChange}
                  error={this.state.personalDetailError.disabilityName}
                  helperText={
                    this.state.personalDetailValidaionMessage.disabilityName
                  }
                  value={this.state.personalDetailForm.disabilityName}
                  disabled={this.state.personalDetailError.disability}
                  required
                />
              </div>
              <div style={inputField}></div>
            </Stack>
          </form>
          {/* </Box> */}
        </Container>
        <Stack direction="row" spacing={2} margin={1}>
          <Typography
            className="custom-timestamp"
            fontSize="0.7rem"
            flexGrow={1}
          >
            Percentage: {this.state.personalDetailForm.completedPercentage}%
          </Typography>

          <Typography className="custom-timestamp" fontSize="0.7rem">
            Created at: {this.state.personalDetailForm.createdAt}
          </Typography>
          <Typography className="custom-timestamp" fontSize="0.7rem">
            Modified at: {this.state.personalDetailForm.modifiedAt}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} margin={1}>
          <Button variant="contained" onClick={this.savePersonalDetails}>
            Save
          </Button>

          <Button variant="contained">Next</Button>
        </Stack>
      </>
    );
  }
}
export default PersonalDetails;
