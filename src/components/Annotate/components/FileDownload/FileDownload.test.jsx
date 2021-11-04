import React from "react";
import {render,fireEvent,act} from "@testing-library/react";
import FileDownload from "./FileDownload";
import { BrowserRouter as Router } from 'react-router-dom';

describe("File Download Component", () => {
    it("rendered File Download Button", () => {
        const {getByTestId} = render(<Router><FileDownload/></Router>);
        const input = getByTestId("fileDown_button");
        expect(input).toBeTruthy();
    });
});