import type React from 'react';
import { Button } from 'wix-style-react';
import { st, classes } from './app.st.css';

export interface AppProps {
    className?: string;
}



export const App: React.VFC<AppProps> = ({ className }) => {
    return (
        <main className={st(classes.root, className)}>
            <Button>Hello!</Button>
        </main>
    );
};
