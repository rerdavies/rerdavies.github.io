#!/bin/bash
npm run build
# Copy SPA fallback to 404.html for GitHub Pages client-side routing
cp build/client/__spa-fallback.html build/client/404.html
