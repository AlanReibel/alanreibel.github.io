<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';
const containerRef = ref(null);

const { personalInfo, techIcons } = useCvData();
const N = techIcons.length;
const isMobile = ref(false);
const windowSize = ref(window.innerWidth);
const RADIUS = computed(() => (isMobile.value ? windowSize.value * 0.45 : 230));

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
        <span class="greeting">{{ $t('hero.greeting') }}</span>
        <h1 class="name">{{ personalInfo.name }}</h1>
        <h2 class="role">{{ $t(personalInfo.title) }}</h2>
        <p class="description">{{ $t(personalInfo.summary) }}</p>

        <div class="contact">
          <p class="location"><span>📍</span> {{ $t(personalInfo.location) }}</p>
          <div class="actions">
            <a :href="'mailto:' + personalInfo.email" class="button primary">{{ $t('hero.contact') }}</a>
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
          <div v-for="(tech, i) in techIcons" :key="tech.name" class="orbit-item" :style="getItemStyle(i)"
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
  overflow-x: hidden;
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



    .button {
      padding: 0.8rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
      font-size: 1rem;
      text-align: center;

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
      width: 100%;
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
      /* transform: translateX(10%); */
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
      /* top: 50%;
      left: 50%;
      width: 0;
      height: 0; */
      transform-style: preserve-3d;
      will-change: transform;
      display: flex;
      flex-direction: column;
      align-items: center;
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

  .actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
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

    }

    .location {
      justify-content: center;
    }

    .actions {
      justify-content: center;
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

    .orbit-item {
      svg {
        width: 1.5rem;
        height: 1.5rem;
      }

      span {
        font-size: .65rem;
      }
    }

    .primary {
      width: 100%;
    }
  }
}
</style>
