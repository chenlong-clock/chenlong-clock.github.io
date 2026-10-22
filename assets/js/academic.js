(function () {
  const root = document.getElementById('chenlong-homepage');
  if (!root) return;
  const hero = root.querySelector('.rp-hero');
  const backdrop = root.querySelector('.okc-backdrop');
  const canvas = root.querySelector('.okc-traffic');
  const ctx = canvas.getContext('2d');
  const button = root.querySelector('.okc-motion');
  const label = button.querySelector('span');
  const status = root.querySelector('.rp-theme-status');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
  let on = !reducedMotion.matches;
  let visible = true;
  let frame = 0;
  let previous = 0;
  let painted = 0;
  let elapsed = 0;
  let width = 1;
  let height = 1;
  let dpr = 1;
  let palette;

  // Coordinates are in the original photograph (1400 x 933). Arc-length
  // sampling keeps traffic speed steady through the motorway's curved ramp.
  const routes = [
    { curves: [
      [[530,385],[765,414],[1137,459],[1113,525]],
      [[1113,525],[1105,581],[790,633],[430,699]]
    ], lanes: [-10,-3,4,11], count: 12, speed: 110, alpha: .85 },
    { curves: [
      [[805,667],[965,733],[1220,838],[1450,931]]
    ], lanes: [-7,0,7], count: 9, speed: 145, alpha: .8 },
    { curves: [
      [[1000,389],[1130,407],[1294,440],[1450,466]]
    ], lanes: [-3,3], count: 7, speed: 78, alpha: .65 },
    { curves: [
      [[1445,535],[1306,549],[1209,565],[1111,581]]
    ], lanes: [-4,4], count: 6, speed: 105, alpha: .7 }
  ];

  function bezier(points, t) {
    const u = 1 - t;
    return {
      x: u*u*u*points[0][0] + 3*u*u*t*points[1][0] + 3*u*t*t*points[2][0] + t*t*t*points[3][0],
      y: u*u*u*points[0][1] + 3*u*u*t*points[1][1] + 3*u*t*t*points[2][1] + t*t*t*points[3][1]
    };
  }
  routes.forEach(function (route) {
    route.samples = [];
    let distance = 0;
    let last = null;
    route.curves.forEach(function (curve, ci) {
      for (let i = ci ? 1 : 0; i <= 200; i++) {
        const p = bezier(curve, i / 200);
        if (last) distance += Math.hypot(p.x-last.x, p.y-last.y);
        route.samples.push({ x:p.x, y:p.y, distance:distance });
        last = p;
      }
    });
    route.length = distance;
  });

  function location(route, distance, offset) {
    const samples = route.samples;
    const target = Math.min(route.length, Math.max(0, distance));
    let lo = 0;
    let hi = samples.length - 1;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (samples[mid].distance < target) lo = mid + 1;
      else hi = mid;
    }
    const a = samples[Math.max(0, lo-1)];
    const b = samples[Math.max(1, lo)];
    const f = (target-a.distance) / Math.max(.001, b.distance-a.distance);
    const dx = b.x-a.x;
    const dy = b.y-a.y;
    const length = Math.hypot(dx,dy) || 1;
    return { x:a.x+dx*f-dy/length*offset, y:a.y+dy*f+dx/length*offset };
  }

  function readPalette() {
    const probe = document.createElement('span');
    probe.style.cssText = 'position:absolute;visibility:hidden;pointer-events:none';
    root.appendChild(probe);
    palette = ['--okc-traffic-cool','--okc-traffic-warm','--okc-traffic-core'].map(function (name) {
      probe.style.color = 'var('+name+')';
      return getComputedStyle(probe).color;
    });
    probe.remove();
  }

  function draw() {
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,width,height);
    const scale = Math.max(width/1400,height/933);
    ctx.translate((width-1400*scale)*.7,(height-933*scale)*.5);
    ctx.scale(scale,scale);
    ctx.lineCap = 'round';
    routes.forEach(function (route, ri) {
      route.lanes.forEach(function (lane, li) {
        const direction = li < route.lanes.length/2 ? 1 : -1;
        const color = direction === 1 ? palette[0] : palette[1];
        for (let i = 0; i < route.count; i++) {
          const seed = ((i*71+li*43+ri*137)%101)/101;
          const phase = (i+.18+seed*.38)/route.count + li*.147;
          const speed = route.speed*(.86+seed*.32+li*.035);
          const travel = ((phase*route.length+direction*elapsed*speed)%route.length+route.length)%route.length;
          const p = location(route,travel,lane);
          const perspective = .55+Math.max(0,p.y-350)/650;
          const trail = (22+seed*27)*perspective;
          const fade = Math.min(1,travel/55,(route.length-travel)/55)*route.alpha;
          for (let s = 0; s < 8; s++) {
            const a = location(route,travel-direction*trail*s/8,lane);
            const b = location(route,travel-direction*trail*(s+1)/8,lane);
            ctx.globalAlpha = fade*(1-s/8)*.64;
            ctx.strokeStyle = color;
            ctx.lineWidth = 2.5*perspective;
            ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
          }
          // A small bright leading edge gives each exposure a visible direction.
          const nose = location(route,travel+direction*3.2*perspective,lane);
          const tail = location(route,travel-direction*2.2*perspective,lane);
          ctx.globalAlpha = fade*.94;
          ctx.strokeStyle = color;
          ctx.lineWidth = 2.7*perspective;
          ctx.beginPath();ctx.moveTo(tail.x,tail.y);ctx.lineTo(nose.x,nose.y);ctx.stroke();
          ctx.globalAlpha = fade*.85;
          ctx.strokeStyle = palette[2];
          ctx.lineWidth = .95*perspective;
          ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(nose.x,nose.y);ctx.stroke();
        }
      });
    });
    ctx.globalAlpha = 1;
  }

  function resize() {
    width = backdrop.clientWidth;
    height = backdrop.clientHeight;
    dpr = Math.min(window.devicePixelRatio || 1,2);
    canvas.width = Math.round(width*dpr);
    canvas.height = Math.round(height*dpr);
    readPalette();
    draw();
  }
  function tick(now) {
    frame = 0;
    if (!on || !visible || document.hidden) { previous = 0; return; }
    if (previous) elapsed += Math.min((now-previous)/1000,.05);
    previous = now;
    if (now-painted >= 1000/30) { draw();painted = now; }
    frame = requestAnimationFrame(tick);
  }
  function syncPlayback() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;previous = 0;
    if (on && visible && !document.hidden) frame = requestAnimationFrame(tick);
  }
  function setMotion(value, announce) {
    on = value;
    root.dataset.motion = on ? 'on' : 'off';
    label.textContent = on ? 'motion: on' : 'motion: off';
    button.setAttribute('aria-pressed',String(on));
    button.setAttribute('aria-label',on ? 'Pause decorative animations' : 'Enable decorative animations');
    if (!on) {
      root.style.setProperty('--okc-drift-x','0px');
      root.style.setProperty('--okc-drift-y','0px');
    }
    if (announce) status.textContent = on ? 'Decorative motion enabled' : 'Decorative motion paused';
    syncPlayback();
  }
  resize();
  setMotion(on,false);
  new ResizeObserver(resize).observe(backdrop);
  new IntersectionObserver(function (entries) {
    visible = entries[0].isIntersecting;syncPlayback();
  }, {rootMargin:'80px'}).observe(hero);
  document.addEventListener('visibilitychange',syncPlayback);
  button.addEventListener('click',function () { setMotion(!on,true); });
  reducedMotion.addEventListener('change',function (e) { setMotion(!e.matches,true); });
  darkMode.addEventListener('change',function () { readPalette();draw(); });
  hero.addEventListener('pointermove',function (event) {
    if (!on || !finePointer.matches) return;
    const rect = hero.getBoundingClientRect();
    root.style.setProperty('--okc-drift-x',(((event.clientX-rect.left)/rect.width-.5)*8).toFixed(2)+'px');
    root.style.setProperty('--okc-drift-y',(((event.clientY-rect.top)/rect.height-.5)*6).toFixed(2)+'px');
  });
  hero.addEventListener('pointerleave',function () {
    root.style.setProperty('--okc-drift-x','0px');
    root.style.setProperty('--okc-drift-y','0px');
  });
  root.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click',function (event) {
      const destination = root.querySelector(link.getAttribute('href'));
      if (destination) { event.preventDefault();destination.scrollIntoView({behavior:'auto',block:'start'}); }
    });
  });

  const legacyAnchors = {"about-me":"rp-top","-educations":"rp-education","-internships":"rp-experience","-news":"rp-news","-publications":"rp-research","-selected-publications":"rp-research","-honors-and-awards":"rp-honors","-academic-services":"rp-service","-misc":"rp-misc"};
  function followHash() {
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch (_) { return; }
    if (!id) return;
    const destination = document.getElementById(legacyAnchors[id] || id);
    if (!destination || !root.contains(destination)) return;
    let details = destination.closest('details');
    while (details) { details.open = true;details = details.parentElement.closest('details'); }
    destination.scrollIntoView({behavior:'auto',block:'start'});
  }
  window.addEventListener('hashchange',followHash);
  if (document.readyState === 'complete') followHash();
  else window.addEventListener('load',followHash,{once:true});
})();
