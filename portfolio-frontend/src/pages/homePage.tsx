import { NextPage } from "next";
import Image from "next/image";

export const homePage: NextPage = () => {
  return (
    <main>
      <div>
        <h1>
          <small>Olá</small> Eu sou Geraldo Pereira, Desenvolvedor Full-Stack
        </h1>
        <small>Seja bem-vindo ao meu portfólio website</small>
        <button>Saiba mais sobre mim</button>
      </div>
      <Image
        src="../assets/img/homePage/dev.svg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </main>
  );
};
