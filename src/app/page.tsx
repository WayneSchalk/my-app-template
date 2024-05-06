import { Container, Grid, Stack, Typography } from "@mui/material";
import AuthButtons from "../Components/AuthButtons";

export default function Home() {
  return (
    <main>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <Stack spacing={4}>
              <Typography variant="h2">App Home Page</Typography>
              <AuthButtons />
            </Stack>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Container>
    </main>
  );
}
