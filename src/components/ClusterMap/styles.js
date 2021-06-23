import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    position: 'relative',   
  },
  root: {
    flexGrow: 1,
  },
  grid: {
    height: '75vh',
    position: 'relative'
  },
  card: {
    width:'100%',
    height: '100%', 
    textAlign: 'center',
    // background: "transparent",
  },
  map: {
    height:'100%'
  },
  icon: {
    color: 'red',
  },
}));