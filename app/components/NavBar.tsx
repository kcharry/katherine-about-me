import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="p-4 border-white flex text-lg bg-[#a0d0f2] font-bold">
        <div className="ml-auto flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/project">Projects</Link>
        </div>
    </nav>  
  );
}