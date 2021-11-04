import React from "react";
import {render} from "@testing-library/react";
import LoginForm from "./LoginForm";
import { BrowserRouter as Router } from 'react-router-dom';

describe("Login Form Component", () => {
    it("rendered user", () => {
        const handleSignIn = () => {};
        const valueUser = ''; const valuePwd = '';

        const {getByTestId} = render(<Router><LoginForm 
            {...{handleSignIn,valueUser,valuePwd}}/></Router>);
        const input = getByTestId("loginForm_User");
        expect(input).toBeTruthy();
    });
});