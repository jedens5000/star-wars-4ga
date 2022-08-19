<!-- # WebApp boilerplate with React JS

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/react-hello-webapp.git)

<p align="center">
<a href="https://www.loom.com/share/f37c6838b3f1496c95111e515e83dd9b"><img src="https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/img/how-to.png?raw=true" /></a>
</p> -->

## Star Wars SWAPI API Project using React.

This was a School project built using React Router and Flux using the SWAPI API. The API doesn't include images so I had to bring them in from a completely different source and then match them up with the SWAPI API category and id of each one.

There is also a "Favorites" feature that allows you to select the favorites that you want to keep. Just click the "<strong>🤍 Favorite</strong>" button on each item to add that item to your list, then click it again to remove it. You can view a list of your favorites by clicking the "Favorites" dropdown in the upper right corner of the site.

Very little CSS styling was used in the style sheet of this project as Bootstrap was used instead. A future update will include links to go directly to the details of each favorite item from the Favorites menu.

<p align="center">
This project has been deployed with Vercel, so you can view it live at:<br />
	<a href="https://star-wars-4ga.vercel.app" target="_blank">https://star-wars-4ga.vercel.app</a>
</p>
<p align="center">
You can see all of my deployed projects live at:<br />
	<a href="https://www.jonedens.com" target="_blank">www.jonedens.com</a>
</p>
<br />

<p align="center">
<a href="https://star-wars-4ga.vercel.app" target="_blank"><img src="https://www.jonedens.com/images/starwars-preview.png" /></a>
</p>

<!-- ### Requirements:

- Make sure you are using node version 10

1. Install the packages:

```
$ npm install
```

2. Create a .env file:

```
$ cp .env.example .env
```

3. Start coding! and the webpack dev server with live reload, for windows, mac, linux or Gitpod:

```bash
$ npm run start
```

### Styles

You can update the `styles/index.css` or create new `.css` files inside `styles/` and import them into your current scss or js files depending on your needs.

### Components

Add more files into your `./src/js/components` or styles folder as you need them and import them into your current files as needed.

**Note (New changes)**: Components have been converted into functions to support the use of hooks:

- Instead of a class component, we're using a `const` function.
- Class `constructor` and `state` have been replaced by `useState()` hooks.
- `componentDidMount()` was replaced by `useEffect({}, [])` - It runs at mount thanks to the second parameter (`[]`).
- `Actions` and `Store` still work the same way.

```jsx
// Previous "Class Oriented"
export class Demo extends React.Component {
	constructor(props) {
		super(props);

		this.state = getState('code here');
	}
}

// New "Functional Oriented"
export const Demo = () => (
	const [state, setState] = getState('code here'); //using the state (if needed)
  const { store, actions } = useContext(Context); // using the context (if needed)

);
```

💡Note: There is an example using the Context API inside `views/demo.js`;

### Views (Components)

Add more files into your `./src/js/views` and import them in `./src/js/layout.jsx`.

### Context

This boilerplate comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)
BreathCode Lesson [view](https://content.breatheco.de/lesson/react-hooks-explained)

The `Provider` is already set. You can consume from any component using the useContext hook to get the `store` and `actions` from the Context. Check `/views/demo.js` to see a demo.

```jsx
import { Context } from "../store/appContext";
const MyComponentSuper = () => {
  //here you use useContext to get store and actions
  const { store, actions } = useContext(Context);
  return <div>{/* you can use your actions or store inside the html */}</div>;
};
```

## Publish your website!

1. **Vercel:** The FREE recomended hosting provider is [vercel.com](https://vercel.com/), you can deploy in 1 minutes by typing the following 2 commands:

Login (you need to have an account):

```sh
$ npm i vercel -g && vercel login
```

Deploy:

```sh
$ vercel --prod
```

✎ Note: If you don't have an account just go to vercel.com, create a account and come back here.

![Vercel example procedure to deploy](https://github.com/4GeeksAcademy/react-hello-webapp/blob/4b530ba091a981d3916cc6e960e370decaf2e234/docs/deploy.png?raw=true)

2. **Github Pages:** This boilerplate is 100% compatible with the free github pages hosting.
   To publish your website you need to push your code to your github repository and run the following command after:

```sh
$ npm run deploy
```

Note: You will need to [configure github pages for the branch gh-pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages) -->
