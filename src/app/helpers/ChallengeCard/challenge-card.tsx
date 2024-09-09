import Box from "../Box";

interface CardProps {
    day: number;
    title: string;
}

export default function ChallengeCard(props: CardProps) {
    return (
        <Box className="challengeCard" align="center">
            <Box>
                <strong>Day {props.day}</strong>
            </Box>
            <Box>
                {props.title}
            </Box>
        </Box>
    )
}