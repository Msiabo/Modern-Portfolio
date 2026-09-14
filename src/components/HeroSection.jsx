import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — TEXT */}
          <div className="text-center md:text-left space-y-6">

            <p className="text-primary font-medium opacity-0 animate-fade-in">
              SOFTWARE DEVELOPER
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">
                Hi, I'm{" "}
              </span>

              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                Siyabonga
              </span>

              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                Mhlongo
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              I build modern web applications and digital solutions
              using technologies such as React, Node.js, Express,
              MongoDB, JavaScript and TypeScript.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a
                href="#projects"
                className="cosmic-button inline-flex items-center"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* RIGHT — PROFILE IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110" />

              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 border border-primary/30 bg-background">

                <img
                  src="/profile.jpg"
                  alt="Siyabonga Mhlongo"
                  className="w-full h-full rounded-full object-cover"
                />

              </div>

              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-primary/20 animate-pulse" />

            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          Scroll
        </span>

        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};