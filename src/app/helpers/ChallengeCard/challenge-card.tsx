import Box from "../Box";

interface CardProps {
    day: number;
    title: string;
}

export default function ChallengeCard(props: CardProps) {
    return (
        <Box className="challengeCard" padding='5px' align="center">
            <Box>
                <strong>Day {props.day}</strong>
            </Box>
            <Box padding="6px">
                {props.title}
            </Box>
        </Box>
    )
}