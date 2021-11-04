import React from "react";
import {render,fireEvent,act} from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import allReducer from '../../reducers'

const store = createStore(allReducer);

describe("Del Rename Button Group Component", () => {
    it("rendered Delete Button", () => {
        const {getByTestId} = render(<Provider store={store}>
            <Router><Navbar {...{anchorEl:null}}/>
            </Router></Provider>);
        const input = getByTestId("navbar_Menu");
        expect(input).toBeTruthy();
    });
});