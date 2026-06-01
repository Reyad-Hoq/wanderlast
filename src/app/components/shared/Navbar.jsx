import { Link, Button } from "@heroui/react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <ul className="flex items-center gap-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/destinations">Destinations</Link></li>
            <li><Link href="/bookings">My Bookings</Link></li>
          </ul>
          <Image
            src={"/assets/wanderlast.png"}
            height={250}
            width={200}
            alt="wanderlast logo" />
          <ul className="flex items-center gap-4">
            <li><Link href="/profile">Profile</Link></li>
            <li><Link href="/login">login</Link></li>
            <li><Link href="/signup">signup</Link></li>
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;