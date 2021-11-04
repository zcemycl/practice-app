import React from "react";
import {render,fireEvent,act} from "@testing-library/react";
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
    it("rendered pwd", () => {
        const handleSignIn = () => {};
        const valueUser = ''; const valuePwd = '';

        const {getByTestId} = render(<Router><LoginForm 
            {...{handleSignIn,valueUser,valuePwd}}/></Router>);
        const input = getByTestId("loginForm_Pwd");
        expect(input).toBeTruthy();
    });
    // it("change on user", async () => {
    //     await act(async () => {
    //         const handleSignIn = () => {};
    //         const valueUser = ''; const valuePwd = '';
    //         const inputUser = "IamLeo";

    //         const {getByTestId} = render(<Router><LoginForm 
    //             {...{handleSignIn,valueUser,valuePwd}}/></Router>);
    //         const input = getByTestId("loginForm_User");
    //         await fireEvent.change(input,{target:{value:inputUser}});
    //         expect(input.innerHTML).toBe(inputWord);

    //     });
        
    // });
});