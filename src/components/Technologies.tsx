import { useMultipleScrollReveal } from "@/hooks/useScrollReveal";

const technologies = [
  {
    name: "HTML5",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path
          fill="currentColor"
          d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
        />
        <path fill="currentColor" opacity="0.8" d="M64 116.8l36.378-10.086 8.559-95.878H64z" />
        <path
          fill="hsl(var(--background))"
          d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
        />
        <path
          fill="hsl(var(--foreground))"
          d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
        />
      </svg>
    ),
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path
          fill="currentColor"
          d="M19.67 113.876L9.66 1.661h109.936l-10.016 112.198-45.148 12.48z"
        />
        <path fill="currentColor" opacity="0.8" d="M64 116.8l36.51-10.086 8.56-95.878H64z" />
        <path
          fill="hsl(var(--background))"
          d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
        />
        <path
          fill="hsl(var(--foreground))"
          d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
        />
      </svg>
    ),
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path fill="currentColor" d="M2 1h124v124H2z" />
        <path
          fill="hsl(var(--background))"
          d="M69.558 106.378c2.496 4.088 5.742 7.092 11.488 7.092 4.825 0 7.913-2.413 7.913-5.746 0-3.992-3.168-5.408-8.488-7.736l-2.914-1.25c-8.413-3.584-14-8.08-14-17.58 0-8.747 6.665-15.413 17.08-15.413 7.418 0 12.746 2.58 16.584 9.332l-9.08 5.83c-2-3.584-4.16-5-7.504-5-3.413 0-5.58 2.168-5.58 5 0 3.5 2.167 4.913 7.168 7.08l2.914 1.25c9.913 4.25 15.5 8.58 15.5 18.33 0 10.5-8.246 16.25-19.33 16.25-10.83 0-17.83-5.166-21.25-11.92l9.5-5.52zm-40.25.5c1.917 3.413 3.667 6.33 7.917 6.33 4.08 0 6.666-1.58 6.666-7.75V65.496h11.75v40.044c0 12.75-7.5 18.58-18.416 18.58-9.83 0-15.5-5.08-18.417-11.25l10.5-5.992z"
        />
      </svg>
    ),
    color: "#F7DF1E",
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path
          fill="currentColor"
          d="M64 14.186c-1.598 0-3.116.417-4.471 1.167L17.84 40.233c-2.792 1.625-4.51 4.625-4.51 7.833v49.854c0 3.208 1.718 6.208 4.51 7.833l41.689 24.88c2.792 1.625 6.15 1.625 8.942 0l41.689-24.88c2.792-1.625 4.51-4.625 4.51-7.833V48.066c0-3.208-1.718-6.208-4.51-7.833L68.471 15.353a8.845 8.845 0 00-4.471-1.167z"
        />
        <path
          fill="hsl(var(--background))"
          d="M88.564 83.333c0 4.083-2.125 7.875-5.604 10.042l-14.854 8.646a11.116 11.116 0 01-11.208 0l-14.854-8.646c-3.479-2.167-5.604-5.959-5.604-10.042V66.208c0-4.083 2.125-7.875 5.604-10.042l14.854-8.645a11.116 11.116 0 0111.208 0l14.854 8.645c3.479 2.167 5.604 5.959 5.604 10.042v17.125z"
        />
      </svg>
    ),
    color: "#339933",
  },
  {
    name: "Git",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path
          fill="currentColor"
          d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 000-11.5z"
        />
      </svg>
    ),
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="currentColor"
          d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
        />
      </svg>
    ),
    color: "#ffffff",
  },
];

export default function Technologies() {
  const { visibleItems, setRef } = useMultipleScrollReveal(technologies.length);

  return (
    <section id="technologies" className="py-20 md:py-32 relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary neon-text">Tecnologias</span> que Domino
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ferramentas e linguagens que utilizo para criar soluções digitais 
            modernas e eficientes.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              ref={setRef(index)}
              className={`glass rounded-2xl p-6 flex flex-col items-center gap-4 group hover:border-primary/50 hover:scale-105 transition-all duration-500 cursor-pointer ${
                visibleItems[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div
                className="text-primary group-hover:scale-110 transition-transform duration-300"
                style={{ filter: `drop-shadow(0 0 10px ${tech.color}40)` }}
              >
                {tech.icon}
              </div>
              <span className="font-display font-medium text-sm text-center group-hover:text-primary transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="font-display text-xl font-semibold mb-6 text-muted-foreground">
            Também estou aprendendo
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "TypeScript", "PostgreSQL", "Docker", "AWS", "Tailwind CSS"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 glass rounded-full text-sm font-medium hover:border-primary/50 hover:text-primary transition-all cursor-default"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
