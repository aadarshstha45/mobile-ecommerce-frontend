import { Flex, Link, Text } from "@chakra-ui/react";

const links = [
  {
    id: 1,
    label: "info@furnio.com",
    to: "mailto:info@furnio.com",
  },
  {
    id: 2,
    label: "+977 9876543210",
    to: "tel:+977 9876543210",
  },
  {
    id: 3,
    label: "012278889",
    to: "tel:012278889",
  },
];

function CustomerSection() {
  return (
    <Flex flexDir={"column"} gap={4}>
      <Text
        fontWeight={700}
        fontSize={{ base: "14px", sm: "16px", md: "20px" }}
      >
        Customer Service
      </Text>

      {links.map((link) => (
        <Link
          key={link.id}
          href={link.to}
          fontSize={{ base: "12px", md: "16px" }}
          textColor={"#000"}
        >
          {link.label}
        </Link>
      ))}
    </Flex>
  );
}

export default CustomerSection;
