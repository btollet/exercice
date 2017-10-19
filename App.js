import {TabNavigator} from 'react-navigation';

const Profil = require('./Class/Profil.js');
const Gallery = require('./Class/Gallery.js');
const Todo = require('./Class/Todo.js');

export default App = TabNavigator({
	Gallery: {screen: Gallery},
	Profile: {screen: Profil},
	TodoList: {screen: Todo}
});
