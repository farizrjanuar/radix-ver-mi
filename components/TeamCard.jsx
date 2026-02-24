import Image from "next/image";

export default function TeamCard({ name, role, bio, initial, photo }) {
  return (
    <article className="group bg-secondary/40 rounded-3xl p-8 text-center hover-lift cursor-default">
      {/* Avatar */}
      <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-6 border-4 border-accent/20 transition-all duration-300 group-hover:border-accent/40">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            width={112}
            height={112}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full bg-accent/20 flex items-center justify-center">
            <span className="font-serif text-2xl font-bold text-accent">
              {initial}
            </span>
          </div>
        )}
      </div>
      <h3 className="font-serif text-lg font-semibold text-dark">{name}</h3>
      <p className="text-sm font-medium text-accent mt-1 mb-4">{role}</p>
      <p className="text-sm leading-relaxed text-dark/70">{bio}</p>
    </article>
  );
}
