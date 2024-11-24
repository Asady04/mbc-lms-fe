'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from './navbar';

const NavbarCondition = () => {
  const pathname = usePathname();

  // Define URLs where the Navbar should be hidden
  const hideNavbarPaths = ['/login', '/signup'];

  const shouldHideNavbar = hideNavbarPaths.includes(pathname);

  return (
    <div>
      {!shouldHideNavbar && <Navbar />}
    </div>
  );
};

export default NavbarCondition;
