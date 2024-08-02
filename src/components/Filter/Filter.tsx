import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

type FilterProps = {
  title: string;
  children?: React.ReactNode;
  defaultExpanded?: boolean;
};

function Filter({ title, children, defaultExpanded }: FilterProps) {
  return (
    <Accordion allowToggle defaultIndex={defaultExpanded ? [0] : undefined}>
      <AccordionItem minW={"100%"}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton w={"100%"}>
                <Box as="span" flex={1} textAlign="left">
                  {title}
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel display={"flex"} flexDir={"column"} gap={2} pb={4}>
              {children}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}

export default Filter;
