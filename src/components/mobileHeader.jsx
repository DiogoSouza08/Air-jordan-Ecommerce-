import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import LoginBtn from './loginBtn';
import CadastroBtn from './cadastrar';
import Navbar from './Navbar';
import FadeInSection from './FadeinSection';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <FadeInSection>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon style={{ color: 'white', fontSize: 40 }} />
      </Button>
      </FadeInSection>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        classes={{ paper: 'drawer-paper' }} 
      >
        <div className=" flex flex-col items-start gap-16 h-auto pt-10 text-start pl-6 sm:pr-44 pr-32 py-6">
          <Navbar layout="vertical" isMobileHeader={true} applyFadeEffect={true} />
          <FadeInSection>
          <div className='flex flex-col gap-4 bg-zinc-700'> 
            <LoginBtn/>
            <CadastroBtn/>
          </div>
          </FadeInSection>
        </div>
      </Drawer>
      <style jsx>{`
        .drawer-paper {
          background-color: rgb(63 63 70); // Substitua pela cor desejada (bg-zinc-700)
        }
      `}</style>
    </div>
  );
}
