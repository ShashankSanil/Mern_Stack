import notfound404 from "../Assets/Images/NotFound.jpg";

// import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core";

// const UseStyle=makeStyles({
//     tab:{
//         backgroundColor:"Red",
//         fontSize:20,
//         color:"#111111"

//     }
// })

const NotFound = () => {
  //const classes=UseStyle();
  return (
    <img src={notfound404} style={{ width: "30%", margin: "80px 0 0 35%" }} />
  );
};
export default NotFound;
