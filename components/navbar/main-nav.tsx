"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  data: {
    id: string;
    name: string;
  }[];
};

const MainNav = ({ data }: Props) => {
  const pathname = usePathname();

  const routes = data.map((route, i) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <div className="flex items-center mx-6 space-x-4">
      {routes.map((route, i) => {
        return (
          <Link key={i} href={route.href}>
            {route.label}
          </Link>
        );
      })}
    </div>
  );
};

export default MainNav;
