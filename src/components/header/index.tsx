import Image from "next/image";
import Link from "next/link";
import logoImg from "/public/logo.svg";
import { LiaGamepadSolid } from "react-icons/lia";

export function Header() {
  return (
    <header className="w-full h-24 bg-slate-100 text-black px-2 ">
      <div className="w-full max-w-screen-xl mx-auto flex justify-center items-center h-24 sm:justify-between">
        <nav className="flex justify-center items-center gap-4 ">
          <Link href="/">
            <Image
              src={logoImg}
              alt="Logo do site"
              quality={100}
              priority={true}
            />
          </Link>

          <Link href="/">Games</Link>

          <Link href="/profile">Perfil</Link>
        </nav>

        <div className="hidden sm:flex justify-center ">
          <Link href="/profile">
            <LiaGamepadSolid size={34} color="#475569" />
          </Link>
        </div>
      </div>
    </header>
  );
}
