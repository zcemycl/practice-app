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
    // padding: '15vh 0 0 0',
    height: '80vh',
  },
  card: {
    width:'100%',
    height: '100%', 
    textAlign: 'center',
  },
}));