import Link from "next/link";

export default function About() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 p-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-extrabold mb-6">About Me</h1>
  
          <p className="text-lg leading-relaxed">
            Hello! I'm Mark Jhon Morada from BSCS 2A.
          </p>
  
          <p className="text-lg leading-relaxed mt-4">
            On this website, you’ll get to know more about me — my hobbies, my
            school, my personal motto in life, and my hobbbies.
          </p>
  
          <p className="text-lg leading-relaxed mt-6 font-semibold text-blue-600">
            This website was created for school purposes only — as part of a activity
            in ADET subject creativity through web development.
          </p>
          <Link href="/">
          <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition">
            Go Back
          </button>
        </Link>
        </div>
      </div>
    );
  }
  
