<script setup>
const { experience } = useCvData();
</script>

<template>
  <section id="experience" class="root">
    <div class="wrapper">
      <h2 class="title" v-animate-on-scroll>Professional Experience</h2>

      <div class="timeline">
        <div v-for="(job, index) in experience" :key="index" class="entry"
          :style="{ transitionDelay: `${index * 0.1}s` }" v-animate-on-scroll>
          <div class="marker">
            <div class="dot"></div>
            <div class="line"></div>
          </div>

          <div class="card">
            <header class="header">
              <h3 class="role">{{ job.role }}</h3>
              <div class="meta">
                <span class="company">{{ job.company }}</span>
                <span class="period">{{ job.period }}</span>
              </div>
            </header>

            <div class="tech" v-if="job.techStack">
              <span v-for="tech in job.techStack" :key="tech" class="badge">{{
                tech
              }}</span>
            </div>

            <ul class="list">
              <li v-for="(detail, i) in job.details" :key="i">{{ detail }}</li>
            </ul>

            <div v-if="job.projects || job.project" class="footer">
              <span class="label">Projects:</span>
              <span class="value" v-if="Array.isArray(job.projects)">{{
                job.projects.join(" | ")
              }}</span>
              <span class="value" v-else>{{ job.project }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#experience {
  padding: var(--spacing-section) 0;
  container-type: inline-size;

  .wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1.5rem;

    .title {
      font-size: clamp(1.8rem, 8vw, 2.5rem);
      text-align: center;
      margin-bottom: 4rem;
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
  }

  .timeline {
    position: relative;

    .entry {
      display: flex;
      gap: 2rem;
      margin-bottom: 3rem;

      opacity: 0;
      transform: translateY(30px);
      transition:
        opacity 0.6s ease,
        transform 0.6s ease;

      &.is-visible {
        opacity: 1;
        transform: translateY(0);
      }

      .marker {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 20px;

        .dot {
          width: 14px;
          height: 14px;
          background: var(--accent-primary);
          border-radius: 50%;
          box-shadow: 0 0 12px var(--accent-primary);
          z-index: 2;
        }

        .line {
          width: 2px;
          flex-grow: 1;
          background: linear-gradient(to bottom,
              var(--accent-primary),
              rgba(255, 255, 255, 0.05));
          margin-top: 5px;
        }
      }

      .card {
        flex-grow: 1;
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        padding: 2rem;
        border-radius: var(--border-radius);
        backdrop-filter: blur(12px);
        transition:
          transform 0.3s ease,
          border-color 0.3s ease;

        &:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .header {
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 1rem;

          .role {
            font-size: 1.4rem;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
          }

          .meta {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1rem;

            .company {
              color: var(--accent-secondary);
              font-weight: 500;
            }

            .period {
              color: var(--text-secondary);
              font-style: italic;
              font-size: 0.9rem;
            }
          }
        }

        .tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.5rem;

          .badge {
            font-size: 0.8rem;
            padding: 0.3rem 0.8rem;
            background: rgba(0, 220, 130, 0.08);
            color: var(--accent-primary);
            border: 1px solid rgba(0, 220, 130, 0.2);
            border-radius: 20px;
          }
        }

        .list {
          li {
            position: relative;
            padding-left: 1.2rem;
            margin-bottom: 0.8rem;
            color: var(--text-secondary);
            font-size: 1rem;
            line-height: 1.6;

            &::before {
              content: "▹";
              position: absolute;
              left: 0;
              color: var(--accent-primary);
            }
          }
        }

        .footer {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--glass-border);
          font-size: 0.9rem;

          .label {
            color: var(--text-primary);
            font-weight: 600;
            margin-right: 0.5rem;
          }

          .value {
            color: var(--text-secondary);
          }
        }
      }
    }
  }
}

/* Container Query */
@container (max-width: 768px) {
  .root {
    .wrapper {
      .timeline {
        .entry {
          gap: 1rem;

          .card {
            padding: 1.5rem;

            .header .meta {
              flex-direction: column;
              gap: 0.2rem;
            }
          }
        }
      }
    }
  }
}
</style>
