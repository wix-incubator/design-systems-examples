import type React from 'react';
import { st, classes } from './app.st.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import ProductsPage from './ProductsPage/ProductsPage';
import AddProduct from './AddProductPage/AddProduct';
import { Context, contextValue } from './Context/context';

export interface AppProps {
    className?: string;
}

export const App: React.VFC<AppProps> = ({ className }) => (
    <Context.Provider value={contextValue()}>
        <main className={st(classes.root, className)}>
            <Router>
                <Switch>
                    <Route path="/products-page">
                        <ProductsPage />
                    </Route>
                    <Route path="/add-product">
                        <AddProduct />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/products-page" />
                    </Route>
                </Switch>
            </Router>
        </main>
    </Context.Provider>
);
