export default function ServiceCard({ icon, title, description }) {
  return (
    <article className="group bg-secondary/40 rounded-3xl p-8 hover-lift cursor-default">
      <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-accent/30">
        <span className="text-2xl" role="img" aria-hidden="true">
          {icon}
        </span>
      </div>
      <h3 className="font-serif text-xl font-semibold text-dark mb-3">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-dark/70">{description}</p>
    </article>
  );
}
