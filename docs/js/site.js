/* ============================================================
   MOOSEVILLE ADVENTURES — Design Wiki · site.js
   ============================================================ */

/* ── Active nav link ─────────────────────────────────────────── */
(function markActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ── Milestone tracker ───────────────────────────────────────── */
const MILESTONES = [
  {
    id: 'M1',
    name: 'Millwright Beginnings',
    trigger: 'Town Level ≥ 2',
    deps: [],
    unlock: 'Board bulk processing and sawmill scaling',
    assets: 'INF-03, PRP-R02, ENV-INF-03',
    quest: 'Millwright Beginnings',
    sprint: 1,
    risk: 'Low',
    notes: 'Establish baseline build throughput'
  },
  {
    id: 'M2',
    name: 'Stone and Story',
    trigger: 'Town Level ≥ 3 and Population ≥ 20',
    deps: ['M1'],
    unlock: 'Stone roads and structural foundations',
    assets: 'INF-04, INF-10, RSC-04, RSC-05',
    quest: 'Stone and Story',
    sprint: 2,
    risk: 'Medium',
    notes: 'Unlock durable pathing and foundational upgrades'
  },
  {
    id: 'M3',
    name: 'Glowwatch Protocol',
    trigger: 'Town Level ≥ 4 and Campaign I complete',
    deps: ['M1','M2'],
    unlock: 'Water diagnostics and purity alert systems',
    assets: 'BIZ-12, PRP-R12, ENV-BIZ-12',
    quest: 'Glowwatch Protocol',
    sprint: 3,
    risk: 'High',
    notes: 'Critical to regression prevention loop'
  },
  {
    id: 'M4',
    name: 'Kiln of the Commons',
    trigger: 'Town Level ≥ 5 and Districts ≥ 2',
    deps: ['M2'],
    unlock: 'Brickworks and sanitation infrastructure',
    assets: 'INF-05, RSC-06, RSC-07',
    quest: 'Kiln of the Commons',
    sprint: 4,
    risk: 'Medium',
    notes: 'Supports housing scale and civic hygiene'
  },
  {
    id: 'M5',
    name: 'Forge of Antlers',
    trigger: 'Town Level ≥ 6 and Campaign II complete',
    deps: ['M3','M4'],
    unlock: 'Iron hardware mass production',
    assets: 'INF-06, RSC-08, RSC-09, RSC-10',
    quest: 'Forge of Antlers',
    sprint: 5,
    risk: 'High',
    notes: 'Required for rapid upgrade cadence'
  },
  {
    id: 'M6',
    name: 'Threads of Identity',
    trigger: 'Town Level ≥ 7 and Specialist NPCs ≥ 3',
    deps: ['M4','M5'],
    unlock: 'Advanced role outfits and identity bonuses',
    assets: 'BIZ-05, CST role set B, PRP-R05',
    quest: 'Threads of Identity',
    sprint: 6,
    risk: 'Low',
    notes: 'Strengthens social and role progression'
  },
  {
    id: 'M7',
    name: 'New Hooves, New Homes',
    trigger: 'Town Level ≥ 8 and Campaign III complete',
    deps: ['M5','M6'],
    unlock: 'Integration housing and hybrid craft branches',
    assets: 'EXP-02, INF-08, Housing Tier 4+',
    quest: 'New Hooves New Homes',
    sprint: 7,
    risk: 'High',
    notes: 'Population growth and integration dependency'
  },
  {
    id: 'M8',
    name: 'The Teaching Charter',
    trigger: 'Town Level ≥ 9 and Mentor NPCs ≥ 6',
    deps: ['M6','M7'],
    unlock: 'NPC-to-NPC training network and teaching systems',
    assets: 'EXP-04, CST-PT2, CST-PT3, PRP-P02',
    quest: 'The Teaching Charter',
    sprint: 8,
    risk: 'Medium',
    notes: 'Reduces player micromanagement load'
  },
  {
    id: 'M9',
    name: 'Valley Steward Accord',
    trigger: 'Town Level ≥ 10 and Campaign IV active',
    deps: ['M7','M8'],
    unlock: 'Multi-route expeditions and grand civic projects',
    assets: 'EXP-03, EXP-01, PRP-P03, ENV-FST-01',
    quest: 'Valley Steward Accord',
    sprint: 9,
    risk: 'High',
    notes: 'Launches late-game expansion loop'
  }
];

const STATUS_OPTIONS = ['Planned', 'In Progress', 'Review', 'Blocked', 'Complete'];
const STATUS_CLASSES = {
  'Planned':     'planned',
  'In Progress': 'in-progress',
  'Review':      'review',
  'Blocked':     'blocked',
  'Complete':    'complete'
};
const BADGE_CLASSES = {
  'Planned':     'badge-planned',
  'In Progress': 'badge-in-progress',
  'Review':      'badge-review',
  'Blocked':     'badge-blocked',
  'Complete':    'badge-complete'
};

function getMilestoneStatuses() {
  try {
    return JSON.parse(localStorage.getItem('mv_milestone_statuses') || '{}');
  } catch { return {}; }
}

function saveMilestoneStatus(id, status) {
  const data = getMilestoneStatuses();
  data[id] = status;
  localStorage.setItem('mv_milestone_statuses', JSON.stringify(data));
}

function getStatus(id) {
  return getMilestoneStatuses()[id] || 'Planned';
}

function buildMilestoneTracker() {
  const container = document.getElementById('milestone-grid');
  if (!container) return;

  const statuses = getMilestoneStatuses();

  const completed = MILESTONES.filter(m => (statuses[m.id] || 'Planned') === 'Complete').length;
  const pct = Math.round((completed / MILESTONES.length) * 100);

  const progressWrap = document.getElementById('ms-progress');
  if (progressWrap) {
    progressWrap.querySelector('.progress-fill').style.width = pct + '%';
    progressWrap.querySelector('.progress-pct').textContent = pct + '%';
    progressWrap.querySelector('.progress-count').textContent = `${completed} / ${MILESTONES.length} milestones complete`;
  }

  container.innerHTML = MILESTONES.map(m => {
    const status = statuses[m.id] || 'Planned';
    const cls = STATUS_CLASSES[status] || 'planned';
    const riskClass = { Low: 'badge-risk-low', Medium: 'badge-risk-med', High: 'badge-risk-high' }[m.risk] || '';
    const depsText = m.deps.length ? m.deps.join(', ') : 'None';

    return `
<div class="ms-card status-${cls}" id="ms-card-${m.id}">
  <div class="ms-card-head">
    <span class="ms-id">${m.id}</span>
    <span class="ms-name">${m.name}</span>
    <select class="status-select badge ${BADGE_CLASSES[status]}"
            onchange="updateMilestoneStatus('${m.id}', this)"
            title="Change status">
      ${STATUS_OPTIONS.map(s =>
        `<option value="${s}" ${s === status ? 'selected' : ''}>${s}</option>`
      ).join('')}
    </select>
  </div>
  <div class="ms-body">
    <div class="ms-unlock">🔓 <strong>Unlocks:</strong> ${m.unlock}</div>
    <div class="ms-meta">
      <div class="ms-meta-item">
        <span class="ms-meta-label">Trigger</span>
        <span class="ms-meta-value">${m.trigger}</span>
      </div>
      <div class="ms-meta-item">
        <span class="ms-meta-label">Sprint</span>
        <span class="ms-meta-value">Sprint ${m.sprint}</span>
      </div>
      <div class="ms-meta-item">
        <span class="ms-meta-label">Risk</span>
        <span class="ms-meta-value"><span class="badge ${riskClass}">${m.risk}</span></span>
      </div>
      <div class="ms-meta-item">
        <span class="ms-meta-label">Quest</span>
        <span class="ms-meta-value">${m.quest}</span>
      </div>
    </div>
    <div class="ms-deps">
      <strong>Dependencies:</strong> ${depsText}
    </div>
    <div style="margin-top:.6rem;font-size:.75rem;color:var(--text-light);font-style:italic">
      ${m.notes}
    </div>
    <div style="margin-top:.6rem;font-size:.72rem;color:var(--text-muted)">
      <strong>Asset families:</strong> ${m.assets}
    </div>
  </div>
</div>`;
  }).join('');
}

function updateMilestoneStatus(id, selectEl) {
  const newStatus = selectEl.value;
  saveMilestoneStatus(id, newStatus);

  const card = document.getElementById('ms-card-' + id);
  if (card) {
    Object.values(STATUS_CLASSES).forEach(c => card.classList.remove('status-' + c));
    card.classList.add('status-' + STATUS_CLASSES[newStatus]);
  }

  Object.keys(BADGE_CLASSES).forEach(s => selectEl.classList.remove(BADGE_CLASSES[s]));
  selectEl.classList.add(BADGE_CLASSES[newStatus]);

  const statuses = getMilestoneStatuses();
  const completed = MILESTONES.filter(m => (statuses[m.id] || 'Planned') === 'Complete').length;
  const pct = Math.round((completed / MILESTONES.length) * 100);
  const progressWrap = document.getElementById('ms-progress');
  if (progressWrap) {
    progressWrap.querySelector('.progress-fill').style.width = pct + '%';
    progressWrap.querySelector('.progress-pct').textContent = pct + '%';
    progressWrap.querySelector('.progress-count').textContent = `${completed} / ${MILESTONES.length} milestones complete`;
  }
}

/* ── Home page stats from milestone data ─────────────────────── */
function updateHomeStats() {
  const el = document.getElementById('ms-complete-count');
  if (!el) return;
  const statuses = getMilestoneStatuses();
  const completed = MILESTONES.filter(m => (statuses[m.id] || 'Planned') === 'Complete').length;
  el.textContent = completed + '/9';
}

/* ── Init ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildMilestoneTracker();
  updateHomeStats();
});
