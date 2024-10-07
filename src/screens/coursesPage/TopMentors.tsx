import { Box, Container, Stack } from "@mui/material";
import { CartItem } from "../../lib/data/types/search";

export default function TopMentors() {
  return (
    <div className={"top-mentors"}>
      <Container>
        <Box className="top-mentors-title">Top Mentors</Box>
        <Stack className="top-mentors-wrapper">
          <ul className="top-mentors-list">
            <li className="mentor">
              <img
                className="mentor-img"
                src="/img/jonas.jpeg"
                alt=""
                width={300}
              />
              <h3 className="mentor-name">Jonas Schmedtmann</h3>
            </li>
            <li className="mentor">
              <img
                className="mentor-img"
                src="/img/jonas.jpeg"
                alt=""
                width={300}
              />
              <h3 className="mentor-name">Jonas Schmedtmann</h3>
            </li>
            <li className="mentor">
              <img
                className="mentor-img"
                src="/img/jonas.jpeg"
                alt=""
                width={300}
              />
              <h3 className="mentor-name">Jonas Schmedtmann</h3>
            </li>
            <li className="mentor">
              <img
                className="mentor-img"
                src="/img/jonas.jpeg"
                alt=""
                width={300}
              />
              <h3 className="mentor-name">Jonas Schmedtmann</h3>
            </li>
          </ul>
        </Stack>
      </Container>
    </div>
  );
}
