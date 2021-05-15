import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar*0.7,
  content: {
    // flexGrow: 1,
    // padding: theme.spacing(0),
    // position: 'relative',
    height:"100%",
    width:"100%",
    backgroundColor:"transparent",
    
  },
  root: {
    flexGrow: 1,
  },
  grid: {
    height: '100%',
    paddingTop: "20px",
    paddingLeft: '20px',
    paddingRight: '20px',
    overflowY: "scroll",
    overflowX: "fixed",
  },
  card: {
    width:'100%',
    height: '100%', 
    paddingLeft: '20px',
    paddingRight: '20px',
    textAlign: 'center',
    // background: "transparent",
  },
  media: {
    height: "100%",
    width: "100%"
  },
  gridList: {
    height: "75vh",
    paddingLeft: '20px',
    paddingRight: '20px',
    width: "100%%"
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));