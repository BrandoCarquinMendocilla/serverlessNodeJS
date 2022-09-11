declare const swaggerUI = "<!DOCTYPE html>\n<html>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"https://unpkg.com/swagger-ui-dist@3.12.1/swagger-ui.css\">\n\n<head>\n    <div id=\"swagger-ui\"></div>\n    <script src=\"https://unpkg.com/swagger-ui-dist@3.12.1/swagger-ui-bundle.js\"></script>\n    <script src=\"https://unpkg.com/swagger-ui-dist@3.12.1/swagger-ui-standalone-preset.js\"></script>\n    <script>\n       window.onload = function() {\n           const ui = SwaggerUIBundle({\n              url: window.location.href+\".json\",\n              dom_id: '#swagger-ui',\n              presets: [\n                SwaggerUIBundle.presets.apis,\n                SwaggerUIStandalonePreset\n                ],\n              layout: \"StandaloneLayout\"\n           })\n           window.ui = ui;\n       }\n    </script>\n</head>\n\n<body></body>\n</html>";