import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from "@/assets/icons/FooterIcons";
import NavCart from "@/assets/icons/NavCart";
import { Container, Divider, Flex, HStack, Text } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import AboutSection from "./AboutSection";
import CustomerSection from "./CustomerSection";
import HelpSection from "./HelpSection";
import LinksSection from "./LinksSection";

function Footer() {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      borderTop={"1px solid rgba(0,0,0,0.17)"}
      as="footer"
    >
      <Container
        maxW={{ base: "98vw", md: "85vw" }}
        px={{ base: 2, md: 10 }}
        py={10}
      >
        <Flex
          align={"center"}
          justify={"center"}
          display={{ base: "flex", md: "none" }}
          flexDir={"column"}
          gap={2}
          mb={8}
        >
          <Flex align={"center"} gap={2}>
            <NavCart boxSize={10} />
            <Text textAlign={"center"} fontWeight={700} fontSize={"lg"}>
              Funiro.
            </Text>
          </Flex>
          <Text fontSize={"12px"} color={"gray.500"}>
            Connect us on
          </Text>
          <HStack>
            <FacebookIcon boxSize={6} />
            <InstagramIcon boxSize={6} />
            <TikTokIcon boxSize={6} />
          </HStack>
        </Flex>
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 3, 768: 4 }}>
          <Masonry gutter={"10px"}>
            <AboutSection />
            <LinksSection />
            <HelpSection />
            <CustomerSection />
          </Masonry>
        </ResponsiveMasonry>
        <Divider borderColor={"#D9D9D9"} borderWidth={"1px"} mt={10} mb={4} />
        <Text fontSize={"16px"}>2023 furino. All rights reserved</Text>
      </Container>
    </Flex>
  );
}

export default Footer;
