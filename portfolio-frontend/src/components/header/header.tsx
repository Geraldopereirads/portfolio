import { BsWhatsapp } from "react-icons/bs";
import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import { FaFilePdf } from "react-icons/fa6";
import { MdOutlineDarkMode, MdClose } from "react-icons/md";
import { RiMenuAddLine } from "react-icons/ri";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <header
      className="flex flex-row items-center justify-between bg-header textHeader h-[4.5rem] p-4 sticky top-0 z-10"
      onClick={() => setNav(!nav)}
    >
      {nav ? (
        <>
          <button className="md:hidden flex hover">
            <MdClose className="z-10" size={30} />
          </button>

          <div className="md:hidden flex w-full h-screen bg-black fixed top-0 left-0 right-0 z-10">
            <nav className=" justify-between px-4 mx-auto lg:max-w-7x1 md:items-center md:flex md:px-8 ">
              <a className="hover" href="">
                Home
              </a>
              <a className="hover" href="">
                About
              </a>
              <a className="hover" href="">
                Portfolio
              </a>
              <a className="hover" href="">
                Tools
              </a>
              <a className="hover" href="">
                Contact
              </a>
            </nav>
          </div>
        </>
      ) : (
        <>
          <button className="md:hidden flex hover">
            <RiMenuAddLine className="z-10" size={30} />
          </button>

          <div className="hidden md:block">
            <nav className="flex gap-4 ">
              <a className="hover" href="">
                Home
              </a>
              <a className="hover" href="">
                About
              </a>
              <a className="hover" href="">
                Portfolio
              </a>
              <a className="hover" href="">
                Tools
              </a>
              <a className="hover" href="">
                Contact
              </a>
            </nav>
          </div>
        </>
      )}

      <section className="flex  flex-row  align-center gap-4">
        <a className="hover" href="" title="WhatsApp">
          <BsWhatsapp size={25} />
        </a>
        <a className="hover" href="" title="GitHub">
          <GrGithub size={25} />
        </a>
        <a className="hover" href="" title="LinkeDin">
          <GrLinkedinOption size={25} />
        </a>
        <a className="hover" href="">
          <FaFilePdf size={25} />
        </a>
        <a className="hover" href="">
          <MdOutlineDarkMode size={25} />
        </a>
      </section>
    </header>
  );
};

export default Header;
