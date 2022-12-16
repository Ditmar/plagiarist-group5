import React from "react";
import { Grid, Typography, Box, Paper } from "@material-ui/core";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyles } from "./fileItem.styles.js";
const FileItem = ({ file, deleteFile }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <div className={classes.minicard}>
        <Grid spacing={1} key={file.name}>
          <Typography className={classes.name}>
            <PictureAsPdfIcon className={classes.iconu} /> Are you sure to send
            the Document?
          </Typography>
          <Box mx={20} mt={1}>
            <CircularProgress color="secondary" />
          </Box>
          <Typography className={classes.name}>Name: {file.name}</Typography>
          <Box mx={38}>
            <IconButton size="small">
              <DeleteIcon
                color="secondary"
                onClick={() => deleteFile(file.name)}
              />
            </IconButton>
          </Box>
        </Grid>
      </div>
    </Paper>
  );
};

export default FileItem;
