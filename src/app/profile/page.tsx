import { Container } from "@/components/container";
import Image from "next/image";
import userImg from "/public/user.png";
import { FaShareAlt } from "react-icons/fa";
import { FavoriteCard } from "./components/favorite";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meu perfil - DalyGames",
  description: "Perfil Herbert Kayky",
};

export default function Profile() {
  return (
    <main className="w-full text-black">
      <Container>
        <section className="flex flex-col items-center justify-between relative gap-3 sm:flex-row mt-8 mb-6">
          <div className="w-full flex items-center text-lg gap-4 flex-col sm:flex-row justify-center sm:justify-normal">
            <Image
              src={userImg}
              alt="Imagem do perfil do usuário"
              className="rounded-full w-56 h-56 object-cover"
            />
            <h1 className="font-bold text-2xl">Herbert Kayky</h1>
          </div>

          <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center">
            <button className="bg-gray-700 text-white rounded-lg px-3 py-2">
              Configurações
            </button>
            <button className="bg-gray-700 rounded-lg px-3 py-2">
              <FaShareAlt size={24} color="#FFF" />
            </button>
          </div>
        </section>

        <section className="flex flex-wrap gap-5 flex-col md:flex-row">
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
        </section>
      </Container>
    </main>
  );
}
