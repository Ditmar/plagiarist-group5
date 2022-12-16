import React from "react";
import "../../../App.css";
import FileList from "../FileList/FileList";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useStyles } from "./fileUpload.styles.js";
const FileUpload = ({ files, setFiles, removeFile }) => {
  const classes = useStyles();
  const uploadHandler = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setFiles([...files, file]);

    // upload file
    const formData = new FormData();
    formData.append("newFile", file, file.name);
  };

  return (
    <Grid>
      <div className={classes.filecard}>
        <FileList files={files} removeFile={removeFile} />
        <div className={classes.form}>
          <Grid className={classes.card}>
            <input classes="input" type="file" onChange={uploadHandler} />
            {/*  <button>
            <i>
              <FontAwesomeIcon icon={faPlus} />
            </i>
            Upload
          </button>*/}
          </Grid>
        </div>

        <Typography variant="h6" className={classes.advertence}>
          Please upload a document with a short name
        </Typography>
      </div>
    </Grid>
  );
};

export default FileUpload;
