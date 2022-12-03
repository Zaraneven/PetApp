import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Navigate, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 600,
        margin: "auto",
        textAlign: "center",
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2),
    },
    error: {
        verticalAlign: "middle",
    },
    title: {
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300,
    },
    submit: {
        margin: "auto",
        marginBottom: theme.spacing(2),
    },
}));

const Login = ({props}) => {
    const navigate = useNavigate();
    const classes = useStyles();
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        redirectToReferrer: false,
    });
    const clickSubmit =  () => {
        const user = {
            email: values.email || undefined,
            password: values.password || undefined,
        };
        const validEmail = JSON.parse(localStorage.getItem("user"));
        const validPassword = JSON.parse(localStorage.getItem("user"));
        if(user.email === validEmail.email && user.password === validPassword.password){
            navigate("/vet-dashboard");
        }
        else {
            setValues({ ...values, error: "Invalid email or password" })
        }
    };
    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h6" className={classes.title}>
                    Sign In
                </Typography>
                <TextField
                    id="email"
                    type="email"
                    label="Email"
                    className={classes.textField}
                    value={values.email}
                    onChange={handleChange("email")}
                    margin="normal"
                />
                <br />
                <TextField
                    id="password"
                    type="password"
                    label="Password"
                    className={classes.textField}
                    value={values.password}
                    onChange={handleChange("password")}
                    margin="normal"
                />
                <br />
                {values.error && (
                    <Typography component="p" color="error">
                        <Icon color="error" className={classes.error}>
                        </Icon>
                        {values.error}
                    </Typography>
                )}
            </CardContent>
            <CardActions>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={clickSubmit}
                    className={classes.submit}
                >
                    Submit
                </Button>
            </CardActions>
        </Card>
    );
};
export default Login;