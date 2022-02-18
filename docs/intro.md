---
sidebar_position: 1
---

# Introduction

🚀 MUI-Datatables is a **responsive datatables** component built on top of **Material-UI**.

📦 Out of the box, it has **various responsive modes** like simple, standard and vertical.

ℹ It comes with **various features** such as searching, filtering, sorting, pagination, resizable columns, view/hide
columns, draggable columns, exporting, printing, selectable rows, expandable rows and **easy to customize** with the
help of material ui.

## Fast Track ⏱️

Get started by **installing mui-datatables** as a dependency.

### Install mui-datatables

MUI Datatables is available as a package on NPM for use in a Node application:

```bash npm2yarn
npm install mui-datatables
```

### Required Packages

With mui-datatables you also need to have these [@mui-material](https://www.npmjs.com/package/@mui/material)
, [@mui/icons-materials](https://www.npmjs.com/package/@mui/icons-material)
and [@mui/styles](https://www.npmjs.com/package/@mui/styles) dependencies installed in your node application.

```bash npm2yarn
npm install @mui-material @mui/icons-materials @mui/styles
```

### Usage

The below is sample of mui-datatables with minimal configuration.

```jsx
import MUIDataTable from "mui-datatables";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider
} from "@mui/material/styles";

const columns = [
  {
    name: "hero",
    label: "Superhero",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {name: "Bruce Wayne", hero: "Batman"},
  {name: "Clark kent", hero: "Superman"},
  {name: "Arthur Curry", hero: "Aquaman"}
];

const options = {
  responsive: "standard"
};

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme()}>
        <MUIDataTable
          title={"Superheros List"}
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
```

The output of code is in this [sandbox](https://codesandbox.io/s/basic-sample-mui-datatables-xd72v3?file=/src/App.js):

<iframe 
  class="codesandbox"
  src="https://codesandbox.io/embed/basic-sample-mui-datatables-xd72v3?fontsize=14&hidenavigation=1&theme=dark&runonclick=1" 
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
  style={{width:"100%", height:"500px", border:0, borderRadius: "8px", overflow:"hidden"}}
/>

## Features

Update the features of mui-datatables

## Staying Informed

Social media links.

## Something Missing ?

If you find issues with the documentation or have suggestions on how to improve the documentation or
the project in general, please [file an issue](https://github.com/ashfaqnisar/mui-datatables-docs/issues) for us.
