import { useState } from "react";
import FileUpload from "./FileUpload/FileUpload";
import { useStyles, BootstrapButton } from "./FileUpload/fileUpload.styles.js";
import { Container, Grid, Typography } from "@material-ui/core";
const Uploader = () => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);

  return (
    <Container className={classes.container}>
      <Grid className={classes.Notificate}>
        <Typography className={classes.message}>
          Suba el documento pdf del trabajo que desea revisar, el sistema
          verifica similaridad de los documentos contenidos en la base de datos,
          ya depende del tutor tomar decisiones sobre dicho trabajo
        </Typography>
      </Grid>
      <FileUpload files={files} setFiles={setFiles} />
      <BootstrapButton>Enviar</BootstrapButton>
    </Container>
  );
};

export default Uploader;
