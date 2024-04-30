import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOptions from './menuOptions'; // Importe o componente MenuOptions

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon style={{ color: 'white', fontSize: 40 }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div className=" flex flex-col items-start bg-zinc-700 h-full text-start pl-6 sm:pr-44 pr-32 py-6"> 
          <MenuOptions layout="vertical" isMobileHeader={true} />
        
        </div>
      </Drawer>
    </div>
  );
}
