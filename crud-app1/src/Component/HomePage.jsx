import HandshakeImage from "../Assets/Images/handshake.jpg";

import { Box, makeStyles, Typography } from "@material-ui/core";

const UseStyle = makeStyles({
  component: {
    width: "auto",
    height: "auto",
    resizeMode: "contain",
    margin: 10,
  },
  image: {
    width: "60%",
    height: "44%",
  },
});

const HomePage = () => {
  const classes = UseStyle();
  return (
    <Box className={classes.component}>
      <Typography variant="h4">Welcom To Home Page</Typography>
      <Box style={{ display: "flex" }}>
        <img className={classes.image} src={HandshakeImage} />
      </Box>
    </Box>
  );
};
export default HomePage;
