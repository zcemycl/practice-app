import {Glitch,Text,Tooltip} from "./components";

const Steps = ({setAnchorEl}) => {

    const steps = [
    {
        selector: '[data-tut="reactour__tree"]',
        content: ()=>(
            <div>
                <Glitch data-glitch="Knowledge Graph">Knowledge Graph</Glitch>
                <Text color="#e5e5e5">
                    <Tooltip data-tooltip="action">Click</Tooltip> Node: Zoom-in<br/>
                    <Tooltip data-tooltip="action">Click</Tooltip> Background: Zoom-out<br/>
                    <Tooltip data-tooltip="action">Double Click</Tooltip> Node: View Content<br/>
                </Text>
            </div>
        ),
        style: {
            backgroundColor: "black",
            color: "white",
        },
        position: 'center',
        },
    {
        selector: '[data-tut="reactour__navbar_home"]',
        content: ()=>(
            <div>
                <Glitch data-glitch="Home">Home</Glitch>
                <Text color="#e5e5e5">
                    Back to Home Page.
                </Text>
            </div>
        ),
        style: {
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
        },
        action: node => {
            setAnchorEl(null);
        },
        },
    {
        selector: '[data-tut="reactour__navbar_content"]',
        content: ()=>(
            <div>
                <Glitch data-glitch="Content">Demo Bookmarks</Glitch>
                <Text color="#e5e5e5">
                    Click to choose view list of demos. 
                </Text>
            </div>
        ),
        style: {
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
        },
        action: node => {
            setAnchorEl(null);
        },
        },
    {
        selector: '[data-tut="reactour__navbar_content"]',
        content: ()=>(
            <div>
                <Glitch data-glitch="List of Demos">List of Demos</Glitch>
                <Text color="#e5e5e5">
                    Choose the demo. <br/>
                    Some Demos require signing up.
                </Text>
            </div>
        ),
        style: {
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
        },
        action: node => {
            setAnchorEl(null);
            node.click();
        },
        highlightedSelectors: ['[data-tut="reactour__navbar_right"]','.menuItem1',
        '.menuItem9'],
        resizeObservables: ['[data-tut="reactour__navbar_right"]','.menuItem1',
        '.menuItem9'],
        },
    {
        selector: '[data-tut="reactour__navbar_git"]',
        content: ()=>(
            <div>
                <Glitch data-glitch="Github">Github</Glitch>
                <Text color="#e5e5e5">
                    All my codes are open source !!
                </Text>
            </div>
        ),
        style: {
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
        },
        action: node => {
            setAnchorEl(null);
        },
        },
    {
        selector: '[data-tut="reactour__navbar_linkedin"]',
        content: ()=>(
            <div>
                <Glitch data-glitch="LinkedIn">LinkedIn</Glitch>
                <Text color="#e5e5e5">
                    Make a connection. <span role="img" aria-label="sheep">🌝</span>
                </Text>
            </div>
        ),
        style: {
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
        },
        action: node => {
            setAnchorEl(null);
        },
        },    
    ];

    return steps;

}

export default Steps;