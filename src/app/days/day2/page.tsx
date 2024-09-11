'use client'

import { Box, Button, Chip, Container, Grid2, Typography } from "@mui/material";
import styles from './page.module.css'
import { useState } from "react";


export default function Day2() {
    const [imageList, setImageList] = useState(['returntoforsetia.jfif', 'returntoforsetia-back.jpg'])
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleSetImage = (index: number) => {
        if (index != selectedImageIndex) {
            setSelectedImageIndex(index)
        }
    }

    return (
        <Box height="100vh" sx={{ backgroundColor: '#FAF9F6' }}>
        <Container sx={{ paddingTop: '50px', maxWidth: {
            sm: "500px",
            md: "1200px"
        } }}>
            <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12, md: 1 }}>
                    {
                        imageList.map((image, index) => (
                            <Box
                                className={styles.sideBox}
                                component="img"
                                sx={{
                                    height: 128,
                                    width: 128,
                                    borderRadius: "3px",
                                    boxShadow: index === selectedImageIndex ? "0 0 0 2px blue" : "none",
                                    opacity: index === selectedImageIndex ? "1.0 !important" : "inherit"
                                }}
                                alt="Shop Image"
                                src={`/images/${image}`}
                                onClick={() => handleSetImage(index)}
                            />
                        ))
                    }
                </Grid2>
                <Grid2 sx={{
                    marginLeft: {
                        xs: 0,
                        md: '80px'
                    },
                    textAlign: {
                        xs: "center",
                        md: "left"
                    }
                }} size={{ xs: 12, md: 5 }}>
                    <Box component="img"
                        sx={{
                            width: "90%",
                            height: "400px",
                            borderRadius: "3px"
                        }}
                        alt="Shop Image"
                        src={`/images/${imageList[selectedImageIndex]}`}
                    />
                </Grid2>
                <Grid2 sx={{
                    marginLeft: {
                        xs: 0
                    }
                }}size={{ xs: 12, md: 4 }}>
                <Box display="flex" alignContent="center" alignItems="center" sx={{ backgroundColor: '#D9D9D9', borderRadius: "3px", padding: '20px', marginBottom: '7px' }}>
                        <Typography variant="h4" fontWeight="600" >$6.99</Typography>
                        <Chip sx={{ marginLeft: '5px', fontWeight: "600", fontSize: '17px', borderRadius: '7px', backgroundColor: '#2EB05E' }} label="-20%" />
                        <Button sx={{ marginLeft: '40px' }} disableElevation variant="contained" fullWidth>Buy Album</Button>
                    </Box>
                    <Box sx={{ backgroundColor: '#D9D9D9', borderRadius: "3px", padding: '8px' }}>
                        <Typography marginBottom="20px" variant="h5" fontWeight="600">Track List</Typography>
                        <Box justifyContent="space-between" display="flex" alignItems="center" alignContent="center" className={styles.individualSong}>
                            <Typography variant="subtitle1">1. Revelations ~Recurrence~</Typography>
                            <Button variant="contained" disableElevation sx={{ marginRight: '10px' }}>$0.99</Button>
                        </Box>
                        <Box justifyContent="space-between" display="flex" alignItems="center" alignContent="center" className={styles.individualSong}>
                            <Typography variant="subtitle1">2. Slave To the Reign</Typography>
                            <Button variant="contained" disableElevation sx={{ marginRight: '10px' }}>$0.99</Button>
                        </Box>
                        <Box justifyContent="space-between" display="flex" alignItems="center" alignContent="center" className={styles.individualSong}>
                            <Typography variant="subtitle1">3. The Provoked</Typography>
                            <Button variant="contained" disableElevation sx={{ marginRight: '10px' }}>$0.99</Button>
                        </Box>
                        <Box justifyContent="space-between" display="flex" alignItems="center" alignContent="center" className={styles.individualSong}>
                            <Typography variant="subtitle1">4. All Alone</Typography>
                            <Button variant="contained" disableElevation sx={{ marginRight: '10px' }}>$0.99</Button>
                        </Box>
                        <Box justifyContent="space-between" display="flex" alignItems="center" alignContent="center" className={styles.individualSong}>
                            <Typography variant="subtitle1">5. Elope With The Locus</Typography>
                            <Button variant="contained" disableElevation sx={{ marginRight: '10px' }}>$0.99</Button>
                        </Box>
                        <Box justifyContent="space-between" display="flex" alignItems="center" alignContent="center" className={styles.individualSong}>
                            <Typography variant="subtitle1">6. Cross the Luminous Ocean</Typography>
                            <Button variant="contained" disableElevation sx={{ marginRight: '10px' }}>$0.99</Button>
                        </Box>
                        <Box justifyContent="space-between" display="flex" alignItems="center" alignContent="center" className={styles.individualSong}>
                            <Typography variant="subtitle1">7. Prelude to Dusk</Typography>
                            <Button variant="contained" disableElevation sx={{ marginRight: '10px' }}>$0.99</Button>
                        </Box>
                        <Box justifyContent="space-between" display="flex" alignItems="center" alignContent="center" className={styles.individualSong}>
                            <Typography fontSize="14px" variant="subtitle1">8. Departure Beyond Our Despair and Hope</Typography>
                            <Button variant="contained" disableElevation sx={{ marginRight: '10px' }}>$0.99</Button>
                        </Box>
                    </Box>
                </Grid2>
            </Grid2>

        </Container>
        </Box>

    )
}