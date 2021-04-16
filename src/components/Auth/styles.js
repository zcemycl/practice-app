import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      position: 'relative',
    },
    form: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '75%',
        },
    },
    card: {
      maxWidth:'100%',
      height: '100%', 
      textAlign: 'center',
      padding:'5% 0 4%',
    },
    grid: {
      padding: '15vh 0 0 0',
    },
    button: {
      marginLeft: '65%',
      marginTop: '7%',
    },
    divbtn: {
      display:'flex',
    },
}));