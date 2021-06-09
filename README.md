![logo](https://user-images.githubusercontent.com/55994508/121374652-aed2c480-c905-11eb-9880-22f931b44a18.png)
# Project: Mobile/Desktop Navbar
## About
This project is the response to a pre-interview assignment by Pocket RN. I will be attempting to satisfy all requirements for this Assignment to the best of my abilities.

## Deployed Project

See the project deployed to Netlify [here](https://pocket-rn-mobile-desktop-navbar.netlify.app/)
## Technologies

- Javascript
- React

## Requirements & Specifications

- [x] Create React app using [create-react-app.dev](https://create-react-app.dev/)
- [0] Set it up in Typescript
- [x] Match CSS properties to Figma specs [here](https://www.figma.com/file/pWbHTagWnjetKESFxFwwwd/Coding-Assessment-Designs?node-id=1%3A128)
- [x] Use Mulish as a font
- [x] Use the logo provided [here](https://pocketrn.com/static/media/Logo.b9fcd954.png)
- [x] Use the icons provided in SVG format
- [x] Instructions to run the project locally
- [x] Cannot use libraries such as Material-UI with design components

### Appendix A - Menu Icon

```
<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
</svg>
```

### Apendix B - Close Icon

```
<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path
d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,
19L19,17.59L13.41,12L19,6.41Z" />
</svg>
```

## Download and Run this App 

- Open your terminal and then type
``
$ git clone {the url to the GitHub repo}
``
- This clones the repo

- cd into the new folder and type
``
$ npm install
``
- This installs the required dependencies

- To run the React project.
``
$ npm start
``

## Project Construction

I installed the react app first, then started to build the components to later develop each component based on their needed use. For the responsive design I used this easy code based on ``useState`` Hook:
``
const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
``
I used flexbox and webkit to set layout and extra boldness for the mobile menu.

## Images from Figma

<img width="825" alt="Screen Shot 2021-06-03 at 9 46 33 AM" src="https://user-images.githubusercontent.com/55994508/121377837-4b966180-c908-11eb-99a4-99a8fe75a2c4.png">
<img width="215" alt="Screen Shot 2021-06-03 at 9 46 04 AM" src="https://user-images.githubusercontent.com/55994508/121377888-55b86000-c908-11eb-834d-40f7860fe589.png">
<img width="215" alt="Screen Shot 2021-06-03 at 9 46 20 AM" src="https://user-images.githubusercontent.com/55994508/121377938-5f41c800-c908-11eb-82ef-f78899dfa17d.png">

**_Sources:_**

[favicon.ico](https://favicon.io/favicon-converter/)
[State Hook](https://reactjs.org/docs/hooks-state.html)
[Disable eslint](https://stackoverflow.com/questions/27732209/turning-off-eslint-rule-for-a-specific-line)
[Mulish Font by Google Fonts](https://fonts.google.com/specimen/Mulish)



