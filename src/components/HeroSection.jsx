import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="
        relative flex min-h-screen w-full items-center justify-center
        overflow-hidden px-4 pb-20 pt-28
        sm:px-6 sm:pb-24 sm:pt-32
        lg:px-8 lg:pt-24
      "
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute left-1/2 top-1/4
            h-64 w-64 -translate-x-1/2
            rounded-full bg-primary/10 blur-3xl
            sm:h-80 sm:w-80
            lg:h-96 lg:w-96
          "
        />
      </div>

      <div
        className="
          relative z-10 mx-auto w-full max-w-7xl
          px-2 sm:px-4 lg:px-8
        "
      >
        <div
          className="
            grid items-center
            gap-12
            md:grid-cols-2 md:gap-10
            lg:gap-16
            xl:gap-24
          "
        >
          {/* =========================================
              LEFT — TEXT
          ========================================== */}
          <div
            className="
              order-2 text-center
              md:order-1 md:text-left
            "
          >
            {/* Small heading */}
            <p
              className="
                mb-4 text-xs font-semibold tracking-[0.2em]
                text-primary opacity-0
                animate-fade-in
                sm:text-sm
              "
            >
              SOFTWARE DEVELOPER
            </p>

            {/* Main heading */}
            <h1
              className="
                text-4xl font-bold leading-[1.1] tracking-tight
                opacity-0 animate-fade-in
                sm:text-5xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              <span className="block sm:inline">Hi, I'm </span>

              <span className="text-primary">
                Siyabonga
              </span>

              <span
                className="
                  block text-gradient
                  sm:ml-2 sm:inline
                "
              >
                Mhlongo
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mx-auto mt-6 max-w-xl
                text-base leading-7
                text-muted-foreground
                opacity-0 animate-fade-in-delay-3
                sm:text-lg sm:leading-8
                md:mx-0
                lg:text-xl
              "
            >
              I build modern web applications and digital solutions
              using technologies such as{" "}
              <span className="text-foreground">
                React, Node.js, Express, MongoDB, JavaScript
              </span>{" "}
              and{" "}
              <span className="text-foreground">
                TypeScript.
              </span>
            </p>

            {/* CTA */}
            <div
              className="
                mt-7 flex flex-col items-center gap-4
                opacity-0 animate-fade-in-delay-4
                sm:flex-row
                md:justify-start
              "
            >
              <a
                href="#projects"
                className="
                  cosmic-button
                  inline-flex w-full items-center justify-center
                  px-6 py-3
                  sm:w-auto
                "
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="
                  inline-flex w-full items-center justify-center
                  rounded-full border border-border
                  px-6 py-3
                  text-sm font-medium
                  text-foreground
                  transition-all duration-300
                  hover:border-primary
                  hover:text-primary
                  sm:w-auto
                "
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* =========================================
              RIGHT — PROFILE IMAGE
          ========================================== */}
          <div
            className="
              order-1 flex justify-center
              md:order-2 md:justify-end
            "
          >
            <div
              className="
                relative
                w-52 h-52
                sm:h-60 sm:w-60
                md:h-64 md:w-64
                lg:h-80 lg:w-80
                xl:h-96 xl:w-96
              "
            >
              {/* Main glow */}
              <div
                className="
                  absolute inset-0
                  rounded-full
                  bg-primary/20
                  blur-3xl
                  scale-90
                  sm:scale-100
                "
              />

              {/* Image container */}
              <div
                className="
                  relative h-full w-full
                  rounded-full
                  border border-primary/30
                  bg-background
                  p-1.5
                  shadow-2xl
                  sm:p-2
                "
              >
                <img
                  src="/profile.jpg"
                  alt="Siyabonga Mhlongo"
                  className="
                    h-full w-full
                    rounded-full
                    object-cover
                    object-center
                  "
                />
              </div>

              {/* Outer decorative ring */}
              <div
                className="
                  pointer-events-none
                  absolute -inset-2
                  rounded-full
                  border border-primary/20
                  animate-pulse
                  sm:-inset-3
                "
              />

              {/* Second decorative ring */}
              <div
                className="
                  pointer-events-none
                  absolute -inset-5
                  rounded-full
                  border border-primary/10
                  hidden sm:block
                "
              />

              {/* Small decorative dot */}
              <div
                className="
                  absolute right-2 top-6
                  h-3 w-3 rounded-full
                  bg-primary
                  shadow-lg shadow-primary/50
                  sm:right-3 sm:top-8
                  lg:right-4
                "
              />

              <div
                className="
                  absolute bottom-8 left-2
                  h-2.5 w-2.5 rounded-full
                  bg-primary/70
                  sm:left-3
                  lg:left-4
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          SCROLL INDICATOR
      ========================================== */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="
          absolute bottom-5 left-1/2
          flex -translate-x-1/2
          flex-col items-center
          animate-bounce
          sm:bottom-7
        "
      >
        <span
          className="
            mb-1 text-[10px]
            uppercase tracking-[0.2em]
            text-muted-foreground
            sm:mb-2 sm:text-xs
          "
        >
          Scroll
        </span>

        <ArrowDown
          className="
            h-4 w-4 text-primary
            sm:h-5 sm:w-5
          "
        />
      </a>
    </section>
  );
};