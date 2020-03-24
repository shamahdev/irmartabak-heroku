# Web Insinyur Martabak on Development
![Insinyur Martabak Logo](static/img/icon.png)

## Project setup
```
npm install
pip install requirements.txt
```

### Bundle Webpack (need to run every change made)
```
npm run build
```

### Start Server
```
2 Ways:
1. open terminal then run server.bat
2. npm start
```

### Changelogs
24/03/2020 by BackEnd
- Added new Django package don't forget to run 'pip install -r requirements.txt'
- Created Article REST API
- Created Article models

23/03/2020 by FrontEnd
- Rating modal now show user score rate
- Fix bad vue error on console
- Menuslider now won't show menu that currently view in detail menu
- Add AOS Animations js

21/03/2020 by BackEnd
- Automatically deletes old Martabak Photo from filesystem when corresponding Martabak Record is updated with new file
- Automatically deletes Martabak Photo from filesystem when corresponding Martabak Record is deleted
- Automatically deletes Rating Object when corresponding Martabak Record is deleted
- Rating Object has been changed into One-To-One relation
- It's now easier to make Rating Object
- Fixed Django Admin Customization (I missed some part haha)

20/03/2020 by FrontEnd
- Fixed Vue errors on console
- Optimizing axios get API
- Add Auto Reload after Rating
- Add info for already rating menu
- Image will Zoom on Home Slider if hovered
- Revamping Font size
- Fixing some button size on mobile screen
- Add migrate.bat for auto migrating (for lazy people like me lol)

19/03/2020 by BackEnd
- Fixed Rating Function
- Fixed detail menu page showing error when user manually input URL or reload the page

18/03/2020 by BackEnd
- Add Rating Function for Menu

17/03/2020 by BackEnd
- Redirected to Menu views if Martabak Detail is not available

16/03/2020 by BackEnd
- Customized Django Admin Views
- Fixed static images not displaying correctly when user manually input URL

15/03/2020 by BackEnd
- Fixed Django's UrlPattern for detail views

15/03/2020 by FrontEnd
- Added npm commands for shortcut to bundle webpack and run django server
- Fixed slider error in console
- Fixed slider size in mid-low screen resolution
- Fixed font size in mid-low screen resolution
- Fixed some typos in the Home page
- Fixed static images not displaying correctly in detail page
- Added New & Promo and Awards tab to Navigation bar
- Added Detail button to Best Seller slider
- Scroll will now return to top every page changed

13/03/2020 by BackEnd
- Creating REST API for data transfering
- Creating Django Models for storing data

12/03/2020 by BackEnd
- Django-Vue Integration Via Webpack
- Syncing Vue's Router With Django's UrlPattern
- Django Debug Settings Set To False
- Showing Error 404 Page When An Exception Is Raised
- Fixed Static Image That Aren't Displayed Correctly

11/03/2020 by FrontEnd
- Added Menu page
- Added Contact page
- Added Social page
- Added Menu detail page
- Added Rating Star view
- Slider and Card image not displaying properly
- Added HomeSlider, MenuSlider, Modal Component
- Added Social media links to Sidebar and Social pages
- Added Location, FAQ, Disclaimer and Privacy Policy Page
- Added Error 404 Page
- Rating now can be Decimal

08/03/2020 by FrontEnd
- Homepage Finished
- Vue's Router Optimization
