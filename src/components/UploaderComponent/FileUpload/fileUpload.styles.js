import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
export const useStyles = makeStyles(() => ({
  Notificate: {
    width: "1048px",
    height: "60px",
    backgroundColor: "#4497FA",
    borderRadius: "6px",
    padding: 0,
    marginBottom: 8,
  },
  message: {
    width: "1013px",
    height: "32px",
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "17.57px",
    letterSspacing: "0.2px",
    color: "#FFFFFF",
    margin: "16px 14px 12px 21px",
    position: "absolute",
  },
  filecard: {
    padding: "1em",
    display: "flex",
    flexDirection: "column",
    justifyCcontent: "center",
    alignItems: "center",
    border: "2px dashed #000000",
    backgroundColor: "#ffffff",
    width: "1048px",
    height: "475px",
  },

  form: {
    justifyCcontent: "center",
    alignItems: "center",
    fontSize: "19px",
  },

  card: {
    marginTop: "10rem",
  },
  adevertence: {
    color: "#0000ff",
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 0.3,
  },
}));

export const BootstrapButton = withStyles({
  root: {
    width: "316px",
    height: "38px",
    textTransform: "none",
    fontSize: "14px",
    border: "none",
    color: "#FFFFFF",
    fontWeight: "bold",
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: "20px",
    backgroundColor: "#3751FF",
    borderColor: "#3751FF",
    marginTop: 10,
    fontFamily: ["Mulish"].join(","),
    "&:hover": {
      backgroundColor: "#3751FF",
    },
    "&:active": {
      boxShadow: "0px 4px 12px rgba(55, 81, 255, 0.24)",
      backgroundColor: "#3751FF",
      borderColor: "#3751FF",
    },
    "&:focus": {
      boxShadow: "0px 4px 12px rgba(55, 81, 255, 0.24)",
    },
  },
})(Button);
