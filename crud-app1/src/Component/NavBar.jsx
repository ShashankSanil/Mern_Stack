import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";


const useStyle = makeStyles({
  header: {
    background: "#111111",
  },
  tabs:{
      color:'#ffffff',
      textDecoration:"none",
      marginRight:20,
      fontSize:20
  }
});

const NavBar = () => {
  const classes = useStyle();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <NavLink className={classes.tabs} to="./" exact><h2>Home</h2></NavLink>
        <NavLink className={classes.tabs} to="all" exact><h2>AllUser</h2></NavLink>
        <NavLink className={classes.tabs} to="add" exact><h2>AddUser</h2></NavLink>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
