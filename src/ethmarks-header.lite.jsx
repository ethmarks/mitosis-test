import { useStore } from "@builder.io/mitosis";

export default function EthmarksHeader(props) {
  const state = useStore({
    navItems: [
      { name: "Home", href: "https://ethmarks.github.io/" },
      { name: "About", href: "https://ethmarks.github.io/about/" },
      { name: "Posts", href: "https://ethmarks.github.io/posts/" },
      { name: "Blips", href: "https://ethmarks.github.io/blips/" },
      { name: "Projects", href: "https://ethmarks.github.io/tags/projects/" },
    ],
    get isActive() {
      return (linkName) => {
        return props.active?.toLowerCase() === linkName.toLowerCase();
      };
    },
  });

  return (
    <header>
      <a
        href="https://ethmarks.github.io/"
        id="title"
        tabindex="0"
        aria-label="Home"
      >
        Ethan Marks
      </a>
      <nav>
        {state.navItems.map((item) => (
          <a
            key={item.name}
            id={`nav-${item.name.toLowerCase()}`}
            class={state.isActive(item.name) ? "staggered active" : "staggered"}
            href={item.href}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
