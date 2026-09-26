
(() => {
  // Ban web (khong co Tauri): bo qua, renderer.js tu dung localStorage + tai file ve may
  if (!window.__TAURI__?.core) return;
  const { invoke } = window.__TAURI__.core;

  window.appConfig = {
    get: () => invoke('config_get'),
    set: (data) => invoke('config_set', { data })
  };

  // format: 'txt' | 'docx' — mo hop thoai native de chon noi luu, roi ghi file.
  // Tra ve true neu da luu, false neu nguoi dung bam Cancel.
  window.fileExport = {
    save: (content, format, suggestedName) => invoke('export_file', { content, format, suggestedName })
  };
})();
