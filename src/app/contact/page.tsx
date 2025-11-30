"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <PageLayout title="Contact Me Here!">
      <p>
        Email:{" "}
        <a href="mailto:mjmorada@gbox.ncf.edu.ph" className="text-indigo-300 underline">
          mjmorada@gbox.ncf.edu.ph
        </a>
      </p>
      <p>Phone: +63 912 345 6789</p>
    </PageLayout>
  );
}

function PageLayout({ title, children }: any) {
  return (
    <div
      className="min-h-screen flex items-center justify-center font-sans"
      style={{
        backgroundImage: 'url("/me.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-lg text-center space-y-4 text-blue"
      >
        <h1 className="text-4xl font-bold">{title}</h1>

        <div className="space-y-2">{children}</div>

        <Link href="/">
          <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition">
            Go Back
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
