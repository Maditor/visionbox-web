// Shim de renderer.js giu nguyen 100% - khong can sua logic ben trong.
// Electron truoc day dung contextBridge de expose window.appConfig,
// gio dung Tauri invoke() nhung van giu dung API be ngoai: get()/set().
(() => {
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
