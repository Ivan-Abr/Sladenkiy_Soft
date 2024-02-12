import React from 'react';
import logo from './logo.svg';
// import './App.css';

function App() {
    const [count, setCount] = React.useState(0)
    return React.createElement('div', {className: 'container'}, [
        React.createElement('h1', {className: 'font-bold', key: 1}, `Test JSX ${count}`),
        React.createElement('button', {className: 'py-2 px-4 border', key: 2,
            onClick:()=> setCount(count + 1)

        }, 'Click me!')
    ])

}