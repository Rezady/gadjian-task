function NavbarItem() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#sidebarMenu"
        aria-controls="#sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand My-auto" href="#">
        Gadjian
      </a>
    </nav>
  );
}

export default NavbarItem;
