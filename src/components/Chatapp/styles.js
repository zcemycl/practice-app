import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    position: 'relative',
    // height:'50vh',
    // overflow: 'auto',
    overflow: 'hidden',
  },
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: '15vh 0 0 0',
    // height: '90%',    
  },
  message_holder: {
    overflow:'scroll',
    // position:'relative',
    height: '70%',
    padding: '5%',
  },
  card: {
    width:'100%',
    height: '100%', 
    textAlign: 'center',
    position:'relative',
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
  form: {
      width: '100%',
      position: 'block',
      height: '10%',
      padding: '2% 1% 2%',
  },
  button: {
    width: '10%',
    height: '100%',
  },
  txtfm: {
    width: '50%',
    height: '100%',
    marginBottom: '5%',
  },
  txtfu: {
    width: '30%',
    height: '100%',
    marginRight: '2%',
    marginBottom: '5%',
  }
}));