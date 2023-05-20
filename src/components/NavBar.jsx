import React from "react";
import { Navbar, Button, Link, Text, Card, Spacer, Radio, useTheme } from "@nextui-org/react";

export default function NavBar() {
  const [variant, setVariant] = React.useState("default");


 
  
  return (

      <Navbar variant="floating" css={{width:'100%'}}>
        <Navbar.Content activeColor={"primary"} hideIn="xs" variant={variant}>
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
      </Navbar>

  )
}
