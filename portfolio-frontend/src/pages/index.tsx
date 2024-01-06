import Header from "@/components/header/header";
import fullstackDeveloper from "../assets/img/homePage/dev.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[url('../assets/img/background/backgroundDark.svg')] flex flex-row align-center justify-between min-h-screen text-gray-100">
        <div>
          <h1 className="text">
            <small>Hello</small> <br />
            I&#39;m Geraldo Pereira, Full-Stack Developer
          </h1>
          <h2 className="text">Welcome to my portfolio website</h2>
          <a href="" className="text">
            Discover more about me
          </a>
        </div>

        <Image
          src={fullstackDeveloper}
          alt="Desenvolvedor Full-Stack"
          width={300}
          height={200}
        />
      </main>
    </>
  );
}
