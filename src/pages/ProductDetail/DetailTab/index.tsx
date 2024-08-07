import {
  Flex,
  Tab,
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
          <Tab
            borderBottom={"5px solid"}
            borderBottomColor={"primary.50"}
            _selected={{
              borderBottomColor: "primary.500",
            }}
            key={tab.id}
            fontSize={{ base: "16px", md: "18px" }}
          >
            {tab.title}
          </Tab>
        ))}
      </TabList>

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
