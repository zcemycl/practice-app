import React from "react";
import {render,fireEvent,act} from "@testing-library/react";
import DelRename from "./DelRename";
import { BrowserRouter as Router } from 'react-router-dom';

describe("Del Rename Button Group Component", () => {
    it("rendered Delete Button", () => {
        const {getByTestId} = render(<Router><DelRename/></Router>);
        const input = getByTestId("delRename_Del");
        expect(input).toBeTruthy();
    });
});