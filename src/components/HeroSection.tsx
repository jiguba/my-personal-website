import { AboutMe } from "./AboutMe";

export function HeroSection() {
  return (
    <section className="relative z-10 mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-12">
      <div className="md:col-span-5 mt-[10vh]">
        <AboutMe/>
      </div>

      <div className="md:col-span-7">
        {/* Intentionally empty — lets the loop cluster pop on the right */}
      </div>
    </section>
  );
}