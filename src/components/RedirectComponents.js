import React from 'react';
// 👇️ import Navigate instead of Redirect
import { Navigate } from 'react-router-dom';

export default function RedirectComponents() {

    return (
        <div>
            <Navigate to="/en" />
        </div>
    );
}