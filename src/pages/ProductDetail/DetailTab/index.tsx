import {
  Flex,
  Tab,
  TabIndicator,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

interface Specification {
  id: number;
  name: string;
  specification: string;
}

interface DetailTabProps {
  description?: string;
  specification?: Specification[];
}

const tabList = [
  {
    id: 1,
    title: "Specification",
  },
  {
    id: 2,
    title: "Description",
  },
];

const DetailTab = ({ description, specification }: DetailTabProps) => {
  console.log(specification);
  return (
    <Tabs
      colorScheme="primary"
      align="center"
      position="relative"
      variant="unstyled"
    >
      <TabList
        fontSize={{
          base: "12px",
          md: "14px ",
        }}
        justifySelf={"center"}
      >
        {tabList.map((tab) => (
          <Tab key={tab.id} fontSize={{ base: "16px", md: "18px" }}>
            {tab.title}
          </Tab>
        ))}
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="5px"
        bg="primary.500"
        borderRadius="1px"
      />
      <TabPanels textAlign={"center"}>
        <TabPanel>
          <Flex justify={"center"}>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Specification</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {specification &&
                    specification.map((spec) => (
                      <Tr key={spec.id}>
                        <Td>{spec.name}</Td>
                        <Td>{spec.specification}</Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        </TabPanel>
        <TabPanel>
          <p>{description}</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default DetailTab;
