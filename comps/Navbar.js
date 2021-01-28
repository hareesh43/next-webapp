import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">NinjaList</div>

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
<nav>
  <div className="logo">NinjaList</div>
</nav>;
