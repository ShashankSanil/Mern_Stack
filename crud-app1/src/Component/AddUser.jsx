import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { addUser } from "../Service/Api";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20
    },
  },
});

const initialValues = {
  username: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setUser] = useState(initialValues);
  const {  username, email, phone } = user;
  const classes = useStyle();
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  };

  const addUserDetail = async () => {
    await addUser(user);
    navigate('../all');
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">UserName</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" value={username} id="my-input"/>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" value={email}  id="my-input"/>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} id="my-input"/>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={() => addUserDetail()}
      >
        Add
      </Button>
    </FormGroup>
  );
};
export default AddUser;
