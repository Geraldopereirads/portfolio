import { BsWhatsapp } from "react-icons/bs";
import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import { FaFilePdf } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Portfolio</a>
        <a href="">Tools</a>
        <a href="">Contact</a>
      </nav>

      <div>
        <a href="" title="WhatsApp">
          <BsWhatsapp size={25} />
        </a>
        <a href="" title="GitHub">
          <GrGithub size={25} />
        </a>
        <a href="" title="LinkeDin">
          <GrLinkedinOption size={25} />
        </a>
        <a href="">
          <FaFilePdf size={25} />
        </a>
        <a href="">
          <MdOutlineDarkMode size={25} />
        </a>
      </div>
    </header>
  );
};

export default Header;
