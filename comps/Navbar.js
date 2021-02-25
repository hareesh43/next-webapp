import Link from "next/link";
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
      <Image src="/logo.png" height={90} width={128} ></Image>
      </div>

      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">About</Link>

      <Link href="/ninjas">
        <a>NinjaList</a>
      </Link>
    </nav>
  );
};

export default Navbar;
