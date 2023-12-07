# GHIBLI STUDIO APP

This project is for learning purpose.

## Table of content
[General Description](#general-description)

[Technologies](#technologies)

[Project Structure](#project-structure)

[Instruction](#instruction)

[React + Vite](#react--vite)

## General Description
<pre>
A React application with multiple componenets using Ghibli Studio API, Material UI and Axios to show and filter the movies info.
</pre>

## Technologies

- JavaScript
- React + Vite
- HTML / CSS
- Material UI
- Axios

## Project Structure
* [src](./src)
    * [components/](./src/components)
        * [movies/](./src/components/movies)
            * [MovieGrid.jsx](./src/components/movies/MovieGrid.jsx)
            * [MovieItem.jsx](./src/components/movies/MovieItem.jsx)
        * [UI/](./src/components/UI)
            * [Header.jsx](./src/components/UI/Header.jsx)
            * [Search.jsx](./src/components/UI/Search.jsx)
            * [SortMenu.jsx](./src/components/UI/SortMenu.jsx)
            * [Spinner.jsx](./src/components/UI/Spinner.jsx)
    * [img/](./src/img)
        * [bg.jpg](./src/img/bg.jpg)
        * [favicon.ico](./src/img/favicon.ico)
        * [logo.png](./src/img/logo.png)
        * [spinner.gif](./src/img/spinner.gif)
    * [App.jsx](./src/App.jsx)
    * [index.css](./src/index.css)
    * [main.jsx](./src/main.jsx)

## Instruction
1. Open your terminal and clone the repository with the following command: 
```
git clone https://github.com/TinNguyen01600/Ghibli_Studio_App
```
2. Install all the packages:
```
npm install
```
3. Install Axios
```
npm install axios
```
4. Install Material UI:
```
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```
5. Start the application in your local machine:
```
npm run dev
```
** Or simply access the deployed version on Netlify (https://tin-nguyen-ghibli-studio-app.netlify.app/).

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh