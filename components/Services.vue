<template>
    <section id="services" class="root">
        <div class="wrapper">
            <h2 class="title" v-animate-on-scroll>{{ $t('sections.services') }}</h2>

            <div class="grid">
                <div v-for="(service, index) in services" :key="index" class="card" v-animate-on-scroll>
                    <h3 class="name">{{ $t(`servicesItems.${service.id}.title`) }}</h3>
                    <p class="description">{{ $t(`servicesItems.${service.id}.description`) }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { services } = useCvData();
</script>

<style scoped>
#services {
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
    }

    .description {
        color: var(--text-secondary);
        font-size: 0.9rem;
        line-height: 1.6;
    }
}

@container (width < 960px) {
    #services {
        .card {
            padding: 1rem;
        }
    }
}
</style>