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
  grid: {
    // padding: '15vh 0 0 0',
    height: '70vh',
  },
  card: {
    maxWidth:'100%',
    height: '100%', 
    textAlign: 'center',
  },
  annotateRegion:{
    display:"inline-block",
    position:"relative",
    width:"100%"
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
    zIndex:"20",

  },
}));