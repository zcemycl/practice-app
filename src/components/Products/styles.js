import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundColor: 'white',
    padding: theme.spacing(3),
    position:'relative',
  },
  root: {
    flexGrow: 1,
  },
}));