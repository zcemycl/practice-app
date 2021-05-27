import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      position: 'relative',
    },
    card: {
      maxWidth:'100%',
      textAlign: 'center',
      overflow: 'hidden',
    },
}));