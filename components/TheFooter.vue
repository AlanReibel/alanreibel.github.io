<script setup>
const { personalInfo } = useCvData();
const year = new Date().getFullYear();
</script>

<template>
  <footer id="contact" class="footer">
    <div class="wrapper">
      <h2 class="title">Let's Work Together</h2>
      <p class="subtitle">
        I'm always open to discussing product design work or partnership
        opportunities.
      </p>

      <a :href="'mailto:' + personalInfo.email" class="email">{{
        personalInfo.email
      }}</a>

      <div class="social">
        <a :href="personalInfo.github" target="_blank" class="link">GitHub</a>
        <a :href="personalInfo.linkedin" target="_blank" class="link">LinkedIn</a>
      </div>

      <p class="copyright">
        © {{ year }} {{ personalInfo.name }}. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 4rem 0 2rem;
  margin-top: 4rem;
  border-top: 1px solid var(--glass-border);
  background: rgba(2, 4, 32, 0.4);

  .wrapper {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .title {
      font-size: clamp(1.8rem, 10vw, 2.5rem);
      margin-bottom: 1rem;
      background: var(--gradient-text);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .subtitle {
      color: var(--text-secondary);
      margin-bottom: 2rem;
      max-width: 600px;
      line-height: 1.6;
    }

    .email {
      font-size: 1.8rem;
      color: var(--accent-primary);
      margin-bottom: 2.5rem;
      font-weight: 700;
      transition:
        color 0.3s ease,
        transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
        color: var(--accent-secondary);
      }
    }

    .social {
      display: flex;
      gap: 2.5rem;
      margin-bottom: 3rem;

      .link {
        color: var(--text-primary);
        font-size: 1.1rem;
        position: relative;
        padding-bottom: 5px;

        &::after {
          content: "";
          position: absolute;
          width: 0;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: var(--accent-secondary);
          transition: width 0.3s ease;
        }

        &:hover {
          color: var(--accent-secondary);

          &::after {
            width: 100%;
          }
        }
      }
    }

    .copyright {
      color: var(--text-secondary);
      font-size: 0.9rem;
      opacity: 0.7;
    }
  }
}
</style>
