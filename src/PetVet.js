import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 800,
    color: theme.palette.text.primary,
}));
const message = `Vet station. `;
const PetVet = () => {
    return(
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
            <Link to='/pet-vet-form'>
            <StyledPaper
                
                sx={{
                    my: 3,
                    mx: 'auto',
                    p: 3,
                }}
            >
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>John</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>{message}</Typography>
                    </Grid>
                </Grid>
            </StyledPaper>
            </Link>
            <StyledPaper
                sx={{
                    my: 3,
                    mx: 'auto',
                    p: 3,
                }}
            >
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>Mike</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>{message}</Typography>
                    </Grid>
                </Grid>
            </StyledPaper>
            <StyledPaper
                sx={{
                    my: 3,
                    mx: 'auto',
                    p: 3,
                }}
            >
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>Bruce</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>{message}</Typography>
                    </Grid>
                </Grid>
            </StyledPaper>
        </Box>
    )
}
export default PetVet;
