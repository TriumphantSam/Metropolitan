const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;
const root = __dirname;

// Read .env file if present (zero-dependency env loader)
const envPath = path.join(root, ".env");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  envContent.split(/\r?\n/).forEach((line) => {
    if (!line || line.startsWith("#")) return;
    const parts = line.split("=");
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const value = parts.slice(1).join("=").trim().replace(/^['"]|['"]$/g, "");
      process.env[key] = value;
    }
  });
}

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const server = http.createServer((request, response) => {
  // Parse cookies
  const cookies = {};
  const cookieHeader = request.headers.cookie;
  if (cookieHeader) {
    cookieHeader.split(";").forEach((cookie) => {
      const parts = cookie.split("=");
      cookies[parts[0].trim()] = (parts[1] || "").trim();
    });
  }
  const isAuthorized = cookies["mfh_authorized"] === "true";

  // Check query parameter
  const parsedUrl = new URL(request.url, `http://${request.headers.host || "localhost"}`);
  const previewKey = process.env.PREVIEW_KEY || "preview";
  const previewValue = process.env.PREVIEW_VALUE || "true";
  const hasPreviewParam = parsedUrl.searchParams.get(previewKey) === previewValue;

  if (hasPreviewParam) {
    response.writeHead(302, {
      "Set-Cookie": "mfh_authorized=true; Path=/; Max-Age=2592000", // 30 days
      "Location": "/"
    });
    response.end();
    return;
  }

  let requestedPath = parsedUrl.pathname === "/" ? "/index.html" : parsedUrl.pathname;
  const safePath = path.normalize(decodeURIComponent(requestedPath)).replace(/^(\.\.[/\\])+/, "");
  const ext = path.extname(safePath);

  // If requesting HTML and not authorized, serve the under-construction page
  let filePath = path.join(root, safePath);
  const isHtmlRequest = ext === "" || ext === ".html";

  if (isHtmlRequest && !isAuthorized) {
    filePath = path.join(root, "under-construction.html");
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(error.code === "ENOENT" ? 404 : 500, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      response.end(error.code === "ENOENT" ? "Not found" : "Server error");
      return;
    }

    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream",
    });
    response.end(content);
  });
});

server.listen(port, () => {
  console.log(`Metropolitan Family Hospital site running at http://localhost:${port}`);
});
