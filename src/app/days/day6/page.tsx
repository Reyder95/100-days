'use client'

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Container, Grid2, IconButton, Typography } from "@mui/material";
import { useState } from "react";

export default function ImageCarousel() {

    const [images, setImages] = useState([
        "https://images.unsplash.com/photo-1725715442172-44a440eff6e3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1726517723307-c70c47791d1f?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1726533878281-3212fbd99fc3?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1718146921295-700b969e7c78?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1667587246381-49a4f3daab71?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1726250947679-3d89963934d8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ])

    const [selected, setSelected] = useState(0)

    return (
        <Box>
            <Box sx={{ height: '70vh' }} >
                <Grid2 sx={{ height: '100%' }} container spacing={2}>
                    <Grid2 sx={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'right'}} size={2}>
                        
                        <IconButton onClick={() => setSelected((selected - 1 + 6) % 6)}><ChevronLeft fontSize="large"/></IconButton>
                    </Grid2>
                    <Grid2 sx={{height: '100%', backgroundColor: 'grey', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10}} size={8}>
                        <Box sx={{ height: '100%', padding: '20px' }}>
                            <img src={images[selected]} style={{ height: '100%', width: '100%', objectFit: 'contain' }}/>
                        </Box>
                    </Grid2>
                    <Grid2 sx={{height: '100%', display: 'flex', alignItems: 'center'}} size={2}>
                        <IconButton onClick={() => setSelected((selected + 1) % 6)}><ChevronRight fontSize="large"/></IconButton>
                    </Grid2>
                </Grid2>
            </Box>
            <Box sx={{ height: '28.5vh', padding: 1 }}>
                <Grid2 sx={{ height: '100%' }} container spacing={2}>
                    {
                        images.map((image, index) => (
                        <Grid2 key={index} sx={{ height: '100%', overflow: 'hidden', border: image == images[selected] ? '5px solid black' : 'none' }} size={2}>
                            <img src={image} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
                        </Grid2>
                        ))
                    }
                </Grid2>

            </Box>
        </Box>
    )
}