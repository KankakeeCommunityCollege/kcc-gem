# KCC Startup Template

#### Jekyll + Webpack + Babel + Sass + Autoprefixer + ...

***A startup repo for creating new websites in the KCC website redesign project***

-----

<br>

## Items TODO for Starting a New Project

### Terminal TODO:
- [ ] In terminal, install project dependencies: `npm i && bundle i`
- [ ] Remove the statup template's remote: `git remote remove origin`
- [ ] Create a new project in GitHub: <https://github.com/organizations/KankakeeCommunityCollege/repositories/new>
- [ ] In terminal, add the project's remote origin: `git remote add origin git@github.com:KankakeeCommunityCollege/<REPOSITORIES_NAME_IN_GITHUB>.git`
- [ ] Push the first commit using `-u` flag to setup tracking: `git push -u origin master`

### README TODO:

- [ ] `README.md` - replace "KCC Startup Template" with an appropriate title for this project.
- [ ] `README.md` - replace "***A startup repo for creating new websites in the KCC website redesign project***" with an appropriate description for this project.

### `package.json` TODO:

- [ ] `package.json` - replace `"name": "kcc-startup"` with an appropriate name value.

### Jekyll config TODO:

- [ ] `_config.yml` - replace `url` & `public-url: "https://www.kcc.edu"` with the appropriate sub-domain.
- [ ] `_config.yml` - replace Google Tag Manager placeholder-text with a key: `google-tag_key: Google Tag Manager key goes here`.

-----

<br>

## Overview

The Development of new KCC website is based off of designer's mockups and uses open source technologies.

**This site uses KCC's own gem-based jekyll-theme--developed in-house!**

You can find the kcc-gem-theme at https://rubygems.org/gems/kcc-gem-theme and on GitHub at https://github.com/KankakeeCommunityCollege/kcc-gem-theme/

[![Gem Version](https://badge.fury.io/rb/kcc-gem-theme.svg)](https://badge.fury.io/rb/kcc-gem-theme)

### Prerequisites

For detailed information on setting up a local development environment see: <https://developer.kcc.edu/docs/environment/>

***This README assumes you are using a modern macOS system with the Gem and Nodejs prerequisites installed. See <https://developer.kcc.edu/docs/environment/> for details.***

-----

<br>

## Requirements

 - Jekyll & Bundler:
```shell
$ gem install jekyll
$ gem install bundler
```
 - Nodejs/npm - We use NVM (Node Version Manager): <https://github.com/creationix/nvm>
   - .nvmrc file in this repo will make NVM use the Node version listed in `.nvmrc` (to avoid compatibility issues)
   - Or, if you must - Use the Nodejs installer: <https://nodejs.org/>
 - Webpack 5

-----

<br>

## Installation

-----

1. Clone (via ssh) the project and `cd` into the new project folder
2. Install the gem and npm dependencies

```bash
git clone git@github.com:KankakeeCommunityCollege/core.git
cd core
npm i && bundle i ## Or `npm install && bundle install` if you like typing more
```

-----

<br>

## Development

***Do NOT push dev builds to the GitHub repo.***

**Development changes should be made in the `master` branch.** Be sure you have the latest changes first to avoid merge conflicts:
```bash
git checkout master
git pull origin master
```

To run a development build use:
```shell
$ npm run development

# This alias in your dotfiles is convenient:
alias npm-d="npm run development"
```

The development npm script sets the `NODE_ENV` environment variable to `"development"`. Webpack checks the `NODE_ENV` and, if its set to development, uses `style-loader` to inject styling into the document's `<head>` as inline styling (`<style>...</style>`.) 

According to Webpack's docs, injecting inline styles into the document `<head>` provides a faster development environment.

Webpack will also set its mode (production/dev) depending on what the `NODE_ENV` variable is set to. In development the bundle is not minified and is easier to debug.

-----

<br>

## Production

***Only production builds should be pushed to the GitHub repo.***

**Check the production build in a browser before pushing it to GitHub!**

### Publishing workflow

Most of the KCC websites are setup to use the `master` branch to stage changes. To make them live, the changes are then brought into the `publish` branch and pushed GitHub. 

Development should have been started in the `master` branch. Production builds should also happen in the `master` branch. Once changes are finalized they can be pushed (`git push -u origin master`.) **To publish the changes to the live website**, checkout the `publish` branch and make sure it is current (`git checkout publish && git pull origin publish`.) Next, merge your changes of the `master` branch into the `publish` branch and push to GitHub: `git merge master`, accept the default commit message and `git push -u origin publish`. Lastly, switch back to the `master` branch so that the project is ready for the next time it needs editing. 


If you accidentally developed in the `production` branch its ok! Just finish up your development, push the production build to `publish`, and then bring those changes into the `master` branch and push them. This ensures the `master` branch stays even with the `publish` branch.

To run a production build use:
```shell
$ npm run production

# Another convenient alias:
alias npm-p="npm run production"
```

The production build still watches for file changes and creates a local server for previewing. **After previewing the production build in your browser,** use the `[control ^] + c` key-combination to kill the running processes. _If everything looks ok,_ you can `git add ...`, `git commit`, and `git push ...` the changes to GitHub.

A production build sets the `NODE_ENV` variable to `"production"`. Webpack then uses the `mini-css-extract-plugin` to generate, and output, a CSS file stylesheet. The stylesheet's `<link>` tag is only included in the DOM in production builds (development builds inject inline styling.) Webpack also minifies the bundle in production mode. 

_**Note:** Webpack outputs the stylesheet file into the `/assets/js/dist` folder._

**IMPORTANT: if any SCSS/CSS or JS is  modified, be sure to _commit and push the `_data/hash.yml` file along with modified SCSS/CSS/JS files._** \
_Not including `hash.yml` will break the site's main JS and CSS files!_

-----

<br>

## The [kcc-gem-theme](https://rubygems.org/gems/kcc-gem-theme)

You will notice this GitHub repo has nothing in it's `_layouts/` dir and no `assets/img/` dir. Yet, when you build the project, images are there and it obviously has a layout. That's thanks to KCC's gem-based jekyll-theme.

Having a theme gem allows us to make changes (to the shared theme elements) across multiple sites, in one place.
