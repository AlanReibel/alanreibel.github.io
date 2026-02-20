<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
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

      <button class="hamburger" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="nav" :class="{ 'is-open': isMenuOpen }">
        <ul>
          <li><a href="#about" @click="closeMenu">About</a></li>
          <li><a href="#experience" @click="closeMenu">Experience</a></li>
          <li><a href="#skills" @click="closeMenu">Skills</a></li>
          <li><a href="#services" @click="closeMenu">Services</a></li>
          <li><a href="#contact" @click="closeMenu">Contact</a></li>
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
