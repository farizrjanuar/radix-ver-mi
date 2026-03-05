export default function ServiceCard({ icon, title, description, prices, duration, ageBadge, packages }) {
  return (
    <article className="group bg-secondary/40 rounded-3xl p-8 hover-lift cursor-default flex flex-col relative overflow-hidden">
      {/* Age ribbon/bookmark */}
      {ageBadge && (
        <div className="absolute top-0 right-6 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-b-xl shadow-md">
          {ageBadge}
        </div>
      )}

      <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-accent/30">
        <span className="text-2xl" role="img" aria-hidden="true">
          {icon}
        </span>
      </div>
      <h3 className="font-serif text-xl font-semibold text-dark mb-3">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-dark/90 mb-4 flex-grow">{description}</p>
      
      {duration && (
        <p className="text-sm font-medium text-dark/80 mb-3">⏱ {duration}</p>
      )}

      {prices && prices.length > 0 && (
        <div className="mt-auto pt-4 border-t border-dark/20 space-y-1.5">
          {prices.map((price, idx) => (
            <div key={idx} className="flex items-center justify-between text-sm">
              <span className="text-dark/80">{price.label}</span>
              <span className="font-bold text-dark">{price.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Packages sub-section */}
      {packages && packages.length > 0 && (
        <div className="mt-4 space-y-3">
          {packages.map((pkg, idx) => (
            <div key={idx} className="bg-primary/80 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm" role="img" aria-hidden="true">{pkg.icon}</span>
                <h4 className="text-sm font-semibold text-dark">{pkg.title}</h4>
              </div>
              {pkg.note && (
                <p className="text-xs text-dark/70 mb-2">{pkg.note}</p>
              )}
              <div className="space-y-1">
                {pkg.prices.map((price, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-dark/80">{price.label}</span>
                    <span className="font-bold text-dark">{price.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
