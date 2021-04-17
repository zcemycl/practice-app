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
    height: '80%',
    padding: '5%',
  },
  card: {
    width:'100%',
    height: '70vh', 
    textAlign: 'center',
    position:'relative',
  },
  bx1left: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  bx2left: {
    display: 'flex',
    backgroundColor: "#AFEEEE",
    position: 'relative',
    textAlign: "left",
    width:"fit-content",
    borderRadius: '15px 50px 30px 5px',
  },
  bx3left: {
    position:'absolute',
    top:'-10px',
    backgroundColor: "#48D1CC",
    textAlign: 'left',
    height:'30%',
    borderRadius:"10px",
    padding:'1%',
    wordWrap: 'break-word'
  },
  bx3right: {
    position:'absolute',
    top:'-10px',
    backgroundColor: "#66CDAA",
    textAlign: 'right',
    height:'30%',
    borderRadius:"10px",
    padding:'1%',
    wordWrap: 'break-word'
  },
  bx1right: {
    display: 'flex',
    flexDirection: 'row-reverse',
    position: 'relative',
  },
  bx2right: {
    display: 'flex',
    backgroundColor: "#7FFFD4",
    position: 'relative',
    textAlign: "right",
    width:"fit-content",
    borderRadius: '50px 15px 5px 30px ',
  },
  form: {
      width: '100%',
      position: 'absolute',
      bottom: '1%',
      height: '10%',
      padding: '2% 1%',
  },
  button: {
    width: '10%',
    height: '100%',
  },
  txtfm: {
    width: '50%',
    height: '100%',
  },
  txtfu: {
    width: '30%',
    height: '100%',
    marginRight: '2%',
  },  
}));