import { Box, Card, Container, Grid2, Typography } from "@mui/material"
import ChallengeCard from "./challengecard";

export default function Home() {
  return (
    <Container>
      <Typography marginBottom="25px" textAlign="center" variant="h4">100 Days of Code</Typography>
      <Grid2 container spacing={12}>
        <Grid2 size={2.4}>
          <ChallengeCard
          day={1}
          title="Profile Card"
          />
        </Grid2>
        <Grid2 size={2.4}>
          <ChallengeCard
            day={2}
            title="Music Purchase"
          />
        </Grid2>
        <Grid2 size={2.4}>
          <ChallengeCard
          day={3}
          title="Mobile Navigation"
          />
        </Grid2>
        <Grid2 size={2.4}>
          <ChallengeCard
          day={4}
          title="Contact Us"
          />
        </Grid2>
        <Grid2 size={2.4}>
          <ChallengeCard
          day={5}
          />
        </Grid2>
      </Grid2>
    </Container>
      // <Row>
      //   <Col cols={12} justify="center" align="center">
      //     <ChallengeCard
      //       day={1}
      //       title="Profile Card"
      //     />
      //   </Col>
      //   <Col cols={12} justify="center" align="center">
      //   </Col>
      //   <Col cols={12} justify="center" align="center">
      //   </Col>
      //   <Col cols={12} justify="center" align="center">
      //   </Col>
      //   <Col cols={12} justify="center" align="center">
      //   </Col>
      // </Row>
  );
}
