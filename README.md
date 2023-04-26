## Your Dream House
![Interior Design](https://user-images.githubusercontent.com/50789325/234722869-2561bf97-7e91-4ce1-a361-9c1f4b64ec93.gif)
![homepage](https://user-images.githubusercontent.com/50789325/234723333-7da42e10-5492-4b89-aa31-e7b64183bd7d.png)


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
