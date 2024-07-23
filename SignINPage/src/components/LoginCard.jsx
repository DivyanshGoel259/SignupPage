import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { dark } from '@mui/material/styles/createPalette';
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUpForm() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await fetch("http://127.0.0.1:3000/user/signup", {
            method: "POST",
            body: JSON.stringify({
                FirstName: event.currentTarget.firstName.value,
                LastName: event.currentTarget.lastName.value,
                email: event.currentTarget.email.value,
                password: event.currentTarget.password.value,
            }),
            headers: {
                "content-type": "application/json"
            }
        })
        const ans = await res.json()
        if (ans.msg === "User Created Succesfully") {
            toast.success(ans.msg,{
                position:'top-right',
                draggable: true,
                theme:'dark'
                
            });
        } else if (ans.msg === "Email Already Exist") {
            toast.error(ans.msg,{
                position:'top-left',
                draggable: true,
                theme:'dark'
                
            });
        }

    }



    return (
        <div>
            
        <ThemeProvider theme={defaultTheme}>
            <Container className='border-solid border-2 border-white border-opacity-15 rounded-[18px] text-white' component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box  component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid  container spacing={2}>
                            <Grid  item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'gray', // Border color default and focused
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'white', // Border color on hover
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'white', // Border color when focused
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'gray', // Default label color
                                            '&.Mui-focused': {
                                                color: 'white', // Label color when focused
                                            },
                                        },
                                    }}
                                    InputProps={{
                                        style: { color: 'white' }, // Text color inside the input field
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'gray', // Border color default and focused
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'white', // Border color on hover
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'white', // Border color when focused
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'gray', // Default label color
                                            '&.Mui-focused': {
                                                color: 'white', // Label color when focused
                                            },
                                        },
                                    }}
                                    InputProps={{
                                        style: { color: 'white' }, // Text color inside the input field
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'gray', // Border color default and focused
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'white', // Border color on hover
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'white', // Border color when focused
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'gray', // Default label color
                                            '&.Mui-focused': {
                                                color: 'white', // Label color when focused
                                            },
                                        },
                                    }}
                                    InputProps={{
                                        style: { color: 'white' }, // Text color inside the input field
                                    }}
                                />
                            </Grid>
                            <Grid  item  xs={12 }>
                                <TextField
                                    
                                    
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'gray', // Border color default and focused
                                            },
                                            '&:hover fieldset': {
                                                borderColor: 'white', // Border color on hover
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: 'white', // Border color when focused
                                            },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'gray', // Default label color
                                            '&.Mui-focused': {
                                                color: 'white', // Label color when focused
                                            },
                                        },
                                    }}
                                    InputProps={{
                                        style: { color: 'white' }, // Text color inside the input field
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    
                                    control={
                                        <Checkbox
                                            icon={<span className="w-5 h-5 border border-white rounded-sm" />} // Customize unchecked state
                                            value="allowExtraEmails" color="primary"
                                        />
                                    }
                                    
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid  item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <ToastContainer />
                <Copyright  sx={{ color:'white', mt: 5 ,mb:1}} />
            </Container>
        </ThemeProvider>
        </div>
    );
}

