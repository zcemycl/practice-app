import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    particleBg: {
        fontFamily: "sans-serif",
        textAlign: "center",
        top: 0, left: 0, right: 0, bottom: 0,
        height: "100%",
        backgroundSize: 'cover',
        background: "#B0E0E6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position:'fixed',
        // overflow:'hidden',
    },
    particles: {
        height:'100vh',
        width:'100vw',
    },
    '@global': {
        '*::-webkit-scrollbar': {
        width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey'
    }}
}));