import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';

const SocialMedias = () => {
  return (
    <div className='md:gap-5 gap-8 flex'>
        <a href="https://www.instagram.com/nike/"><InstagramIcon/></a>
        <a href="https://twitter.com/Nike"><XIcon/></a>
        <a href="https://www.facebook.com/nike/?locale=pt_BR"><FacebookIcon/></a>
    </div>
  )
}

export default SocialMedias