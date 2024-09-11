'use client'

import { Button, Card, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

interface ChallengeCardProps {
    day: number;
    title?: string;
}

export default function ChallengeCard(props: ChallengeCardProps) {

    const router = useRouter();

    return (
        <Card sx={{ height: "165px", position: "relative" }}>
            <CardContent>
                <Typography fontWeight="600" textAlign="center">Day {props.day}</Typography>
                <Typography marginTop="10px" textAlign="center">{props.title ? props.title : "To Be Done"}</Typography>
                <Button disabled={!props.title} onClick={() => router.push(`/days/day${props.day}`)} variant="contained" sx={{ 
                    bottom: 15, 
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "60%"
                }}>Go</Button>
            </CardContent>
        </Card>
    )
}