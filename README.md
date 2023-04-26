## Your Dream House

## Create project 
npm init vite@latest

## Install and configuration
- npm i -D @types/react-anchor-link-smooth-scroll@1.0.2 @types/node
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

## Set up vite.config.ts
<code>import {defineConfig} from 'vite';</code>

<code> import react from '@vitejs/plugin-react';</code>

import path from 'path';</code>

<code>

export default defineConfig({
  
  plugins: [react()], 
 
  resolve: {
    
    alias: [
        {find: "@", replacement: path.resolve(__dirname, "src")}]}
});

</code>
