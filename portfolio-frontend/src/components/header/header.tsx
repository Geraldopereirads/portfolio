import { BsWhatsapp } from "react-icons/bs";
import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import { FaFilePdf } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex flex-row align-center justify-between bg-header text-gray-100 h-[4.5rem]">
      <nav className="flex gap-2.5">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Portfolio</a>
        <a href="">Tools</a>
        <a href="">Contact</a>
      </nav>

      <section className="flex  flex-row  align-center gap-2.5">
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
      </section>
    </header>
  );
};

export default Header;
