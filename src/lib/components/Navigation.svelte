<script lang="ts">
  import { onMount } from 'svelte';
  import type { NavigationLink } from '$lib/types/index';

  const navigationLinks: NavigationLink[] = [
    { href: '#services-section', label: 'Services' },
    { href: '#client-logos-section', label: 'Clients' },
    { href: '#aboutus-section', label: 'About Me' },
    { href: '#gallery-section', label: 'Gallery' },
  ];

  let isMobileMenuOpen = $state(false);
  let isScrolled = $state(false);

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  $effect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  });

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function handleNavClick(href: string) {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    isMobileMenuOpen = false;
  }
</script>

<nav
  aria-label="Main navigation"
  class="main-navbar {isScrolled ? 'scrolled' : ''}"
  id="main-navbar"
>
  <div class="navbar-container">
    <a href="/" class="navbar-logo-link">
      <div class="navbar-logo-wrapper">
        <span class="logo-text">Krister Alasaarela</span>
      </div>
    </a>

    <div
      role="navigation"
      aria-label="Primary links"
      class="navbar-links-desktop"
    >
      {#each navigationLinks as link}
        <button
          type="button"
          role="link"
          class="nav-link"
          onclick={() => handleNavClick(link.href)}
        >
          {link.label}
        </button>
      {/each}
    </div>

    <a
      href="https://calendar.app.google/VSL5R4En4SjyGSfR7"
      class="navbar-contact-link-desktop"
    >
      <button type="button" class="nav-button-contact">
        Book a discovery call
      </button>
    </a>

    <div class="navbar-mobile-menu-button-wrapper">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu-content"
        class="mobile-menu-toggle"
        onclick={toggleMobileMenu}
      >
        <svg class="menu-icon" aria-hidden="true" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div
    id="mobile-menu-content"
    class="mobile-menu-marzipan {isMobileMenuOpen ? 'active' : ''}"
    role="dialog"
    aria-modal="true"
    aria-label="Mobile navigation"
  >
    <div class="mobile-menu-header-marzipan">
      <a href="/" aria-label="Home" class="mobile-menu-logo-link">
        Krister Alasaarela
      </a>
      <button
        type="button"
        aria-label="Close menu"
        class="mobile-menu-close-button-marzipan"
        onclick={toggleMobileMenu}
      >
        <svg class="menu-icon" aria-hidden="true" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <div class="mobile-menu-main-content-marzipan">
      <div class="mobile-menu-cta-heading">
        Let's start creating together
      </div>
      <a href="https://calendar.app.google/VSL5R4En4SjyGSfR7">
        <button
          class="mobile-menu-contact-button-marzipan"
          aria-label="Contact us"
        >
          Book a discovery call
        </button>
      </a>
      <hr class="mobile-menu-divider-marzipan" aria-hidden="true" />
      <div class="mobile-menu-nav-links-marzipan" role="menu">
        {#each navigationLinks as link}
          <div
            role="menuitem"
            class="mobile-menu-link-item-marzipan"
          >
            <div class="mobile-menu-link-content">
              <button
                type="button"
                role="link"
                class="mobile-menu-nav-link-text-marzipan"
                onclick={() => handleNavClick(link.href)}
              >
                {link.label}
              </button>
              <div
                class="mobile-menu-link-line-marzipan"
                aria-hidden="true"
              ></div>
              <span
                class="mobile-menu-link-icon-marzipan"
                aria-hidden="true"
              >
                +
              </span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</nav>
