import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Container, Grid2, IconButton, Typography } from "@mui/material";

export default function ImageCarousel() {
    return (
        <Box>
            <Box sx={{ height: '70vh' }} >
                <Grid2 sx={{ height: '100%' }} container spacing={2}>
                    <Grid2 sx={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'right'}} size={2}>
                        
                        <IconButton><ChevronLeft fontSize="large"/></IconButton>
                    </Grid2>
                    <Grid2 sx={{height: '100%', backgroundColor: 'grey', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10}} size={8}>
                        <Box sx={{ height: '100%', padding: '20px' }}>
                            <img src="https://placehold.it/1920x1080" style={{ height: '100%', width: '100%', objectFit: 'contain' }}/>
                        </Box>
                    </Grid2>
                    <Grid2 sx={{height: '100%', display: 'flex', alignItems: 'center'}} size={2}>
                        <IconButton><ChevronRight fontSize="large"/></IconButton>
                    </Grid2>
                </Grid2>
            </Box>
            <Box>

                

            </Box>
        </Box>
    )
}