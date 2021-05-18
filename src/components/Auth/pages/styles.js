import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      // backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      position:'relative',
      // height: '70vh'
    },
    grid: {
      // padding: '15vh 0 0 0',
      height: '70vh',
    },
    card: {
      width:'100%',
      height: '100%', 
      textAlign: 'center'
    },
    typo: {
      alignItems: 'center',
    },
}));