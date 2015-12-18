System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.1.4"
    }
  }
});
