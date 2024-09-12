"use client"

import { Box, Button, Container, FormControl, FormControlLabel, Grid2, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Day4() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [communication, setCommunication] = useState("email");
    const [message, setMessage] = useState("");
    return (
        <Box sx={{ height: '100vh', backgroundImage: 'url(https://images.unsplash.com/photo-1725862864518-1d95c2b32926?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <Container maxWidth="lg">
                <Box paddingTop="50px">
                    <Grid2 container spacing={2}>
                        <Grid2 marginRight="35px" size={{ xs: 12, md: 5 }}>
                            <Typography color="white" variant="h3" fontWeight="600">Contact Us</Typography>
                            <Typography color="white" variant="body1">Get in touch with us! Whether you have questions, feedback, or just want to say hello, we're here for you.</Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 6 }}>
                            <Box sx={{ backgroundColor:"white", borderRadius: '4px', padding: '20px' }}>
                                <Typography fontWeight="600">Send us a message!</Typography>
                                <br/>
                                <TextField fullWidth variant="standard" label="Name" value={name} onChange={(event) => setName(event.target.value)}/>
                                <TextField sx={{ marginTop: '10px' }} fullWidth variant="standard" label="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                                <TextField sx={{ marginTop: '10px' }} fullWidth variant="standard" label="Phone" value={phone} onChange={(event) => setPhone(event.target.value)}/>
                                <Typography marginTop="20px" fontWeight="500">Preferred method of communication.</Typography>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        name="contact-info"
                                        value={communication}
                                        onChange={(event) => setCommunication(event.target.value)}
                                    >
                                        <FormControlLabel value="email" control={<Radio/>} label="Email" />
                                        <FormControlLabel value="phone" control={<Radio/>} label="Phone" />
                                    </RadioGroup>
                                </FormControl>
                                <br/>
                                <TextField fullWidth multiline variant="standard" label="Message" value={message} onChange={(event) => setMessage(event.target.value)} />

                                <Button variant="contained" sx={{ padding: '10px', marginTop: '30px', borderRadius: '15px' }} fullWidth>Submit</Button>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Box>

            </Container>

        </Box>
    )
}