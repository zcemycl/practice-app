import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    position: 'relative',
  },
  root: {
    flexGrow: 1,
  },
  input: {
    display: 'none',
  },
  grid: {
    // padding: '15vh 0 0 0',
    height: '70vh',
  },
  card: {
    maxWidth:'100%',
    height: '100%', 
    textAlign: 'center',
    padding: "0",
    margin:"0",
    borderRadius:"0",
  },
  annotateRegion:{
    display:"inline-block",
    position:"relative",
    width:"100%",
    // height:"100%",
  },
  media: {
    position:"absolute",
    zIndex:"1",
    width:"100%",
    opacity:"0.5",
  },
  canvas: {
    width:"100%",
    backgroundColor:"grey",
    zIndex:"0",
    margin: "0",
    padding: "0",
    borderRadius:"0",
    // height:"100%",
  },
}));