
<p align="center">
    <img alt="VEROE6" title="#app" src=".github/icon.svg" width="250px" />
</p>
    <h1 align="center">VERO E6</h1>

<h4 align="center">Real-time coronavirus contagious areas in Brazil</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/KZTN/VEROE6.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/KZTN/VEROE6.svg">
  
  <a href="https://github.com/KZTN/COVID-RN/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/KZTN/VEROE6.svg">
  </a>

  <a href="https://github.com/KZTN/VEROE6/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/KZTN/VEROE6.svg">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

## 💻 Project
VERO E6 is an ML interface that aims to reduce the contagion of threatened by COVID-19 in Brazil

## 🤔 Reason

By the country not offer a complete coverage of where is focused the main place of contamination. The project aims to:
-  Make a full coverage of all Brazil territory covid focus 
-  Alert users to avoid dangerous places


## Starting...
These instructions will provide a copy of the project running on your local machine for development and testing purposes.

### Prerequisites
What you need to install the software:

```
node v12.x
yarn 1.22.4
npm 6.14.4
git
```
### Installing the project🚀
Cloning the project:

```
git clone https://github.com/KZTN/VEROE6.git
```

Go to the project folder:

```
cd VEROE6
```

Create an .env file at the root of the project and add the following lines:

```bash
REACT_APP_GOOGLE_KEY= YOUR_GOOGLE_API_HERE
```
> To get your own google API go to https://console.cloud.google.com/

Getting project dependencies:

```bash
yarn install
```

Run the project:

```bash
yarn start
```

Visit http://localhost:3000 with your browser to see the result. 🎉

## How to contribute

- Fork this project
- Create a branch with your feature: `git checkout -b minha-feature`;
- Commit your changes: `git commit -m 'feat: Minha nova feature'`;
- Push to your branch: `git push origin minha-feature`.

After the merge of your pull request is done, you can delete your branch.
