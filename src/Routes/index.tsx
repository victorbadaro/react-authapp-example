import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Profile } from '../pages/Profile';
import { Products } from '../pages/Products';
import { NotFound } from '../pages/NotFound';
import {  AuthenticationChecker } from './AuthenticationChecker';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            
            <Route element={<AuthenticationChecker />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/products" element={<Products />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}