// Shared JS — nav behavior + edit mode (tweaks)

(function() {
  // Edit mode availability
  let editModeActive = false;
  window.addEventListener('message', (e) => {
    if (!e.data || !e.data.type) return;
    if (e.data.type === '__activate_edit_mode') {
      editModeActive = true;
      document.body.classList.add('tweaks-on');
      const p = document.getElementById('tweaks-panel');
      if (p) p.style.display = 'block';
    }
    if (e.data.type === '__deactivate_edit_mode') {
      editModeActive = false;
      document.body.classList.remove('tweaks-on');
      const p = document.getElementById('tweaks-panel');
      if (p) p.style.display = 'none';
    }
  });
  try {
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
  } catch (e) {}
})();
