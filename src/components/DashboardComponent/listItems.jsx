import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import PieChartIcon from '@mui/icons-material/PieChart';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SpokeSharpIcon from '@mui/icons-material/SpokeSharp';

export const mainListItems = (
  <React.Fragment>
    <Link to="/">
      <ListItemButton>
        <ListItemIcon >
          <PieChartIcon style={{ color: '#9FA2B4'}} />
        </ListItemIcon>
        <ListItemText primary="Inicio" style={{ color: '#A4A6B3'}} />

      </ListItemButton>
    </Link>
    <Link to="/upload">
      <ListItemButton>
        <ListItemIcon>
          <WorkIcon style={{ color: '#9FA2B4' }} />
        </ListItemIcon>
        <ListItemText primary="Trabajos" style={{ color: '#A4A6B3', listStyle: 'none' }} />
      </ListItemButton>
    </Link>
    <Link to="/lastdocument">
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon/>
        </ListItemIcon>
        <ListItemText primary="Last Document" />
      </ListItemButton>
    </Link>
    <ListItemButton>
      <ListItemIcon>
        <LightbulbIcon style={{ color: '#9FA2B4' }} />
      </ListItemIcon>
      <ListItemText primary="Revisar Tesis" style={{ color: '#A4A6B3' }} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <GroupsIcon style={{ color: '#9FA2B4' }} />
      </ListItemIcon>
      <ListItemText primary="Listar Tesis" style={{ color: '#A4A6B3' }} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SpokeSharpIcon style={{ color: '#9FA2B4' }} />
      </ListItemIcon>
      <ListItemText primary="Publicar Tesis" style={{ color: '#A4A6B3', fontSize: '16px' }} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LibraryBooksIcon style={{ color: '#9FA2B4' }} />
      </ListItemIcon>
      <ListItemText primary="Reportes Generales" style={{ color: '#A4A6B3' }} />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <SettingsIcon style={{ color: '#9FA2B4' }} />
      </ListItemIcon>
      <ListItemText primary="Settings" style={{ color: '#A4A6B3' }} />
    </ListItemButton>
  </React.Fragment>
);
