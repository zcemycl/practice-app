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
    paddingTop: theme.spacing(10),
  },
  card: {
    maxWidth:'100%',
    height: '100%', 
    textAlign: 'center',
  },
}));