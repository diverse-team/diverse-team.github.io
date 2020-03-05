# DiverSE Inria/Irisa team website

This repository contains the code of the DiverSE Inria/Irisa research team hosted in https://www.diverse-team.fr/

## Development

### Requirements

* [Hugo v0.66.0](https://gohugo.io/) or later
* [Node.js v13.8.0](https://nodejs.org/) or later
* [npm 6.13.7](https://www.npmjs.com/) or later

### Installation

1. Install all required tools
2. Clone the repository

```
git clone https://github.com/diverse-team/diverse-team.github.io
cd diverse-team.github.io
```

3. Install required Node.js packages
```
cd tools
npm install
```

4. Run the Node.js scripts to complement data and assets

```
npm run fetchall
```

5. Go to the root and execute Hugo

```
hugo server
```

6. To obtain the static website, execute the following command instead

```
hugo -D
```

The website will be created in the `public` directory.

## Guides

- [How to add a new job opening?](docs/positions.md)
- [How to add a new software entry?](docs/software.md)