import { Avatar, Box, Container, Divider, Typography } from '@mui/material';
import styles from './page.module.css';
import { Person2, Email, Notifications, LocationOn, PeopleAlt, LiveHelp, Settings } from '@mui/icons-material'
import ListButton from './ListButton';

export default function Day3() {
    return (
        <Container maxWidth="xs" sx={{ marginTop: "15px" }}>
            <Box alignItems="center" display="flex">
                <Avatar sx={{ borderRadius: "8px", height: 60, width: 60 }} />
                <Box marginLeft="15px">
                    <Typography variant="subtitle1" fontWeight="600">Konstantinos Houtas</Typography>
                    <Typography variant="subtitle2" fontWeight="300">Full Stack Engineer</Typography>
                </Box>
                
            </Box>
            <Divider sx={{ marginTop: "20px", marginBottom: "10px" }} variant="middle" />

                <ListButton
                icon={<Person2/>}
                buttonText="Personal Data"
                />
                <ListButton
                icon={<Email/>}
                buttonText="Messages"
                />
                <ListButton
                icon={<Notifications/>}
                buttonText="Notifications"
                badgeAmount={2}
                />
                <ListButton
                icon={<LocationOn/>}
                buttonText="Location"
                />
                <ListButton
                icon={<PeopleAlt/>}
                buttonText="Community"
                />

            <Divider sx={{ marginTop: "20px", marginBottom: "10px" }} variant="middle" />

                <ListButton
                icon={<LiveHelp/>}
                buttonText="FAQs"
                />

                <ListButton
                icon={<Settings/>}
                buttonText="Settings"
                />
        </Container>
    )
}