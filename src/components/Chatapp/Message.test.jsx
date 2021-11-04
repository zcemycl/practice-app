import React from "react";
import {render} from "@testing-library/react";
import Message from "./Message";
import { BrowserRouter as Router } from 'react-router-dom';

describe("Chatapp Message Component", () => {
    it("rendered Message", () => {
        const {getByTestId} = render(<Message/>);
        const input = getByTestId("message");
        expect(input).toBeTruthy();
    });
});