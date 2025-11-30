"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center font-sans text-gray-200 bg-gradient-to-br from-gray-900 via-purple-900 to-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center p-6 max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20"
      >
       
        <div className="flex justify-center mb-10">
          <Image
            src="/134014536089754221.jpg"
            width={150}
            height={150}
            alt="My Picture"
            className="rounded-full shadow-2xl border-4 border-white/40"
          />
        </div>

        <h1 className="text-5xl font-extrabold text-white mb-6">
          Welcome to My Website
        </h1>

        <p className="text-gray-300 mb-6">
          Choose a section about me.
        </p>

        <div className="space-y-4">
          <LinkButton href="/hobbies" label="My Hobbies" />
          <LinkButton href="/school" label="My School" />
          <LinkButton href="/motto" label="Motto in Life" />
          <LinkButton href="/contact" label="Contact Me" />
          <LinkButton href="/about" label="About" />
        </div>
      </motion.div>
    </div>
  );
}

function LinkButton({ href, label }: any) {
  return (
    <Link href={href}>
      <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105">
        {label}
      </button>
    </Link>
  );
}
