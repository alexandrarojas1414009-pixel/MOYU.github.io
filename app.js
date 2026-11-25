/* Shared logic: navigation, pager, weekly form rendering, photo lightbox */
const PAGES = [{ file: 'index.html', label: 'Cover' }];
for (let i = 1; i <= 12; i++) PAGES.push({ file: `week${i}.html`, label: 'W' + i });
PAGES.push({ file: 'conclusion.html', label: 'Conclusion' });

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const current = (location.pathname.split('/').pop() || 'index.html');

/* Top navigation */
const nav = document.getElementById('nav');
if (nav) {
  nav.innerHTML = PAGES.map(p =>
    `<a href="${p.file}" class="${p.file === current ? 'active' : ''}">${p.label}</a>`).join('');
}

/* Weekly form */
const weekNum = parseInt(document.body.dataset.week || '0', 10);
const slot = document.getElementById('week-slot');
if (weekNum && slot && typeof weeks !== 'undefined') {
  const w = weeks[weekNum - 1];
  slot.innerHTML = `
    <h2>Week ${weekNum}: Weekly self-assessment form</h2>
    <div class="form-head"><strong>ENGLISH COURSE</strong><strong>WEEKLY SELF-ASSESSMENT FORM</strong></div>
    <div class="fields">
      <div><b>NAME:</b> ${esc(STUDENT.name)}</div>
      <div><b>GROUP:</b> ${esc(STUDENT.group)}</div>
      <div><b>ID:</b> ${esc(STUDENT.id)}</div>
      <div><b>WEEK #:</b> ${weekNum}</div>
      <div><b>INSTRUCTOR:</b> ${esc(STUDENT.instructor)}</div>
      <div><b>DATE:</b> ${esc(w.date)}</div>
    </div>
    <table>
      <tr><th style="width:50%">OBJECTIVES</th><th>WHAT I LEARNED</th></tr>
      <tr>
        <td><ul>${w.objectives.map(o => `<li>${esc(o)}</li>`).join('')}</ul></td>
        <td><ul>${w.learned.map(o => `<li>${esc(o)}</li>`).join('')}</ul></td>
      </tr>
    </table>
    ${w.noClass ? `<div class="noclass"><b>No class this week:</b> ${esc(w.noClass)}</div>` : ''}
    <div class="evidence">
      <h3>Evidence – Week ${weekNum}</h3>
      <div class="grid">
        ${w.evidence.map(e => `
          <figure>
            <img src="${esc(e.src)}" alt="Evidence week ${weekNum}" loading="lazy"
                 onerror="this.removeAttribute('src');this.alt='Photo not uploaded yet: ${esc(e.src)}'">
            <figcaption>${esc(e.caption)}</figcaption>
          </figure>`).join('')}
      </div>
    </div>`;
}

/* Previous / Next buttons */
const pager = document.getElementById('pager');
if (pager) {
  const idx = PAGES.findIndex(p => p.file === current);
  const prev = PAGES[idx - 1], next = PAGES[idx + 1];
  pager.innerHTML =
    (prev ? `<a href="${prev.file}">← Previous</a>` : '<span></span>') +
    (next ? `<a href="${next.file}">Next →</a>` : '<span></span>');
}

/* Photo lightbox */
const lb = document.getElementById('lb');
if (lb) {
  const lbImg = lb.querySelector('img');
  document.addEventListener('click', e => {
    const img = e.target.closest('figure img');
    if (img && img.getAttribute('src')) { lbImg.src = img.src; lb.style.display = 'flex'; }
    else if (e.target.closest('#lb')) { lb.style.display = 'none'; }
  });
}
