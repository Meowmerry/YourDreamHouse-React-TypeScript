## YourDreamHouse-React-TypeScript with Tailwind CSS
![Interior Design](https://user-images.githubusercontent.com/50789325/234722869-2561bf97-7e91-4ce1-a361-9c1f4b64ec93.gif)
![homepage](https://user-images.githubusercontent.com/50789325/234723333-7da42e10-5492-4b89-aa31-e7b64183bd7d.png)

This project is a web application that helps users to visualize their dream house by allowing them to select different design options such as house style, floor plan, and interior decoration. It is built using React with TypeScript and styled with Tailwind CSS.

## Getting Started

To run this project, you need to have Node.js and npm installed on your machine.

## Installing
```git clone https://github.com/Meowmerry/YourDreamHouse-React-TypeScript```


## Navigate to the project directory:

cd YourDreamHouse-React-TypeScript

```npm install```

## Running the App
To start the app, run:
```npm run dev```


The app should now be running on http://localhost:3000

## Built With
- React - A JavaScript library for building user interfaces.
- TypeScript - A typed superset of JavaScript that compiles to plain JavaScript.
- Tailwind CSS - A utility-first CSS framework for rapidly building custom user interfaces.


```npm init vite@latest```

## Install and configuration
```
- npm i -D @types/react-anchor-link-smooth-scroll@1.0.2 @types/node
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
```

## Set up vite.config.ts
```js
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';


export default defineConfig({
  
  plugins: [react()], 
 
  resolve: {
    
    alias: [
        {find: "@", replacement: path.resolve(__dirname, "src")}]}
});

```

## Authors
- Thasanee 

## License
This project is licensed under the MIT License - see the LICENSE file for details.
