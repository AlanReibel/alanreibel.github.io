<script setup>
const { education, languages, softSkills } = useCvData();
</script>

<template>
  <section id="education" class="root">
    <div class="wrapper">
      <div class="grid">
        <!-- Education Column -->
        <div class="column education" v-animate-on-scroll>
          <h2 class="title">Education</h2>
          <div class="list">
            <div v-for="(edu, index) in education" :key="index" class="card">
              <div class="icon-wrap">
                <span class="icon">🎓</span>
              </div>
              <p class="desc">{{ edu }}</p>
            </div>
          </div>
        </div>

        <!-- Languages & Soft Skills Column -->
        <div class="column misc" v-animate-on-scroll>
          <div class="languages">
            <h2 class="title">Languages</h2>
            <div class="card">
              <ul class="list">
                <li v-for="lang in languages" :key="lang.name">
                  <span class="name">{{ lang.name }}</span>
                  <span class="level">{{ lang.level }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="soft-skills">
            <h2 class="title">Soft Skills</h2>
            <div class="cloud">
              <span v-for="skill in softSkills" :key="skill" class="pill">{{
                skill
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#education {
  padding: var(--spacing-section) 0;
  container-type: inline-size;

  .wrapper {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1.5rem;

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;

      .column {
        opacity: 0;
        transform: translateY(30px);
        transition:
          opacity 0.8s ease,
          transform 0.8s ease;

        &.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .title {
          font-size: clamp(1.5rem, 6vw, 2rem);
          margin-bottom: 2rem;
          background: var(--gradient-text);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .education {
        .list {
          .card {
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            border-radius: var(--border-radius);
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            backdrop-filter: blur(12px);

            .icon-wrap {
              font-size: 1.5rem;
            }

            .desc {
              line-height: 1.5;
              color: var(--text-primary);
            }
          }
        }
      }

      .misc {
        .languages {
          margin-bottom: 3rem;

          .card {
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            border-radius: var(--border-radius);
            padding: 1.5rem;
            backdrop-filter: blur(12px);

            .list {
              li {
                display: flex;
                justify-content: space-between;
                padding: 0.8rem 0;
                border-bottom: 1px solid var(--glass-border);

                &:last-child {
                  border-bottom: none;
                }

                .name {
                  font-weight: 600;
                  color: var(--text-primary);
                }

                .level {
                  color: var(--accent-primary);
                }
              }
            }
          }
        }

        .soft-skills {
          .cloud {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;

            .pill {
              border: 1px solid var(--accent-secondary);
              color: var(--accent-secondary);
              padding: 0.5rem 1rem;
              border-radius: 50px;
              font-size: 0.9rem;
              transition: all 0.3s ease;
              cursor: default;

              &:hover {
                background: var(--accent-secondary);
                color: var(--bg-dark);
              }
            }
          }
        }
      }
    }
  }

  /* Container Query */
  @container (max-width: 768px) {
    .wrapper {
      .grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    }
  }
}
</style>
