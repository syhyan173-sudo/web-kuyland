/**
 * KUYLAND Main JavaScript Entrypoint
 */
import { siteConfig } from './config.js';
import { initNavigation } from './navigation.js';
import { initDownloads } from './downloads.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Toast Notification Manager
  const toastElement = document.getElementById('toast');
  let toastTimeout = null;

  function showToast(message) {
    if (!toastElement) return;
    const toastText = toastElement.querySelector('.toast-message');
    if (toastText) toastText.textContent = message;

    toastElement.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastElement.classList.remove('show');
    }, 3200);
  }

  // 2. Populate Dynamic Server & Community Data from config.js
  populateConfigData();

  // 3. Setup Clipboard Copy functionality for Server IP
  setupCopyButtons(showToast);

  // 4. Setup FAQ Accordion
  setupFaqAccordion();

  // 5. Initialize Navigation, Downloads, and Animations
  initNavigation();
  initDownloads(showToast);
  initAnimations();
});

/**
 * Injects dynamic configuration values from config.js into DOM elements
 */
function populateConfigData() {
  const { server, community } = siteConfig;

  // Server IP text injections
  const ipFull = `${server.ip}:${server.port}`;
  document.querySelectorAll('[data-bind="server-ip-full"]').forEach(el => {
    el.textContent = ipFull;
  });
  document.querySelectorAll('[data-bind="server-ip"]').forEach(el => {
    el.textContent = server.ip;
  });
  document.querySelectorAll('[data-bind="server-port"]').forEach(el => {
    el.textContent = server.port;
  });

  // Server Status & Details
  document.querySelectorAll('[data-bind="server-name"]').forEach(el => {
    el.textContent = server.name;
  });
  document.querySelectorAll('[data-bind="server-platform"]').forEach(el => {
    el.textContent = server.platform;
  });
  document.querySelectorAll('[data-bind="server-devices"]').forEach(el => {
    el.textContent = server.devices;
  });
  document.querySelectorAll('[data-bind="server-status-label"]').forEach(el => {
    el.textContent = server.statusLabel;
  });

  // Player count handling (Strict adherence to rule: No fake statistics!)
  const playerCountElements = document.querySelectorAll('[data-bind="player-count"]');
  playerCountElements.forEach(el => {
    if (server.playerCount !== null && server.maxPlayers !== null) {
      el.textContent = `${server.playerCount} / ${server.maxPlayers} Pemain`;
    } else {
      el.textContent = "open.mp Sinkron";
    }
  });

  // Discord & Community Links
  document.querySelectorAll('[data-bind="discord-url"]').forEach(el => {
    if (el.tagName.toLowerCase() === 'a') {
      el.setAttribute('href', community.discord || '#');
      if (community.discord && community.discord !== '#') {
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener noreferrer');
      }
    }
  });
}

/**
 * Handles copy-to-clipboard interactions for Server IP
 */
function setupCopyButtons(showToast) {
  const copyButtons = document.querySelectorAll('[data-action="copy-ip"]');
  const serverIpAddress = `${siteConfig.server.ip}:${siteConfig.server.port}`;

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(serverIpAddress);
        } else {
          // Fallback for non-https or older browsers
          const textArea = document.createElement('textarea');
          textArea.value = serverIpAddress;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }

        showToast(`IP Server "${serverIpAddress}" berhasil disalin!`);

        // Temporary visual checkmark feedback
        const originalText = btn.innerHTML;
        btn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Tersalin!</span>
        `;
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2200);

      } catch (err) {
        showToast(`Gagal menyalin IP otomatis. Silakan salin manual: ${serverIpAddress}`);
      }
    });
  });
}

/**
 * Renders and handles accessible accordion interactions for FAQ
 */
function setupFaqAccordion() {
  const faqListContainer = document.getElementById('faq-accordion-list');
  if (!faqListContainer) return;

  // Render questions from siteConfig.faq
  const faqHtml = siteConfig.faq.map((item, index) => {
    const isFirst = index === 0;
    return `
      <div class="accordion-item ${isFirst ? 'active' : ''}">
        <button 
          class="accordion-header" 
          aria-expanded="${isFirst ? 'true' : 'false'}" 
          aria-controls="faq-desc-${index}"
          id="faq-header-${index}"
        >
          <span>${item.question}</span>
          <svg class="accordion-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div 
          class="accordion-body" 
          id="faq-desc-${index}" 
          role="region" 
          aria-labelledby="faq-header-${index}"
        >
          <p>${item.answer}</p>
        </div>
      </div>
    `;
  }).join('');

  faqListContainer.innerHTML = faqHtml;

  // Click interaction logic
  const items = faqListContainer.querySelectorAll('.accordion-item');
  items.forEach(item => {
    const headerBtn = item.querySelector('.accordion-header');
    headerBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items for a clean single-open accordion feel
      items.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        headerBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        headerBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

