<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';

const { personalInfo } = useCvData();

const containerRef = ref(null);

const techs = [
  {
    name: 'Vue.js', color: '#42b883',
    svg: '<path d="M2 3h3l7 12L19 3h3L12 21z" fill="currentColor" opacity=".3"/><path d="M8 3l4 7 4-7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>'
  },
  {
    name: 'Nuxt', color: '#00dc82',
    svg: '<path d="M1 20L9 4l8 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M15 20l4-8 4 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'
  },
  {
    name: 'JavaScript', color: '#f7df1e',
    svg: '<rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="1.5"/><text x="12" y="16.5" text-anchor="middle" font-size="11" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">JS</text>'
  },
  {
    name: 'TypeScript', color: '#3178c6',
    svg: '<rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="1.5"/><text x="12" y="16.5" text-anchor="middle" font-size="11" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">TS</text>'
  },
  {
    name: 'HTML5', color: '#e34f26',
    svg: '<path d="M4 2l1.5 17L12 22l6.5-3L20 2z" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><text x="12" y="15" text-anchor="middle" font-size="9" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">5</text>'
  },
  {
    name: 'CSS3', color: '#264de4',
    svg: '<path d="M4 2l1.5 17L12 22l6.5-3L20 2z" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><text x="12" y="15" text-anchor="middle" font-size="9" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">3</text>'
  },
  {
    name: 'React', color: '#61dafb',
    svg: '<ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="1.2"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="1.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="1.2" transform="rotate(-60 12 12)"/><circle cx="12" cy="12" r="2" fill="currentColor"/>'
  },
  {
    name: 'PHP', color: '#777bb4',
    svg: '<ellipse cx="12" cy="12" rx="11" ry="7" fill="currentColor" opacity=".1" stroke="currentColor" stroke-width="1.3"/><text x="12" y="15" text-anchor="middle" font-size="7.5" font-weight="800" font-family="Arial,sans-serif" fill="currentColor">php</text>'
  },
  {
    name: 'Laravel', color: '#ff2d20',
    svg: '<path d="M7 4l3 5-2 2 3 4 5-6 2 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 11v6c0 2 2 3 4 3h6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'
  },
  {
    name: 'Node.js', color: '#339933',
    svg: '<path d="M12 2l9 5v10l-9 5-9-5V7z" fill="currentColor" opacity=".1" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">N</text>'
  },
  {
    name: 'Docker', color: '#2496ed',
    svg: '<path d="M21 11c1.5 0 2.5 1.5 2 3.5-1 3.5-5 6.5-11 6.5S1 18 1 14.5c0-2 1-3.5 3-3.5h17z" fill="currentColor" opacity=".1" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M7 11V8m3 3V8m3 3V8m-3-3V2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'
  },
  {
    name: 'Git', color: '#f05032',
    svg: '<circle cx="6" cy="5" r="2.5" fill="currentColor" opacity=".3" stroke="currentColor" stroke-width="1.2"/><circle cx="18" cy="5" r="2.5" fill="currentColor" opacity=".3" stroke="currentColor" stroke-width="1.2"/><circle cx="12" cy="19" r="2.5" fill="currentColor" opacity=".3" stroke="currentColor" stroke-width="1.2"/><path d="M6 7.5v3c0 3 2 5 6 6m6-9v3c0 3-2 5-6 6" fill="none" stroke="currentColor" stroke-width="1.5"/>'
  },
  {
    name: 'Figma', color: '#a259ff',
    svg: '<rect x="5" y="1" width="7" height="7" rx="3.5" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.2"/><rect x="12" y="1" width="7" height="7" rx="3.5" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.2"/><rect x="5" y="8" width="7" height="7" rx="3.5" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.2"/><circle cx="15.5" cy="11.5" r="3.5" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.2"/><rect x="5" y="15" width="7" height="7" rx="3.5" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.2"/>'
  },
  {
    name: 'Linux', color: '#fcc624',
    svg: '<rect x="2" y="3" width="20" height="18" rx="3" fill="currentColor" opacity=".1" stroke="currentColor" stroke-width="1.3"/><path d="M7 14l3-3-3-3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 14h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
  },
  {
    name: 'Astro', color: '#bc52ee',
    svg: '<path d="M12 2l6 18c-2-2-4-3-6-3s-4 1-6 3z" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><circle cx="12" cy="14" r="2" fill="currentColor"/>'
  },
  {
    name: 'Next.js', color: '#e0e0e0',
    svg: '<circle cx="12" cy="12" r="10" fill="currentColor" opacity=".1" stroke="currentColor" stroke-width="1.3"/><path d="M9 7v10M9 7l7 10V7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'
  },
  {
    name: 'Three.js', color: '#e0e0e0',
    svg: '<path d="M12 2l9 5v10l-9 5-9-5V7z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M12 12l9-5M12 12v10M12 12L3 7" fill="none" stroke="currentColor" stroke-width="1.2"/>'
  },
  {
    name: 'Vite', color: '#a855f7',
    svg: '<path d="M2 4l10 18L22 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M14 3l-3 8h5l-4 9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'
  },
  {
    name: 'npm', color: '#cb3837',
    svg: '<rect x="1" y="5" width="22" height="14" rx="2" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="1.3"/><text x="12" y="16" text-anchor="middle" font-size="8" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">npm</text>'
  },
  {
    name: 'Pinia', color: '#ffd859',
    svg: '<ellipse cx="12" cy="14" rx="5.5" ry="7.5" fill="currentColor" opacity=".15" stroke="currentColor" stroke-width="1.3"/><path d="M9 4c1-3 5-3 6 0M10 2.5c.5-1.5 3.5-1.5 4 0" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>'
  },
  {
    name: 'WordPress', color: '#21759b',
    svg: '<circle cx="12" cy="12" r="10" fill="currentColor" opacity=".1" stroke="currentColor" stroke-width="1.3"/><text x="12" y="17" text-anchor="middle" font-size="14" font-weight="700" font-family="serif" fill="currentColor">W</text>'
  },
  {
    name: 'Photoshop', color: '#31a8ff',
    svg: '<rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="1.5"/><text x="12" y="16.5" text-anchor="middle" font-size="11" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">Ps</text>'
  },
  {
    name: 'jQuery', color: '#0769ad',
    svg: '<text x="12" y="16" text-anchor="middle" font-size="8" font-weight="900" font-family="Arial,sans-serif" fill="currentColor">jQ</text><path d="M5 18c4 3 10 3 14-1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'
  },
];

const N = techs.length;
const isMobile = ref(false);
const RADIUS = computed(() => (isMobile.value ? 140 : 190));

const state = reactive({
  tiltX: 0,
  tiltY: 0,
  speed: 1,
  angle: 0,
});

let tgtTiltX = 0;
let tgtTiltY = 0;
let tgtSpeed = 1;
let raf = null;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function tick() {
  state.tiltX = lerp(state.tiltX, tgtTiltX, 0.06);
  state.tiltY = lerp(state.tiltY, tgtTiltY, 0.06);
  state.speed = lerp(state.speed, tgtSpeed, 0.04);
  state.angle = (state.angle + 0.12 * state.speed) % 360;
  raf = requestAnimationFrame(tick);
}

function onMove(e) {
  const el = containerRef.value;
  if (!el) return;
  const r = el.getBoundingClientRect();
  const nx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
  const ny = (e.clientY - r.top - r.height / 2) / (r.height / 2);
  tgtTiltX = ny * -10;
  tgtTiltY = nx * 10;
  tgtSpeed = 1.5 + (1 - Math.min(1, Math.hypot(nx, ny))) * 2;
}

function onLeave() {
  tgtTiltX = 0;
  tgtTiltY = 0;
  tgtSpeed = 1;
}

// Depth-of-field: z-depth drives bokeh blur, dimming, and scale
function getItemStyle(i) {
  const a = (360 / N) * i;
  const rx = 65 + state.tiltX;
  const ry = state.tiltY;
  const rz = state.angle + a;
  const zNorm = Math.sin(rz * Math.PI / 180); // -1 (back) to +1 (front)
  const blur = zNorm < -0.1 ? Math.abs(zNorm + 0.1) * 4 : 0;
  const dim = 0.3 + (zNorm + 1) * 0.35;
  const scale = 0.82 + (zNorm + 1) * 0.14;
  return {
    transform: `rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) translateX(${RADIUS.value}px) rotateZ(${-rz}deg) rotateY(${-ry}deg) rotateX(${-rx}deg)`,
    '--d-blur': `${blur.toFixed(1)}px`,
    '--d-dim': dim.toFixed(2),
    '--d-scale': scale.toFixed(2),
  };
}

// Rim light: rotating conic gradient synced to orbit
const rimStyle = computed(() => ({
  transform: `rotate(${-state.angle * 0.7}deg)`,
}));

// Atmospheric particles
const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1 + Math.random() * 2.5,
  dur: 4 + Math.random() * 6,
  delay: Math.random() * 6,
  opacity: 0.15 + Math.random() * 0.35,
}));

function handleResize() {
  isMobile.value = window.innerWidth < 960;
}

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
  raf = requestAnimationFrame(tick);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  if (raf) cancelAnimationFrame(raf);
});
</script>

<template>
  <section id="about" class="section">
    <div class="wrapper">
      <div class="content" v-animate-on-scroll>
        <span class="greeting">Hello, I'm</span>
        <h1 class="name">{{ personalInfo.name }}</h1>
        <h2 class="role">{{ personalInfo.title }}</h2>
        <p class="description">{{ personalInfo.summary }}</p>

        <div class="contact">
          <p class="location"><span>📍</span> {{ personalInfo.location }}</p>
          <div class="actions">
            <a :href="'mailto:' + personalInfo.email" class="button primary">Contact Me</a>
            <a :href="personalInfo.github" target="_blank" class="button outline" rel="noopener">GitHub</a>
            <a :href="personalInfo.linkedin" target="_blank" class="button outline" rel="noopener">LinkedIn</a>
          </div>
        </div>
      </div>

      <div class="visual" v-animate-on-scroll>
        <div class="planet-container" ref="containerRef" @mousemove="onMove" @mouseleave="onLeave">
          <!-- Atmospheric particles -->
          <div class="particles">
            <div v-for="p in particles" :key="p.id" class="particle"
              :style="{ left: p.x + '%', top: p.y + '%', width: p.size + 'px', height: p.size + 'px', animationDuration: p.dur + 's', animationDelay: p.delay + 's', opacity: p.opacity }">
            </div>
          </div>

          <!-- Profile image with rim light -->
          <div class="planet">
            <div class="rim-light" :style="rimStyle"></div>
            <img src="~/assets/css/img/Alan_Reibel_Profile.png"
              alt="Alan Reibel Perez - Fullstack Web Developer Profile" />
          </div>

          <!-- 3D Orbit items (siblings of planet for z-sorting) -->
          <div v-for="(tech, i) in techs" :key="tech.name" class="orbit-item" :style="getItemStyle(i)"
            :title="tech.name">
            <span>{{ tech.name }}</span>
            <svg viewBox="0 0 24 24" class="icon" v-html="tech.svg"></svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  container-type: inline-size;

  &::before {
    content: "";
    position: absolute;
    top: -10%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle,
        rgba(0, 220, 130, 0.15) 0%,
        rgba(0, 0, 0, 0) 70%);
    z-index: var(--z-negative);
    filter: blur(80px);
  }

  .wrapper {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;


  }

  .content {
    opacity: 0;
    transform: translateY(30px);
    transition:
      opacity 0.8s ease-out,
      transform 0.8s ease-out;

    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    span {
      display: block;
      font-size: 1.5rem;
      color: var(--accent-secondary);
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    h1 {
      font-size: clamp(2.5rem, 12vw, 4.5rem);
      font-weight: 800;
      margin-bottom: 1rem;
      background: var(--gradient-text);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.1;
      word-break: break-word;
    }

    h2 {
      font-size: clamp(1.2rem, 5vw, 2rem);
      color: var(--text-secondary);
      font-weight: 400;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.1rem;
      color: var(--text-secondary);
      line-height: 1.8;
      max-width: 550px;
      margin-bottom: 2.5rem;
    }

    .location {
      margin-bottom: 1.5rem;
      color: var(--text-primary);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;



    }

    .button {
      padding: 0.8rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
      font-size: 1rem;

      &:active {
        transform: scale(0.98);
      }

      &.primary {
        background: var(--gradient-main);
        color: #000;
        border: none;
        box-shadow: 0 4px 15px rgba(0, 220, 130, 0.3);

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 220, 130, 0.4);
        }
      }

      &.outline {
        background: transparent;
        border: 1px solid var(--accent-primary);
        color: var(--accent-primary);
        flex: 1 1 auto;
        min-width: 140px;

        &:hover {
          background: rgba(0, 220, 130, 0.1);
        }
      }
    }
  }

  .visual {
    display: flex;
    justify-content: center;
    opacity: 0;
    transform: translateY(30px);
    transition:
      opacity 0.8s ease-out,
      transform 0.8s ease-out;
    transition-delay: 0.2s;

    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .planet-container {
      position: relative;
      width: 460px;
      height: 460px;
      display: flex;
      align-items: center;
      justify-content: center;
      perspective: 800px;
      transform-style: preserve-3d;
      margin: 0 auto;
    }

    /* --- Profile image with rim light & bottom fade --- */
    .planet {
      position: relative;
      width: 200px;
      height: 290px;
      overflow: hidden;
      transform: translateX(10%);
      mask-image: linear-gradient(to bottom, black 55%, transparent 100%);
      -webkit-mask-image: linear-gradient(to bottom, black 55%, transparent 100%);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        position: relative;
        z-index: 1;
      }


    }

    .rim-light {
      position: absolute;
      inset: -12px;
      border-radius: 4px;
      background: conic-gradient(from 0deg,
          transparent 0%,
          rgba(54, 228, 218, 0.35) 12%,
          transparent 25%,
          rgba(0, 220, 130, 0.25) 40%,
          transparent 55%,
          rgba(97, 218, 251, 0.3) 70%,
          transparent 85%,
          rgba(167, 85, 247, 0.2) 95%,
          transparent 100%);
      filter: blur(10px);
      z-index: 0;
      will-change: transform;
    }

    /* --- Orbit items --- */
    .orbit-item {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      transform-style: preserve-3d;
      will-change: transform;
    }

    /* Depth-of-field: bokeh blur & dimming on children */
    .orbit-item svg,
    .orbit-item span {
      filter: blur(var(--d-blur, 0px));
      opacity: var(--d-dim, 1);
      transform: scale(var(--d-scale, 1));
      transition: filter 0.15s ease, opacity 0.15s ease;
    }

    svg {
      width: 2rem;
      height: 2rem;
    }

    span {
      font-size: .75rem;
    }

    /* --- Atmospheric floating particles --- */
    .particles {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }

    .particle {
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(54, 228, 218, 0.8), rgba(0, 220, 130, 0.3));
      animation: float-up linear infinite;
      will-change: transform, opacity;
    }


  }


  @keyframes float-up {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0;
    }

    15% {
      opacity: var(--particle-opacity, 0.3);
    }

    85% {
      opacity: var(--particle-opacity, 0.3);
    }

    100% {
      transform: translateY(-80px) scale(0.3);
      opacity: 0;
    }
  }

  @container (max-width: 960px) {
    .wrapper {
      grid-template-columns: 1fr;
      text-align: center;
      padding-top: 2rem;

    }

    .content {
      /* Removed empty .name ruleset */

      .description {
        margin: 0 auto 2.5rem;
      }

      .contact {
        .location {
          justify-content: center;
        }

        .actions {
          justify-content: center;
        }
      }
    }

    .visual {
      order: -1;
      margin-bottom: 2rem;


    }

    .planet-container {
      width: 300px;
      height: 300px;
    }

    .planet {
      width: 140px;
      height: 200px;
    }

    .orbit-item svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}
</style>
