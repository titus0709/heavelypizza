import React from 'react'
import Instagram from '@mui/icons-material/Instagram'
import Facebook from '@mui/icons-material/Facebook'
import Twitter from '@mui/icons-material/Twitter'
import Linkedin from '@mui/icons-material/LinkedIn'
import '../styles/footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="socialMedia">
        <Instagram/> <Facebook/> <Twitter/> <Linkedin/>
      
      </div>
      <p> &copy; All rights reserver by HeavenlySlice.com</p>
    </div>
  )
}

export default Footer
