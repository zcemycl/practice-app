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
    height: '90vh',
    overflow: 'auto',
  },
  card: {
    width:'100%',
    height: '100%', 
    textAlign: 'center',
    // background: "transparent",
  },
  button: {
    margin: theme.spacing(1),
  },
  icon: {
    '&:hover':{
      background:"white",
      color:'red',
      borderRadius: '35px',
    }
  },
  icon2: {
    '&:hover':{
      color:'black'
    }
  },
}));