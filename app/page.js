import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="text-2xl text-black font-bold text-center mt-20">Hello, Welcome to my Personal Website</div>


      <div className="mt-4 text-center">
        <Link href="/portfolio" className="inline-block mt-2 px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-700 transition">Check out my Portfolio</Link>
      </div>

      <div className="mt-4 text-center">
        <Link href="/blog" className="inline-block mt-2 px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-700 transition">Check out my Blog</Link>
      </div>

      <div className="mt-60 ml-8 text-black"> To Contact me, please click below </div>

      <Link href="/contact" className="inline-block mt-4 ml-8 px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-700 transition">
        Contact Me
      </Link>
    </div>

  );
}
