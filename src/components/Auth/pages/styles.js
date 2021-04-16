import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    content: {
      flexGrow: 1,
      // backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      position:'relative',
    },
    grid: {
      padding: '15vh 0 0 0',
    },
    card: {
      maxWidth:'100%',
      height: '100%', 
      textAlign: 'center'
    },
    typo: {
      alignItems: 'center',
    },
}));