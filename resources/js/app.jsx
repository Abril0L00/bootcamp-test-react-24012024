

import 'bootstrap';
import React from 'react';
import {createRoot} from 'react-dom/client';
import { PostsIndex } from './bases/test-01/PostsIndex';
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */


/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


export const App = ()=> {
    return (
        <>
        {/* <FatherComponent></FatherComponent> */}
        {/* <Counter></Counter> */}
        {/* <MultipleCounter></MultipleCounter> */}
        {/* <Form></Form> */}
        {/* <MultipleInput></MultipleInput> */}
        {/* <EffectCleunUp></EffectCleunUp> */}
        <PostsIndex></PostsIndex>
        </>
    )
}

createRoot(document.getElementById('root-react')).render(<App />);
