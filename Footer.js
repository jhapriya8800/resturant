import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Box, Typography } from '@mui/material'

const Footer = () => {
  return (
  <>
    <Box sx={{textAlign:"center",bgcolor:"black",color:"white"}}>
    <Box sx={{my:3,"& svg":{
      fontSize:"30px",
      cursor:"pointer",
      mr:2,
    },
    "& svg:hover":{
      color:'goldenrod',
      transform:'translateX(5px)',
      transition:"all 400ms"
    }
    }}>
    <InstagramIcon/>
    <XIcon/>
    <GitHubIcon/>
    <YouTubeIcon/>
    </Box>
        <Typography variant="h5" sx={{"@media (min-width:600px)":{fontSize:"1rem"
        },
        
        }}>
        
        All Right &copy;  Techinfo YT</Typography>
    </Box>
  </>
  )
}

export default Footer
