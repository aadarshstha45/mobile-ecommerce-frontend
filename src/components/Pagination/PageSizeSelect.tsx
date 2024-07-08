import { ChakraStylesConfig, MenuPlacement, Select } from "chakra-react-select";

interface PageSizeOption {
  label: string;
  value: number;
}

interface PageSizeProps {
  options: PageSizeOption[];
  pageSize: number | undefined;
  setPageSize: (pageSize: number) => void;
  menuPlacement?: MenuPlacement;
}

const chakraStyles: ChakraStylesConfig<PageSizeOption> = {
  dropdownIndicator: (prev, { selectProps }) => ({
    ...prev,
    "> svg": {
      transition: "transform 0.3s",
      transform: `rotate(${selectProps.menuIsOpen ? -180 : 0}deg)`,
    },
  }),
  control: (prev) => ({
    ...prev,
    borderRadius: 0,
    border: "none",
    borderColor: "gray.300",
    boxShadow: "sm",
    borderBottom: "1px solid",
    borderBottomWidth: "2px",
  }),
  menuList: (prev) => ({
    ...prev,
    borderRadius: 0,
    boxShadow: "sm",
    maxH: "200px",
    overflowY: "auto",
    scrollbarGutter: "2px",
    scrollbarWidth: "thin",
    scrollBehavior: "smooth",
    minWidth: "fit-content",
  }),
};

const PageSizeSelect = ({
  options,
  pageSize,
  setPageSize,
  menuPlacement,
}: PageSizeProps) => {
  return (
    <Select
      size={"sm"}
      focusBorderColor="teal.500"
      closeMenuOnSelect={true}
      name="pageSize"
      selectedOptionStyle="check"
      chakraStyles={chakraStyles}
      //   selectedOptionColorScheme="teal"
      menuPlacement={menuPlacement ?? "bottom"}
      isMulti={false}
      value={options.find((option) => option.value === pageSize)} // Correctly match the value
      onChange={(selectedOption) => setPageSize(selectedOption!.value)}
      options={options}
      variant={"unstyled"}
      useBasicStyles
    />
  );
};

export default PageSizeSelect;
