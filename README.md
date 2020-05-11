![Insinyur Martabak Logo](static/img/icon.png)
# Insinyur Martabak's Website x Heroku
[Check the website!](https://webirmartabak.herokuapp.com/)
__[Found bug? Let us know!](https://github.com/Shaddamah/irmartabak-heroku/issues)__


## Development Setup

__Setup__

```
npm install
pip install requirements.txt
```

__Bundle Webpack__

```
npm run build
```

__Running Server__

```
2 Ways:
1. open terminal then run server.bat
2. npm start
```

## Changelogs

11/05/2020 by BackEnd
- Improved URL Handling
- Implemented comments from database

10/05/2020 by BackEnd
- Updating Python (This project now use Python 3.8)
- Added new Django package don't forget to run 'pip install -r requirements.txt'
- Improve Admin side list
- Added search feature for Martabak in Admin side list
- Added filter feature for Admin side list
- Added Image preview in Comment's form
- Added Image preview in Article's form
- Automatically deletes old Comment Photo from filesystem when corresponding Martabak Record is updated with new file
- Automatically deletes Comment Photo from filesystem when corresponding Martabak Record is deleted
- Automatically deletes old Article Photo from filesystem when corresponding Martabak Record is updated with new file
- Automatically deletes Article Photo from filesystem when corresponding Martabak Record is deleted

09/05/2020 by BackEnd
- Added Image preview in Martabak's form
- Changed Martabak model
- Created Comment model
- Created Comment REST API
- Refactored some code for better readability

18/04/2020 by FrontEnd
- Fixed Skeleton Loader layout on Detail Page
- Static Images are now compressed (from 3.72 MB to 486 KB)
- Fixed About Developer images
- Fixed Comment slider's image not having same ratio
- Added User's Rating to Comment slider

17/04/2020 by FrontEnd
- Added Comment content from Google Review (Static)
- Added News & Promo Page
- Added Awards Page
- Added About Developers Content

16/04/2020 by FrontEnd
- Skeleton load now showing properly on Menu and Detail page
- Navbar and Homeslider aren't rendered with LazyLoad method anymore

15/04/2020 by FrontEnd
- Added About Developer page
- Added Back to Top Button
- Fixed Footer not fix placed in bottom if the content's height is under 100vh
- Added button to go to menu page under Menu Slider
- Added button to go back to home page at the end of Disclaimer and Privacy Policy page
- Fixed several typos in Privacy Policy page
- Removed FAQ Page

14/04/2020 by FrontEnd
- Change Webpack bundle mode to production mode to compress the app.js size
- ~~Material Designs Icon now included in node_modules (will change later due to large size of font files)~~
- All Icons now use LazyLoaded FontAwesome Icon (increase web load speed, a lot!)
- Webpack chunks are now split/Add SplitChunk
- Webpack now use minified vue.js for production
- Rating star component now use 1 dependency instead of 2
- Decrease app.js webpack bundle size by 93% (from 8 MB to 576 KiB)
- Fixing Home Slider not responsive in small mobile device (Screen Size < 480px)

13/04/2020 by FrontEnd
- Add Skeleton Loader for every axios content
- Change all static framework css, js and font to Node Modules Import
- Modal/popup now shows faster 
- Remove unused CSS styling
- Remove unused node modules dependencies
- Downgrading JQuery dependency version to a stable version

[Alpha Development changelogs](changelog.txt)