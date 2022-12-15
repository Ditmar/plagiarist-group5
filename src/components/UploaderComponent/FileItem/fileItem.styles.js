import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  paper: {
    marginRight: "40rem",
    backgroundColor: "#F7F8FC",
  },
  minicard: {
    height: 150,
    maxWidth: 370,
    borderRadius: 10,
    padding: theme.spacing(2),
  },
  name: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    letterSpacing: 0.3,
  },
  iconu: {
    marginLeft: 4,
    color: "#0000ff",
    marginRight: 2,
  },
}));
