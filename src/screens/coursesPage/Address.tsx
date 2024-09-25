import { Box, Container, Stack } from "@mui/material";

export default function Address() {
  return (
    <div className="address">
      <Container>
        <Stack className={"address-area"}>
          <Box className={"title"}>Our Office address</Box>
          <iframe
            style={{ marginTop: "60x" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202404.9141680945!2d126.80933040615444!3d37.56503371458978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2012d5c39cf%3A0x7e11eca1405bf29b!2sSeoul!5e0!3m2!1sen!2skr!4v1727288105029!5m2!1sen!2skr"
            height="500"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Stack>
      </Container>
    </div>
  );
}
