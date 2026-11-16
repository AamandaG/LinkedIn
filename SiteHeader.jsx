const navigationItems = [
  { label: "Início", icon: "home" },
  { label: "Minha rede", icon: "people" },
  { label: "Vagas", icon: "briefcase" },
  { label: "Mensagens", icon: "message" },
  { label: "Notificações", icon: "bell" },
  { label: "Soluções", icon: "grid" },
];

function HeaderIcon({ name }) {
  const paths = {
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></>,
    home: <path d="M3 10.5 12 3l9 7.5v10a.5.5 0 0 1-.5.5H15v-7H9v7H3.5a.5.5 0 0 1-.5-.5z" />,
    people: <><circle cx="9" cy="8" r="4" /><circle cx="18" cy="9" r="3" /><path d="M1.5 20c.4-4 3-6 7.5-6s7.1 2 7.5 6zM16 14c4.2-.5 6.3 1.5 6.5 5H18" /></>,
    briefcase: <><path d="M9 5V3.5h6V5h4a2 2 0 0 1 2 2v12H3V7a2 2 0 0 1 2-2zM3 10h18M10 10v2h4v-2" /><path d="M3 14h18" /></>,
    message: <><path d="M3 4h18v14h-9l-5 3v-3H3z" /><circle cx="8" cy="11" r="1" /><circle cx="12" cy="11" r="1" /><circle cx="16" cy="11" r="1" /></>,
    bell: <><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /><path d="M12 1v2" /></>,
    grid: <><rect x="3" y="3" width="5" height="5" /><rect x="10" y="3" width="5" height="5" /><rect x="17" y="3" width="5" height="5" /><rect x="3" y="10" width="5" height="5" /><rect x="10" y="10" width="5" height="5" /><rect x="17" y="10" width="5" height="5" /><rect x="3" y="17" width="5" height="5" /><rect x="10" y="17" width="5" height="5" /><rect x="17" y="17" width="5" height="5" /></>,
  };

  return (
    <svg
      aria-hidden="true"
      className={`header-icon header-icon-${name}`}
      viewBox="0 0 24 24"
      fill={name === "search" || name === "briefcase" || name === "message" || name === "bell" ? "none" : "currentColor"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="site-header-left">
          <a className="linkedin-logo" href="#" aria-label="LinkedIn início">in</a>
          <div className="header-search" role="search">
            <label className="visually-hidden" htmlFor="site-search">Pesquisar</label>
            <button type="button" aria-label="Pesquisar"><HeaderIcon name="search" /></button>
            <input id="site-search" type="search" placeholder="Pesquisar" />
          </div>
        </div>
        <nav className="header-navigation" aria-label="Navegação principal">
          {navigationItems.map(({ label, icon }) => (
            <a
              className={`header-navigation-item${icon === "grid" ? " header-navigation-solutions" : ""}`}
              href="#"
              key={label}
              aria-current={icon === "home" ? "page" : undefined}
            >
              <HeaderIcon name={icon} />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
