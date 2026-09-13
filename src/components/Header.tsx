import { navigation, profile } from "../data/profile";

export function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav container" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Giuliano Testino home">
          {profile.name}
        </a>
        <div className="nav-links">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
