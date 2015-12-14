# typescript-boilerplate

Boilerplate code for a typescript web project using JSPM and gulp.

## Getting Started

To get started execute:

```bash
run npm install
```

 This will install the required node modules, install the jspm packages and install the typescript definitions.

To install the jspm packages:

```bash
npm run jspm
```

To install the typescript definitions

```bash
npm run tsd
```

## Building

To build in developer mode (This will watch for source code changes)

```bash
npm run dev
```

To build the code without watching for changes:

```bash
npm run build:release
```

## Workspace Cleaning

To clean the build files:

```bash
npm run clean:build
```

To clean installed files (npm, jspm):

```bash
npm run clean:install
```

To clean everything above:
```bash
npm run clean:all
```
