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