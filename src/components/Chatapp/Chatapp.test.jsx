import React from "react";
import {render,fireEvent,act} from "@testing-library/react";
import Chatapp from "./Chatapp";
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import allReducer from '../../reducers'

const store = createStore(allReducer);

describe("Chatapp Component", () => {
    it("rendered Chatapp Button", () => {
        const {getByTestId} = render(<Provider store={store}>
            <Router><Chatapp/></Router>
            </Provider>
            );
        const input = getByTestId("chatapp_button");
        expect(input).toBeTruthy();
    });
});