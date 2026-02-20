<script setup>
import { ref } from 'vue';
const { locale, locales, setLocale } = useI18n();
const isMenuOpen = ref(false);

const changeLanguage = (code) => {
  if (locale.value === code) return;

  // Change locale immediately
  setLocale(code);

  // Trigger text animation by adding class
  document.body.classList.remove('lang-changing');
  void document.body.offsetWidth; // Force reflow
  document.body.classList.add('lang-changing');

  // Remove class after animation finishes (0.5s match CSS)
  setTimeout(() => {
    document.body.classList.remove('lang-changing');
  }, 600);

  if (isMenuOpen.value) closeMenu();
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};
const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};
</script>

<template>
  <header class="header">
    <div class="wrapper">
      <div class="logo">Alan<span>Reibel</span></div>

      <div class="header-actions">
        <div class="lang-switcher">
          <button v-for="loc in locales" :key="loc.code" @click="changeLanguage(loc.code)"
            :class="{ active: locale === loc.code }" class="lang-btn">
            {{ loc.code.toUpperCase() }}
          </button>
        </div>

        <button class="hamburger" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav class="nav" :class="{ 'is-open': isMenuOpen }">
        <ul>
          <li><a href="#about" @click="closeMenu">{{ $t('nav.about') }}</a></li>
          <li><a href="#experience" @click="closeMenu">{{ $t('nav.experience') }}</a></li>
          <li><a href="#skills" @click="closeMenu">{{ $t('nav.skills') }}</a></li>
          <li><a href="#services" @click="closeMenu">{{ $t('nav.services') }}</a></li>
          <li><a href="#contact" @click="closeMenu">{{ $t('nav.contact') }}</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--z-floating);
  padding: 1rem 0;
  background: rgba(2, 4, 32, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--glass-border);
  container-type: inline-size;

  .wrapper {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
      z-index: var(--z-overlay);

      span {
        color: var(--accent-primary);
      }
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      z-index: var(--z-overlay);
    }

    .lang-switcher {
      display: flex;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.05);
      padding: 0.25rem;
      border-radius: 20px;
      border: 1px solid var(--glass-border);
    }

    .lang-btn {
      background: none;
      border: none;
      color: var(--text-secondary);
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.4rem 0.8rem;
      cursor: pointer;
      border-radius: 15px;
      transition: all 0.3s ease;

      &:hover {
        color: var(--text-primary);
      }

      &.active {
        background: var(--accent-primary);
        color: white;
      }
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 6px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 5px;
      z-index: var(--z-overlay);

      span {
        display: block;
        width: 25px;
        height: 2px;
        background-color: var(--text-primary);
        transition: all 0.3s ease;
      }

      &.is-active {
        span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        span:nth-child(2) {
          opacity: 0;
        }

        span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      }
    }

    .nav {
      ul {
        display: flex;
        gap: 2.5rem;

        li {
          a {
            font-weight: 500;
            position: relative;
            padding: 0.5rem 0;
            transition: color 0.3s ease;

            &::after {
              content: "";
              position: absolute;
              width: 0;
              height: 2px;
              bottom: 0;
              left: 0;
              background-color: var(--accent-primary);
              transition: width 0.3s ease;
            }

            &:hover {
              color: var(--accent-primary);

              &::after {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}

@container (max-width: 768px) {
  .header {
    .wrapper {
      .hamburger {
        display: flex;
      }

      .nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100vh;
        background: rgba(2, 4, 32, 0.98);
        backdrop-filter: blur(20px);
        padding: 8rem 2rem;
        transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        justify-content: center;

        &.is-open {
          right: 0;
        }

        ul {
          flex-direction: column;
          gap: 3rem;
          align-items: center;

          li a {
            font-size: 1.8rem;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
