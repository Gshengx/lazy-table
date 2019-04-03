import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './home';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader';

// ReactDOM.render(<App />, document.getElementById('root'));
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )
}

render(App);

if(module.hot) {
    module.hot.accept('./home',() => {
        const NextApp = require('./home').default; //因为在App里使用的是export default语法，这里使用的是require,默认不会加载default的，所以需要手动加上
        render(NextApp) // 重新渲染到 document 里面
    });
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
