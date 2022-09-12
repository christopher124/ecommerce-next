import { Container, Grid, Image, Input } from "semantic-ui-react";
import Link from "next/link";
export default function TopBar() {
  return (
    <div className="top-bar">
      <Container>
        <Grid className="top-bar">
          <Grid.Column width={8} className="top-bar__left">
            <Logo />
          </Grid.Column>
          <Grid.Column width={8} className="top-bar__right">
            <Search />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
function Logo() {
  return (
    <Link href="/">
      <a>
        <Image
          src="https://gamer-ecommerce-next.s3.us-west-1.amazonaws.com/logo_bbac149494.png"
          alt="logo"
        />
      </a>
    </Link>
  );
}

function Search() {
  return <Input id="search-game" icon={{ name: "search" }} />;
}
