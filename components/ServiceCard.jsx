export default function ServiceCard({ icon, title, description, prices, duration }) {
  return (
    <article className="group bg-secondary/40 rounded-3xl p-8 hover-lift cursor-default flex flex-col">
      <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-accent/30">
        <span className="text-2xl" role="img" aria-hidden="true">
          {icon}
        </span>
      </div>
      <h3 className="font-serif text-xl font-semibold text-dark mb-3">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-dark/70 mb-4 flex-grow">{description}</p>
      
      {duration && (
        <p className="text-xs text-dark/50 mb-3">⏱ {duration}</p>
      )}

      {prices && prices.length > 0 && (
        <div className="mt-auto pt-4 border-t border-dark/10 space-y-1.5">
          {prices.map((price, idx) => (
            <div key={idx} className="flex items-center justify-between text-sm">
              <span className="text-dark/60">{price.label}</span>
              <span className="font-semibold text-accent">{price.value}</span>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
