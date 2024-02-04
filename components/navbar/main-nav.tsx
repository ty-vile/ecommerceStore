"use client";

import { cn } from "@/lib/utils";
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
    href: `/category/${route.name.toLocaleLowerCase()}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <div className="flex items-center mx-6 space-x-4">
      {routes.map((route, i) => {
        return (
          <Link
            key={i}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-black",
              route.active ? "text-black" : "text-neutral-500"
            )}
          >
            {route.label}
          </Link>
        );
      })}
    </div>
  );
};

export default MainNav;
