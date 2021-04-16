import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    position: 'relative',
    height:'80vh',
    // overflow: 'auto',
    overflow: 'hidden',
  },
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: '15vh 0 0 0',
    height: '100%',    
  },
  message_holder: {
    overflow:'scroll',
    height: '80%',
    padding: '2%',
  },
  card: {
    width:'100%',
    height: '80%', 
    textAlign: 'center',
  },
  bx1left: {
    display: 'flex',
    flexDirection: 'row',
  },
  bx2left: {
    display: 'flex',
    backgroundColor: "#AFEEEE",
    textAlign: "left",
    width:"fit-content",
    borderRadius: '15px 50px 30px 5px',
  },
  bx1right: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  bx2right: {
    display: 'flex',
    backgroundColor: "#7FFFD4",
    textAlign: "right",
    width:"fit-content",
    borderRadius: '50px 15px 5px 30px ',
  },
}));