/**
 * Backend API base URL (no trailing slash).
 * On localhost / 127.0.0.1 we use the local Express server (default port 3000).
 * If backend/.env sets PORT (e.g. 3001 when 3000 is busy), change LOCAL_API_PORT to match.
 */
(function () {
  const LOCAL_API_PORT = 3000;
  const host = typeof window !== "undefined" ? window.location.hostname : "";
  const isLocal = host === "localhost" || host === "127.0.0.1";
  window.API_BASE = isLocal
    ? `http://localhost:${LOCAL_API_PORT}`
    : "https://elite-pre-order-backend-1.onrender.com";
})();
