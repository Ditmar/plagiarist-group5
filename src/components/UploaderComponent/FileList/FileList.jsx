import React from "react";
import FileItem from "./../FileItem/FileItem";
import { ListItem } from "@material-ui/core";
const FileList = ({ files }) => {
  return (
    <ListItem>
      {files.map((f) => (
        <FileItem key={f.name} file={f} />
      ))}
    </ListItem>
  );
};

export default FileList;
