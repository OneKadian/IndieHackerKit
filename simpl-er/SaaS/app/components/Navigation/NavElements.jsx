"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

//  Don't forget to add the href as an id to the desired section my friend!

const NavElements = () => {
  const pathname = usePathname();

  const navigation = [
    { name: "Pricing", href: "#pricing-section2" },
    { name: "Stack", href: "#stack-section" },
    // { name: "Members", href: "/members" },
    { name: "FAQ", href: "#faq-section" },
    { name: "Work with me", href: "https://cal.com/onekadian/30min" },
  ];

  const membersNavigation = [
    { name: "Home", href: "/" },
    {
      name: "Billing",
      href: "https://billing.stripe.com/p/login/test_3csaG2csp7sj8wwbII",
    },
  ];

  const memoizedNavigation = useMemo(() => {
    switch (pathname) {
      case "/members":
        return membersNavigation;
      case "/sign-in":
        return membersNavigation;
      case "/":
        return navigation;
      // ...other cases
      default:
        return navigation;
    }
  }, [pathname, navigation, membersNavigation]);

  const handleScroll = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.getElementById(href.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Redirect to external links or routes
      const router = useRouter();
      router.push(href, { scroll: false });
    }
  };

  return (
    <div className="hidden lg:flex lg:gap-x-12">
      {memoizedNavigation.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          className="text-lg font-semibold leading-6 text-gray-100"
          // onClick={(e) => handleScroll(e, item.href.substring(1))}
          onClick={(e) => handleScroll(e, item.href)}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavElements;
