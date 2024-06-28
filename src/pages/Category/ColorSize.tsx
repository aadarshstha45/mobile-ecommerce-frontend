import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  CheckboxGroup,
} from "@chakra-ui/react";

type ColorSizeProps = {
  title: string;
  children?: React.ReactNode;
  onChange?: (values: string[]) => void;
};

function ColorSize({ title, children, onChange }: ColorSizeProps) {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {title}
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel display={"flex"} flexDir={"column"} pb={4}>
              <CheckboxGroup onChange={onChange} colorScheme="primary">
                {children}
              </CheckboxGroup>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}

export default ColorSize;
