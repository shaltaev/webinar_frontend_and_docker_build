import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import styles from './style.css';

const App: FC = () => <h1 className={styles.app}>Hello world!</h1>

ReactDOM.render(<App />, document.getElementById('root'));