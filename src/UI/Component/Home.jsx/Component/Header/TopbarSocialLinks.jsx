import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';

const TopbarSocialLinks = () => {
  return (
    <div className="topbar-social-links mt-md-2">
      <ul>
        <li>
          <a href="#">
            <BsFacebook />
          </a>
        </li>
        <li>
          <a href="#">
            <BsTwitter />
          </a>
        </li>
        <li>
          <a href="#">
            <BsInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <BsYoutube />
          </a>
        </li>     
      </ul>
    </div>
  );
};

export default TopbarSocialLinks;