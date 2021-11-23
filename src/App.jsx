import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Login from './pages/Login';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
const App = () => {
    const user = useSelector((state) => state.user.currentUser);
    return (
        <Router>
            <Switch>
                <Route path='/login'>
                    {user ? <Redirect to='/' /> : <Login />}
                </Route>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/products'>
                    <ProductList />
                </Route>
                <Route path='/products/:category'>
                    <ProductList />
                </Route>
                <Route path='/product/:id'>
                    <Product />
                </Route>
                <Route path='/register'>
                    <Register />
                </Route>
                <Route path='/cart'>
                    <Cart />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
