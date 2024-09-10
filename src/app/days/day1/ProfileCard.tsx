import { Avatar, Box, Button, CardContent, Container, Grid2, Typography } from "@mui/material";
import style from './page.module.css';
import Card from '@mui/material/Card'
import { GitHub, LinkedIn, Instagram, YouTube } from "@mui/icons-material";

interface CardProps {
    name: string;
    handle: string;
    description: string;
}

export default function ProfileCard(props: CardProps) {
    return (
            <Container maxWidth="xs">
            <Card>
                <CardContent sx={{ padding: 0 }}>
                    <Box display='flex' justifyContent="center" sx={{ backgroundColor: '#973350', paddingTop: '20px', paddingBottom: '20px' }}>
                        <Avatar sx={{ width: '100px', height: '100px' }} />
                    </Box>

                    <Box marginTop="15px">
                        <Typography textAlign="center" fontWeight="600" variant="h5">{props.name}</Typography>
                        <Typography textAlign="center" fontWeight="300" variant="subtitle2">@{props.handle}</Typography>
                    </Box>


                    <Box maxWidth="150px" style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '15px'}}>
                        <Grid2 container spacing={2}>
                            <Grid2 size={3}>
                                <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                                    <GitHub/>
                                </Box>
                            </Grid2>
                            <Grid2 size={3}>
                                <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                                    <LinkedIn/>
                                </Box>
                            </Grid2>
                            <Grid2 size={3}>
                                <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                                    <Instagram/>
                                </Box>
                            </Grid2>
                            <Grid2 size={3}>
                                <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                                    <YouTube/>
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Box>

                    <Box marginTop="10px" textAlign="center" padding="20px">
                        <Typography fontSize="14px" variant="body1">Passionate full stack developer with an emphasis on front end javascript frameworks. Specializes in React. Loves bugfixing and tackling the world's greatest problems!</Typography>
                    </Box>

                    <Box padding="20px">
                        <Grid2 container spacing={2}>
                            <Grid2 size={6}>
                                <Button sx={{ borderRadius: "20px", backgroundColor: "#df408b" }} variant="contained" fullWidth>Follow</Button>
                            </Grid2>
                            <Grid2 size={6}>
                                <Button sx={{ borderRadius: "20px", color: '#8F8F8F', borderColor: '#8F8F8F' }} variant="outlined" fullWidth>Message</Button>
                            </Grid2>
                        </Grid2>
                    </Box>
                </CardContent>
            </Card>
        </Container>

    )
}