"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";

export function Input() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSearch(e: FormEvent) {
    e.preventDefault();

    if (input === "") return;

    router.push(`/game/search/${input}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="w-full flex bg-slate-200 my-6 gap-2 rounded justify-between items-center p-3"
    >
      <input
        className="bg-slate-200 outline-none w-11/12"
        type="text"
        placeholder="Procurando algum jogo?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        <FiSearch size={24} color="#ea580c" />
      </button>
    </form>
  );
}
