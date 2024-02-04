'use client'

import { useState } from "react";

import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "@mui/material";


const drawerWidth = 240;
const navItems = [{primary: 'Home', link: '#home'}, {primary: 'About', link: '#about'}, {primary: 'Projects', link: '#projects'}, {primary: 'Contact', link: '#contact'}];


export default function Home() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
        David Sambilay
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.primary} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link href={item.link} color='inherit' underline="none">
                <ListItemText primary={item.primary} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  

  return (

    <div>
      <Box sx={{ display: 'flex' }}>
        {/* <CssBaseline /> */}
        <AppBar component="nav" color="primary">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              David Sambilay
            </Typography>
            
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button href={item.link} key={item.primary} sx={{ color: '#fff' }} className="hover:bg-gray-800">
                  {item.primary}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>


      <div style={{ backgroundImage: 'url(/images/cs-background-pic.jpg)' }} className="bg-cover opacity-90 h-screen flex flex-col items-center justify-center gap-8 text-[#e1f3ff] text-center" id="home">
        <h1 className="text-[3rem]">David Sambilay</h1>
        <h2 className="text-xl">Aspiring Software Engineer</h2>
      </div>

      <div className="flex flex-col mx-3 my-6" id="about">
        <h1 className="text-[3rem] text-center">About</h1>
        <div className="flex flex-col md:flex-row gap-8 justify-around">
          <img className="rounded-full w-[25rem] h-[25rem] object-cover max-md:mx-auto my-4" src="./images/about.jpg"/>
          <div className="flex flex-col gap-5 justify-center text-left">
            <h1 className="text-[2rem]">
              Hi! I&apos;m David.
            </h1>
            <h1>
              I am an aspiring software engineer
              proficient in web development. With
              my passion to learn and hunger to excel, I am
              driven to use my skills to bring about positive change
              and pave a way for a better future.
            </h1>
            <h1>
              When I&apos;m not using my computer, I like to spend
              my time playing basketball, playing guitar, weightlifting, and, most
              of all, spending time with family and friends.
            </h1>
          </div>
        </div>
        <a href="../../public/resume.pdf" className="flex items-center gap-2 bg-black hover:bg-gray-700 self-center rounded-lg p-2 mb-3 mt-6 text-white no-underline">
            Here&apos;s my resume!
          </a>
      </div>

      <div id="projects">
        <h1 className="text-[3rem] text-center border-t-2 border-gray-150">Projects</h1>
        <div className='flex flex-col lg:flex-row lg:flex-wrap justify-center gap-10 mx-10'>

          <div className='flex flex-col justify-between shadow-xl rounded-lg lg:w-[30%] w-[100%] my-10'>
            <div>
              <img
                alt="mellow project" 
                src="./images/mellow.png"
                width={'auto'}
                height={500}
                className="self-center"
              />
              <div className="flex flex-col justify-end m-3">
                <h3 className='text-lg font-medium pt-8 pb-2'>Mellow</h3>
                <p className='py-2'>
                  A serverless full-stack to-do list application made with React and several AWS services. 
                </p>
                <h4 className='py-4 text-indigo-400'>Tech Stack:</h4>
                <p className='text-gray-800 py-1'>React.js</p>
                <p className='text-gray-800 py-1'>AWS Lambda, API Gateway</p>
                <p className='text-gray-800 py-1'>AWS RDS Postgres</p>
              </div>
            </div>
            <a href="https://github.com/KhaNguyen04/Mellow" className="flex items-center gap-2 bg-black hover:bg-gray-700 self-center rounded-lg p-2 mb-3 text-white no-underline">
                <FaGithub size={20} />
                Github
            </a>
          </div>
          

          <div className='flex flex-col justify-between shadow-xl rounded-lg lg:w-[30%] w-[100%]  my-10'>
            <div>
              <img
                alt="miscord project" 
                src="./images/miscord.png"
                width={'auto'}
                height={500}
                className="self-center"
              />
              <div className="flex flex-col m-3">
                <h3 className='text-lg font-medium pt-8 pb-2'>Miscord</h3>
                <p className='py-2'>
                  A simple chat application built in React inspired by Discord. Features include
                  real-time messaging, single and group conversations.
                </p>
                <h4 className='py-4 text-indigo-400'>Tech Stack:</h4>
                <p className='text-gray-800 py-1'>React.js</p>
                <p className='text-gray-800 py-1'>Firebase</p>
              </div>
            </div>
            <a href="https://github.com/iamgabelogan65/miscord" className="flex items-center gap-2 bg-black hover:bg-gray-700 self-center rounded-lg p-2 mb-3 text-white no-underline">
                <FaGithub size={20} />
                Github
            </a>
          </div>

          <div className='flex flex-col justify-between shadow-xl rounded-lg lg:w-[30%] w-[100%] my-10'>
            <div>
              <img
                alt="auction house project" 
                src="./images/auctionhouse.png"
                width={'auto'}
                height={500}
                className="self-center"                
              />
              <div className="flex flex-col m-3">
                <h3 className='text-lg font-medium pt-8 pb-2'>Auction House</h3>
                <p className='py-2'>
                  An auction house web application that let users auction an 
                  item and bid on an item
                </p>
                <h4 className='py-4 text-indigo-400'>Tech Stack:</h4>
                <p className='text-gray-800 py-1'>React.js</p>
                <p className='text-gray-800 py-1'>MySQL</p>
                <p className='text-gray-800 py-1'>Spring Boot</p>
              </div>
            </div>

            <a href="https://github.com/Shaion7/CS157A-Team5" className="flex items-center gap-2 bg-black hover:bg-gray-700 self-center rounded-lg p-2 mb-3 text-white no-underline">
                <FaGithub size={20} />
                Github
            </a>
          </div>


        </div>
      </div>

      <div className="border-t-2 border-gray-150 pt-8" id="contact">
        <h1 className="text-[2.5rem] text-center">Let&apos;s Connect!</h1>
        <div className="flex md:flex-row flex-col justify-around m-8">
          <div className="flex md:flex-row flex-col items-center gap-4">
            <a href="https://github.com/iamgabelogan65"><FaGithub size={50} className="hover:text-gray-500 cursor-pointer" /></a>
            <a href="https://www.linkedin.com/in/david-sambilay-4223081a3/"><FaLinkedin size={50} className="hover:text-gray-500 cursor-pointer" /></a>
          </div>
          <div className="flex flex-col items-center my-3">
            <p>
              EMAIL: davidsambilay3@gmail.com
            </p>
          </div>
        </div>
      </div>

    </div>

  );
}
