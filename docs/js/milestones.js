/* ============================================================
   MOOSEVILLE ADVENTURES — Design Wiki · milestones.js
   Page-specific logic for milestones.html.
   Must load after site.js (depends on updateMilestoneStatus).
   ============================================================ */

function filterMilestones(type, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const cards = document.querySelectorAll('.ms-card');
  cards.forEach(card => {
    if (type === 'all') {
      card.style.display = '';
    } else if (type === 'high-risk') {
      const riskBadge = card.querySelector('.badge-risk-high');
      card.style.display = riskBadge ? '' : 'none';
    } else {
      card.style.display = card.classList.contains('status-' + type) ? '' : 'none';
    }
  });
}

function updateStatusCounts() {
  const statuses = {};
  document.querySelectorAll('.ms-card').forEach(card => {
    ['planned', 'in-progress', 'review', 'blocked', 'complete'].forEach(s => {
      if (card.classList.contains('status-' + s)) {
        statuses[s] = (statuses[s] || 0) + 1;
      }
    });
  });
  ['planned', 'in-progress', 'review', 'blocked', 'complete'].forEach(s => {
    const el = document.getElementById('count-' + s);
    if (el) el.textContent = statuses[s] || 0;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(updateStatusCounts, 100);
});

const _origUpdateStatus = window.updateMilestoneStatus;
window.updateMilestoneStatus = function (id, sel) {
  _origUpdateStatus(id, sel);
  setTimeout(updateStatusCounts, 50);
};
