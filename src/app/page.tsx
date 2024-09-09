import ChallengeCard from "./helpers/ChallengeCard/challenge-card";
import Col from "./helpers/col";
import Row from "./helpers/row";

export default function Home() {
  return (
    <div>
      <Row>
        <Col cols={12} justify="center" align="center">
          <ChallengeCard
            day={1}
            title="Profile Card"
          />
        </Col>
        <Col cols={12} justify="center" align="center">
        </Col>
        <Col cols={12} justify="center" align="center">
        </Col>
        <Col cols={12} justify="center" align="center">
        </Col>
        <Col cols={12} justify="center" align="center">
        </Col>
      </Row>
    </div>
  );
}
