import React from "react";
import {render,fireEvent,act} from "@testing-library/react";
import Map from "./Map";
import { BrowserRouter as Router } from 'react-router-dom';

describe("3D Map Component", () => {
    it("rendered 3D Map", () => {
        const {getByTestId} = render(<Router><Map/></Router>);
        const input = getByTestId("3dmap");
        expect(input).toBeTruthy();
    });
});