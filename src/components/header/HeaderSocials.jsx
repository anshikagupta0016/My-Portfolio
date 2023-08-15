import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/anshika-gupta-644501214" target="_blank" rel="noreferrer" ><BsLinkedin/></a>
        <a href="https://github.com/anshikagupta0016" target="_blank" rel="noreferrer"><FaGithub/></a>
    </div>
    )
}

export default HeaderSocials