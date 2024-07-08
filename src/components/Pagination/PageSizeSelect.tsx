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
  width?: string;
}

const PageSizeSelect = ({
  options,
  pageSize,
  setPageSize,
  menuPlacement,
  width,
}: PageSizeProps) => {
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
      width: width ?? "200px",
      borderColor: "#000",
      _hover: {
        borderColor: "primary.500",
      },
      boxShadow: "sm",
      border: "1px solid",
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
  return (
    <Select
      size={"md"}
      focusBorderColor="primary.500"
      closeMenuOnSelect={true}
      name="pageSize"
      selectedOptionStyle="check"
      chakraStyles={chakraStyles}
      defaultValue={options[0]}
      //   selectedOptionColorScheme="teal"
      menuPlacement={menuPlacement ?? "bottom"}
      isMulti={false}
      value={options.find((option) => option.value === pageSize)} // Correctly match the value
      onChange={(selectedOption) => setPageSize(selectedOption!.value)}
      options={options}
      variant={"outline"}
      useBasicStyles
    />
  );
};

export default PageSizeSelect;
