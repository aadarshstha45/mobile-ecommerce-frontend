import { useFetchProductsSearchSuggestions } from "@/api/functions/Product";
import {
  FormControl,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
} from "@chakra-ui/react";
import { debounce } from "lodash";
import { SearchIcon } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchInputProps {
  placeholder?: string;
  onSearch: (value: string) => void;
  isLoading?: boolean;
  to?: string;
  onClose?: () => void;
  setSuggestions?: (suggestions: any[]) => void;
  variant?: string;
  position?: any;
}

const SearchInput = ({
  placeholder,
  onSearch = () => {},
  to,
  onClose,
  setSuggestions,
  variant,
  position,
}: SearchInputProps) => {
  const navigate = useNavigate();
  const [searchString, setSearchString] = useState<string>("");
  const [isDebouncing, setIsDebouncing] = useState<boolean>(false);
  const [enabled, setEnabled] = useState<boolean>(false);

  const { data } = useFetchProductsSearchSuggestions(searchString, enabled);

  useEffect(() => {
    const words = searchString.trim();
    console.log(words.length);
    if (searchString === "" && !isDebouncing) {
      setSuggestions && setSuggestions([]);
      setEnabled(false);
    }
    if (words.length >= 3 && !isDebouncing) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, [searchString, isDebouncing]);

  useEffect(() => {
    if (data && data.length > 0) {
      setSuggestions && setSuggestions(data);
    } else {
      setSuggestions && setSuggestions([]);
    }
  }, [data, setSuggestions, searchString]);

  const debouncedSearchFunction = useCallback(
    (value: string) => {
      onSearch(value);
      setIsDebouncing(false);
    },
    [onSearch]
  );

  const debouncedOnSearch = useMemo(() => {
    return debounce(debouncedSearchFunction, 500);
  }, [debouncedSearchFunction]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDebouncing(true);
    const value = e.target.value;
    setSearchString(value);
    debouncedOnSearch(value);
    return value;
  };

  return (
    <FormControl position={position}>
      <InputGroup display={"flex"} alignContent={"center"}>
        <InputLeftElement pointerEvents={"none"}>
          <IconButton
            type="submit"
            size={"sm"}
            border={"none"}
            colorScheme="primary"
            aria-label="Search"
            bg={"transparent"}
            mt={2}
            _hover={{ bg: "transparent" }}
            icon={
              isDebouncing ? (
                <Spinner color={"primary.500"} size={"sm"} thickness="2px" />
              ) : (
                <Icon
                  boxSize={6}
                  as={SearchIcon}
                  _groupFocus={{ color: "primary.500" }}
                  textColor={searchString ? "primary.500" : "gray.500"}
                  bg="transparent"
                />
              )
            }
          />
        </InputLeftElement>

        <Input
          focusBorderColor={"primary.500"}
          _hover={{ borderColor: "gray.400" }}
          borderColor={"gray.300"}
          placeholder={placeholder}
          onChange={handleChange}
          size={"lg"}
          value={searchString}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onClose && onClose();
              navigate(`${to}`);
            }
          }}
          variant={variant}
          autoComplete="off"
          flexGrow={0}
        />
      </InputGroup>
    </FormControl>
  );
};

export default SearchInput;
