<script setup>
const { technologies } = useCvData();
</script>

<template>
  <section id="skills" class="root">
    <div class="wrapper">
      <h2 class="title" v-animate-on-scroll>{{ $t('sections.skills') }}</h2>

      <div class="grid">
        <div v-for="(skills, category) in technologies" :key="category" class="card" v-animate-on-scroll>
          <h3 class="name">{{ category }}</h3>
          <div class="tags">
            <span v-for="skill in skills" :key="skill" class="tag">{{
              skill
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#skills {
  padding: var(--spacing-section) 0;
  container-type: inline-size;

  .wrapper {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .title {
    font-size: clamp(1.8rem, 8vw, 2.5rem);
    text-align: center;
    margin-bottom: 3rem;
    background: var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;

    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;

  }

  .card {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius);
    padding: 2rem;
    backdrop-filter: blur(12px);
    transition:
      transform 0.3s ease,
      background 0.3s ease;

    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.6s ease,
      transform 0.6s ease;

    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    &:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.05);
    }

  }

  .name {
    color: var(--accent-secondary);
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 0.8rem;
    text-transform: capitalize;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;

    .tag {
      background: rgba(2, 4, 32, 0.6);
      padding: 0.5rem 1rem;
      border-radius: 6px;
      font-size: 0.9rem;
      color: var(--text-primary);
      border: 1px solid var(--glass-border);
      transition: all 0.2s ease;

      &:hover {
        border-color: var(--accent-primary);
        color: var(--accent-primary);
        box-shadow: 0 0 8px rgba(0, 220, 130, 0.2);
      }
    }
  }
}

@container (width < 960px) {
  #skills {
    .card {
      padding: 1rem;
    }

    .tags {
      gap: .5rem;
    }
  }
}
</style>
