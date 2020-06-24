# Insinyur Martabak's Website
![Icon](frontend/src/assets/img/icon.png)

![GitHub contributors](https://img.shields.io/github/contributors/shaddamah/irmartabak-heroku)
![Front-end team](https://img.shields.io/badge/frontend%20team-shaddamah-blue)
![Back-end team](https://img.shields.io/badge/backend%20team-harizMunawar%20&%20GaniyaMustafa-red)
![GitHub followers](https://img.shields.io/github/followers/Shaddamah?style=social)
![GitHub stars](https://img.shields.io/github/stars/Shaddamah/nyepak-bola?style=social)
![npm](https://img.shields.io/npm/v/vue-cli)
![PyPI - Django Version](https://img.shields.io/pypi/djversions/djangorestframework)
![NPM](https://img.shields.io/npm/l/vue-cli)
![GitHub last commit](https://img.shields.io/github/last-commit/Shaddamah/irmartabak-heroku)
![GitHub issues](https://img.shields.io/github/issues/shaddamah/irmartabak-heroku)
![Website](https://img.shields.io/website?url=http%3A%2F%2Fwebirmartabak.herokuapp.com%2F)

Insinyur Martabak's official website project built with Django & Vue x Heroku hosting. [Check the live demo here!](https://webirmartabak.herokuapp.com/)

If you found a bug, then let us know!

## Installation
To get started, Install [npm]() and [pip]() before running first setup commands below. After that bundle webpack assets and then run the server (You need to re-bundle for every changes made)

__1. First Setup__
```
npm install
pip install -r requirements.txt
```

__2. Bundle Webpack assets__
```
npm run build
```

__3. Run Server__
```
2 Ways:
1. open terminal and run server.bat
2. npm start
```
## Built with
* [Vue](https://cli.vuejs.org/)
* [Webpack](https://webpack.js.org/)
* [Django](https://www.djangoproject.com/)
* [Heroku](https://www.heroku.com/)

## Changelogs

**11/05/2020 by back-end team**
- Improved URL Handling
- Implemented comments from database
- Implemented news and promo from database

**10/05/2020 by back-end team**
- Updating Python (This project now use Python 3.8)
- Added new Django package don't forget to run 'pip install -r requirements.txt'
- Improve Admin side list
- Added search feature for Martabak in Admin side list
- Added filter feature for Admin side list
- Added Image preview in Comment's form
- Added Image preview in Article's form
- Automatically deletes old Comment Photo from filesystem when corresponding Comment Record is updated with new file
- Automatically deletes Comment Photo from filesystem when corresponding Comment Record is deleted
- Automatically deletes old Article Photo from filesystem when corresponding Article Record is updated with new file
- Automatically deletes Article Photo from filesystem when corresponding Article Record is deleted

**09/05/2020 by back-end team**
- Added Image preview in Martabak's form
- Changed Martabak model
- Created Comment model
- Created Comment REST API
- Refactored some code for better readability

**18/04/2020 by front-end team**
- Fixed Skeleton Loader layout on Detail Page
- Static Images are now compressed (from 3.72 MB to 486 KB)
- Fixed About Developer images
- Fixed Comment slider's image not having same ratio
- Added User's Rating to Comment slider

**17/04/2020 by front-end team**
- Added Comment content from Google Review (Static)
- Added News & Promo Page
- Added Awards Page
- Added About Developers Content

**16/04/2020 by front-end team**
- Skeleton load now showing properly on Menu and Detail page
- Navbar and Homeslider aren't rendered with LazyLoad method anymore

**15/04/2020 by front-end team**
- Added About Developer page
- Added Back to Top Button
- Fixed Footer not fix placed in bottom if the content's height is under 100vh
- Added button to go to menu page under Menu Slider
- Added button to go back to home page at the end of Disclaimer and Privacy Policy page
- Fixed several typos in Privacy Policy page
- Removed FAQ Page

**14/04/2020 by front-end team**
- Change Webpack bundle mode to production mode to compress the app.js size
- All Icons now use LazyLoaded FontAwesome Icon (increase web load speed, a lot!)
- Webpack chunks are now split/Add SplitChunk
- Webpack now use minified vue.js for production
- Rating star component now use 1 dependency instead of 2
- Decrease app.js webpack bundle size by 93% (from 8 MB to 576 KiB)
- Fixing Home Slider not responsive in small mobile device (Screen Size < 480px)

**13/04/2020 by front-end team**
- Add Skeleton Loader for every axios content
- Change all static framework css, js and font to Node Modules Import
- Modal/popup now shows faster 
- Remove unused CSS styling
- Remove unused node modules dependencies
- Downgrading JQuery dependency version to a stable version

##### [Alpha Development changelogs](changelog.txt)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

![Icon](frontend/src/assets/img/logo.png)
