/**
 * KUYLAND Download Center Logic & Renderer
 */
import { siteConfig } from './config.js';

export function initDownloads(showToast) {
  const container = document.getElementById('downloads-container');
  const tabButtons = document.querySelectorAll('.tab-btn[data-tab]');

  if (!container) return;

  // Render download cards for a given category
  function renderCategory(categoryKey) {
    const items = siteConfig.downloads[categoryKey] || [];
    
    if (items.length === 0) {
      container.innerHTML = `
        <div class="glass-panel" style="padding: 2.5rem; text-align: center; grid-column: 1 / -1;">
          <p style="color: var(--color-text-muted);">Tidak ada berkas unduhan yang tersedia untuk kategori ini saat ini.</p>
        </div>
      `;
      return;
    }

    const html = items.map(item => {
      const isPlaceholder = !item.downloadUrl || item.downloadUrl === '#' || item.downloadUrl.includes('placeholder');
      const guideHtml = item.guide && item.guide.length > 0 
        ? `
          <div style="margin-top: 1rem;">
            <button type="button" class="download-guide-trigger" data-target="guide-${item.id}">
              Lihat Langkah Pemasangan ▾
            </button>
            <div id="guide-${item.id}" class="download-guide-box">
              <ol>
                ${item.guide.map(step => `<li>${step}</li>`).join('')}
              </ol>
            </div>
          </div>
        ` 
        : '';

      const iconSvg = item.category === 'PC'
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`
        : item.category === 'Android'
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="18" x2="4" y2="12"></line><line x1="20" y1="18" x2="20" y2="12"></line><rect x="7" y="10" width="10" height="12" rx="2"></rect><path d="M7 9a5 5 0 0 1 10 0"></path><circle cx="9" cy="6" r="0.75" fill="currentColor"></circle><circle cx="15" cy="6" r="0.75" fill="currentColor"></circle><line x1="8" y1="2" x2="10" y2="4"></line><line x1="16" y1="2" x2="14" y2="4"></line></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 9.4 7.55 4.24a1.78 1.78 0 0 0-2.5 1.55v12.42a1.78 1.78 0 0 0 2.5 1.55L16.5 14.6a1.78 1.78 0 0 0 0-3.2z"></path><polyline points="21 16 21 8 16 4"></polyline></svg>`;

      return `
        <article class="glass-panel glass-card-interactive download-card" id="${item.id}">
          <div class="download-card-body">
            <div class="download-card-header">
              <div class="download-icon-box">
                ${iconSvg}
              </div>
              <div style="text-align: right;">
                ${item.recommended ? '<span class="tag-badge emerald">Rekomendasi</span>' : ''}
                <span class="tag-badge">${item.category}</span>
              </div>
            </div>

            <div style="margin-top: 1.25rem;">
              <h4 style="font-size: 1.2rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.35rem;">
                ${item.name}
              </h4>
              <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.55;">
                ${item.description}
              </p>
            </div>

            <div class="download-card-meta">
              <span><strong>Versi:</strong> ${item.version}</span>
              <span>•</span>
              <span><strong>Ukuran:</strong> ${item.fileSize}</span>
              <span>•</span>
              <span>${item.updatedAt}</span>
            </div>

            ${item.requirements ? `
              <div class="download-requirements" style="margin-top: 0.85rem;">
                <strong>Kebutuhan:</strong> ${item.requirements}
              </div>
            ` : ''}

            ${guideHtml}
          </div>

          <div class="download-card-footer" style="margin-top: 1.25rem;">
            <a 
              href="${item.downloadUrl}" 
              class="btn btn-primary" 
              style="width: 100%; justify-content: center;"
              data-placeholder="${isPlaceholder ? 'true' : 'false'}"
              data-name="${item.name}"
              ${!isPlaceholder ? 'target="_blank" rel="noopener noreferrer"' : ''}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Unduh ${item.name.split(' ')[0]}
            </a>
          </div>
        </article>
      `;
    }).join('');

    container.innerHTML = html;

    // Attach guide toggle listeners
    container.querySelectorAll('.download-guide-trigger').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        const targetId = trigger.getAttribute('data-target');
        const box = document.getElementById(targetId);
        if (box) {
          const isOpen = box.classList.toggle('open');
          trigger.textContent = isOpen ? 'Tutup Langkah Pemasangan ▴' : 'Lihat Langkah Pemasangan ▾';
        }
      });
    });

    // Attach click handler to intercept placeholder downloads safely
    container.querySelectorAll('.btn[data-placeholder="true"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const name = btn.getAttribute('data-name');
        if (showToast) {
          showToast(`Tautan unduhan untuk "${name}" sedang disiapkan oleh admin Kuyland.`);
        } else {
          alert(`Tautan unduhan untuk "${name}" sedang disiapkan dalam config.js.`);
        }
      });
    });
  }

  // Tab switching logic
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const targetCategory = btn.getAttribute('data-tab');
      renderCategory(targetCategory);
    });
  });

  // Initial render: default to 'pc'
  renderCategory('pc');
}

