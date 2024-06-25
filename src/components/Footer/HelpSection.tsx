import { Flex, Link, Text } from "@chakra-ui/react";

const links = [
  {
    id: 1,
    label: "Payment Options",
    to: "/checkout",
  },
  {
    id: 2,
    label: "Returns and Refunds",
    to: "returns-and-refunds",
  },
  {
    id: 3,
    label: "Privacy Policies",
    to: "privacy-policies",
  },
];

function HelpSection() {
  return (
    <Flex flexDir={"column"} gap={4}>
      <Text
        fontWeight={700}
        fontSize={{ base: "14px", sm: "16px", md: "20px" }}
      >
        Help
      </Text>

      {links.map((link) => (
        <Link
          key={link.id}
          href={link.to}
          fontSize={{ base: "12px", md: "16px" }}
          fontWeight={500}
          textColor={"#000"}
        >
          {link.label}
        </Link>
      ))}
    </Flex>
  );
}

export default HelpSection;
