import Link from 'next/link'

export default function Home() {
  return (
    <div>
    <div>Hello, Welcome to my Development Page</div>
    <div> To Contact me, please click below </div>
    <Link href={"/contact"}>Contact Me</Link>

    <div>
    <Link  href="/portfolio">Check Out my Portfolio</Link>
    </div>

    </div>
    
  );
}
