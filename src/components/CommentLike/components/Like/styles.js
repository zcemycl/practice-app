import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      position: 'relative',
    },
    root: {
      flexGrow: 1,
    },
    grid: {
    },
    card: {
      maxWidth:'100%',
      textAlign: 'center',
      overflow: 'hidden',
    },
    cardcontent: {
      paddingBottom: theme.spacing(3),
      // marginBottom: theme.spacing(-3),
    },
    margin: {
      padding: theme.spacing(2),
    },
}));