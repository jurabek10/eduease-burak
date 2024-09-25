import React from "react";
import { Box, Container, Stack } from "@mui/material";
export default function Features() {
  return (
    <div className="features">
      <Container>
        <Stack className={"features-wrapper"}>
          <Stack className={"features-top"}>
            <Box className={"features-subtitle"}>What We Do</Box>
            <Box className={"features-title"}>Unlimited Possibilities</Box>
          </Stack>
          <Stack className={"features-list-wrapper"}>
            <ul className="features-list">
              <li className="feature">
                <img
                  className="feature-icon"
                  src="/icons/online.svg"
                  alt=""
                  width={53}
                  height={63}
                />
                <h4 className="feature-title">Online courses</h4>
                <p className="feature txt">
                  Choose from hundreds of free training courses, or pay to get
                  certified to complete a course or specialization.
                </p>
              </li>
              <li className="feature">
                <img
                  className="feature-icon"
                  src="/icons/mission.svg"
                  alt=""
                  width={53}
                  height={63}
                />
                <h4 className="feature-title">Our Mission</h4>
                <p className="feature txt">
                  Developing strong vision and mission statements can help
                  stakeholders in your school reach such a common understanding.
                </p>
              </li>
              <li className="feature">
                <img
                  className="feature-icon"
                  src="/icons/certificate.svg"
                  alt=""
                  width={53}
                  height={63}
                />
                <h4 className="feature-title">Professional Certificate</h4>
                <p className="feature txt">
                  Join the millions of students around the world who are already
                  learning! Find an experienced and suitable instructor only for
                  you.
                </p>
              </li>
            </ul>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
