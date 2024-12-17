"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const index = `<!-- HTML for static distribution bundle build --><!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Swagger UI</title>
    <link
      rel="stylesheet"
      type="text/css"
      href="<%=backendUrl%>/plugins/documentation/swagger-ui.css"
    />
    <link
      rel="icon"
      type="image/png"
      href="<%=backendUrl%>/plugins/documentation/favicon-32x32.png"
      sizes="32x32"
    />
    <link
      rel="icon"
      type="image/png"
      href="<%=backendUrl%>/plugins/documentation/favicon-16x16.png"
      sizes="16x16"
    />
    <style>
      html {
        box-sizing: border-box;
        overflow: -moz-scrollbars-vertical;
        overflow-y: scroll;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
        background: #fafafa;
      }
    </style>
  </head>

  <body>
    <div id="swagger-ui"></div>
    <script class="custom-swagger-ui">
      window.onload = function() {
        const ui = SwaggerUIBundle({
          url: "https://petstore.swagger.io/v2/swagger.json",
          spec: <%=spec%>,
          dom_id: '#swagger-ui',
          docExpansion: "none",
          deepLinking: true,
          presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset,
          ],
          plugins: [
            SwaggerUIBundle.plugins.DownloadUrl,
          ],
          layout: "StandaloneLayout",
        });

        window.ui = ui;
      }
    <\/script>

    <script src="<%=backendUrl%>/plugins/documentation/swagger-ui-bundle.js"><\/script>
    <script src="<%=backendUrl%>/plugins/documentation/swagger-ui-standalone-preset.js"><\/script>
  </body>
</html>
`;
exports.default = index;
