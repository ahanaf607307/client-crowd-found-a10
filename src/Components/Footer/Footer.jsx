import React from 'react'
import { FaFirefoxBrowser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer footer-center bg-[#8940d0] text-primary-content p-10">
    <aside>
    <Link className="btn btn-ghost text-xl text-[#fff]">
        <FaFirefoxBrowser className="text-[#fd9940]  text-2xl"/> PlanMake
        </Link>
        <p>
      PlanMake LTD Limited
      <br />
      By Ahanaf Mubasshir Rishad © {new Date().getFullYear()} - All right reserved
    </p>
    
    </aside>
  </footer>
  )
}

export default Footer