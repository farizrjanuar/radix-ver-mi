export default function TeamCard({ name, role, bio, initial }) {
  return (
    <article className="group bg-secondary/40 rounded-3xl p-8 text-center hover-lift cursor-default">
      {/* Avatar placeholder */}
      <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6 transition-colors duration-300 group-hover:bg-accent/30">
        <span className="font-serif text-2xl font-bold text-accent">
          {initial}
        </span>
      </div>
      <h3 className="font-serif text-lg font-semibold text-dark">{name}</h3>
      <p className="text-sm font-medium text-accent mt-1 mb-4">{role}</p>
      <p className="text-sm leading-relaxed text-dark/70">{bio}</p>
    </article>
  );
}
