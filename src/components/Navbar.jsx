import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full",
          "border-b border-transparent",
          "transition-all duration-300 ease-in-out",
          isScrolled
            ? "border-border/40 bg-background/85 py-3 shadow-sm backdrop-blur-xl"
            : "bg-transparent py-4 sm:py-5"
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={closeMenu}
            className="group flex min-w-0 items-center"
          >
            <span className="text-sm font-bold tracking-tight text-primary transition-colors duration-300 sm:text-base md:text-lg lg:text-xl">
              <span className="text-glow text-foreground">
                Siyabonga Mhlongo
              </span>
              <span className="ml-1 text-primary sm:ml-2">
                Portfolio
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-1 py-2 text-sm font-medium text-foreground/75 transition-colors duration-300 hover:text-primary lg:text-base"
              >
                {item.name}

                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={cn(
              "relative z-[60] flex h-10 w-10 items-center justify-center",
              "rounded-lg border border-border/50",
              "bg-background/70 text-foreground",
              "transition-all duration-300",
              "hover:bg-primary hover:text-primary-foreground",
              "focus:outline-none focus:ring-2 focus:ring-primary/50",
              "md:hidden"
            )}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={22} strokeWidth={2} />
            ) : (
              <Menu size={22} strokeWidth={2} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          "bg-background/95 backdrop-blur-xl",
          "transition-all duration-300 ease-in-out",
          isMenuOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        )}
      >
        <div className="flex min-h-screen items-center justify-center px-6 pb-20 pt-24">
          <div className="flex w-full max-w-sm flex-col items-center">
            
            {/* Mobile Menu Links */}
            <div className="flex w-full flex-col gap-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "group flex w-full items-center justify-center",
                    "rounded-xl px-6 py-4",
                    "text-lg font-semibold text-foreground/80",
                    "transition-all duration-300",
                    "hover:bg-primary/10 hover:text-primary",
                    "active:scale-[0.98]"
                  )}
                  style={{
                    transitionDelay: isMenuOpen
                      ? `${index * 50}ms`
                      : "0ms",
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="mt-10 text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Siyabonga Mhlongo
              </p>

              <p className="mt-2 text-sm text-muted-foreground/70">
                Full Stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};