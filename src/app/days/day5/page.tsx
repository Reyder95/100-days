import { Box, Container, FormControlLabel, Grid2, Radio, RadioGroup, Rating, Typography } from "@mui/material";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PercentIcon from '@mui/icons-material/Percent';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function Day5() {
    return (
        <Container sx={{ position: 'relative' }} maxWidth="xl">
            <Box sx={{ backgroundColor: 'white', padding: 2, position: 'absolute', top: 50, left: '50%', transform: 'translateX(-50%)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Rating
                    value={4}
                    readOnly
                    />
                    <Typography marginLeft="10px" variant="subtitle2">(165)</Typography>
                </Box>
                <Typography fontWeight="600" variant="h4">Sweet Iced Coffee With <br/>Coconut Milk</Typography>
            </Box>
            <Grid2 container spacing={2}>
                <Grid2 size={6}>
                    <Box>
                        <Box sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img style={{ objectFit: 'cover', width: '100%', height: '100vh', objectPosition: 'center' }} src="/images/coconut-coffee.jpg"/>
                        </Box>
                    </Box>

                </Grid2>
                <Grid2 sx={{ marginLeft: '20px' }} size={5}>
                    <Box sx={{ marginTop: 25 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }} >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <AccessAlarmIcon/>
                                <Box marginLeft="10px">
                                    <Typography fontWeight="600">Total Time</Typography>
                                    <Typography >10 Minutes</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ marginLeft: '30px', marginRight: '30px', display: 'flex', alignItems: 'center' }}>
                                <PercentIcon/>
                                <Box marginLeft="10px">
                                    <Typography fontWeight="600">Level</Typography>
                                    <Typography >Beginner</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <AttachMoneyIcon/>
                                <Box marginLeft="10px">
                                    <Typography fontWeight="600">Budget</Typography>
                                    <Typography >Under $2</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box marginTop="15px">
                        <Typography fontStyle="italic" variant="body1">Sweet Iced Coffee with coconut milk is easy to make and stores well in the fridge. Make a large batch and save yourself a few trips to the coffee shop.</Typography>
                    </Box>
                    <Box marginTop="55px">
                        <Typography fontSize="20px" fontWeight="600">Ingredients</Typography>
                        <RadioGroup
                        defaultValue={1}
                        >
                            <FormControlLabel value={1} control={<Radio/>} label="3 tablespoon Espresso coffee powder"/>
                            <FormControlLabel value={2} control={<Radio/>} label="1 cup off the boil water"/>
                            <FormControlLabel value={3} control={<Radio/>} label="1 cup Coconut milk"/>
                            <FormControlLabel value={4} control={<Radio/>} label="3 tablespoon Espresso coffee powder"/>
                        </RadioGroup>
                    </Box>
                    
                    <Box sx={{ marginTop: '55px' }}>
                        <Typography fontSize="20px" fontWeight="600">Instructions</Typography>
                        <Box marginLeft="20px" marginTop="10px">
                            <ol>
                                <li><Typography marginBottom="10px" variant="body1">Boil some water and let it sit for 1 - 2 minutes.</Typography></li>
                                <li><Typography marginBottom="10px" variant="body1">Put the coffee grounds into a cafetiere and pour in the water.</Typography></li>
                                <li><Typography marginBottom="10px" variant="body1">Let the Coffee steep for 5 minutes thens slowly press down the plunger on your Cafetiere</Typography></li>
                                <li><Typography marginBottom="10px" variant="body1">Pour the coffee into a jug, allow to cool then chill for several hours.</Typography></li>
                                <li><Typography marginBottom="10px" variant="body1">Whisk in the coconut milk and condensed milk and serve over plenty of ice</Typography></li>
                                <li><Typography marginBottom="10px" variant="body1">The coffee can be stored in the fridge for up to 5 days. Shake or stir again before serving.</Typography></li>
                            </ol>
                        </Box>

                    </Box>
                </Grid2>
            </Grid2>
        </Container>
    )
}