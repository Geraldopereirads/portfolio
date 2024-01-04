import Header from "@/components/header/header";
import fullstackDeveloper from "../assets/img/homePage/dev.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>
            <small>Hello</small> <br />
            I&#39;m Geraldo Pereira, Full-Stack Developer
          </h1>
          <h2>Welcome to my portfolio website</h2>
          <a href="">Discover more about me</a>
        </div>

        <Image
          src={fullstackDeveloper}
          alt="Full Stack Developer"
          width={300}
          height={200}
        />
      </main>
    </>
  );
}
