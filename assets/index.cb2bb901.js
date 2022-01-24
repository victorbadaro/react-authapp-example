import{j as f,r as a,s as h,N as g,L as m,O as y,R as v,a as d,W as k,B as w,b as P,c as C}from"./vendor.f8a73217.js";const S=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}};S();const e=f.exports.jsx,r=f.exports.jsxs,x=f.exports.Fragment,b=a.exports.createContext({});function L({children:n}){const[i,c]=a.exports.useState(!1),[u,t]=a.exports.useState(!0);a.exports.useEffect(()=>{localStorage.getItem("authenticated")&&c(!0),t(!1)},[]);function o(){localStorage.setItem("authenticated",JSON.stringify(!0)),c(!0)}function s(){localStorage.removeItem("authenticated"),c(!1)}return e(b.Provider,{value:{authenticated:i,signIn:o,signOut:s},children:!u&&n})}function p(){return a.exports.useContext(b)}const j=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    form {
        min-width: 500px;

        input {
            display: block;
            padding: 40px;
            width: 100%;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            line-height: 26px;
            background-color: #222;
            color: #fff;

            & + input {
                margin-top: 12px;
            }
        }

        button {
            display: block;
            margin-top: 40px;
            padding: 40px;
            width: 100%;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            line-height: 26px;
            background-color: #4299E1;
            color: #fff;

            transition: background-color 200ms;

            &:hover {
                background-color: #3182CE;
            }

            &:focus {
                background-color: #2B6CB0;
            }
        }
    }
`;function A(){const[n,i]=a.exports.useState(""),[c,u]=a.exports.useState(""),{authenticated:t,signIn:o}=p();if(t)return e(g,{to:"/profile"});function s(l){l.preventDefault(),o()}return e(j,{children:r("form",{onSubmit:s,children:[e("input",{type:"email",placeholder:"E-Mail",onChange:l=>i(l.target.value),value:n}),e("input",{type:"password",placeholder:"Password",onChange:l=>u(l.target.value),value:c}),e("button",{type:"submit",children:"Login"})]})})}function E(){return e("h1",{children:"Profile"})}function O(){return e("h1",{children:"Products"})}function R(){return r(x,{children:[e("h1",{children:"Error 404"}),e("p",{children:"Page not found! =("})]})}const B=h.header`
    margin-bottom: 24px;
    height: 80px;
    background-color: #222;

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        width: 75%;
        height: 100%;

        nav {
            a {
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    border-radius: 2px;
                    background-color: #fff;
                    transition: width 200ms;
                }

                &:hover::after {
                    width: 100%;
                }

                & + a {
                    margin-left: 12px;
                }
            }
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 40px;
            height: 40px;
            border: none;
            border-radius: 40px;
            background-color: #4299E1;
            color: #fff;

            transition: background-color 200ms;

            &:hover {
                background-color: #3182CE;
            }

            &:focus {
                background-color: #2B6CB0;
            }
        }
    }
`;function I(){const{signOut:n}=p();return e(B,{children:r("div",{children:[r("nav",{children:[e(m,{to:"/profile",children:"Profile"}),e(m,{to:"/products",children:"Products"})]}),e("button",{type:"button",onClick:n,children:"Logout"})]})})}function N(){const{authenticated:n}=p();return n?r(x,{children:[e(I,{}),e(y,{})]}):e(g,{to:"/"})}function F(){return r(v,{children:[e(d,{path:"/",element:e(A,{})}),r(d,{element:e(N,{}),children:[e(d,{path:"/profile",element:e(E,{})}),e(d,{path:"/products",element:e(O,{})})]}),e(d,{path:"*",element:e(R,{})})]})}const M=k`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: #333;
        color: #fff;

        a {
            text-decoration: none;
            color: inherit;
        }

        button {
            cursor: pointer;
        }
    }
`;function z(){return r(L,{children:[e(M,{}),e(w,{children:e(F,{})})]})}P.render(e(C.StrictMode,{children:e(z,{})}),document.getElementById("root"));
