import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../Service/Api";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      background: "#000000",
      color: "#ffffff",
      fontsize: 20,
    },
  },
  row: {
    "& > *": {
      fontsize: 20,
    },
  },
});

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyle();

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div style={{ width: 'auto', margin: "0 auto", overflow: "auto" }}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow className={classes.thead}>
                <TableCell>UserName</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow className={classes.row} key={user._id}>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ marginRight: 10 }}
                        component={Link}
                        to={`/edit/${user._id}`}
                        exact
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => deleteUserData(user._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Grid>
    </Grid>
  );
};

export default AllUsers;
