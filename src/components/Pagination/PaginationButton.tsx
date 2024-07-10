import { HStack, IconButton, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PaginationButtonProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const PaginationButton = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationButtonProps) => {
  const navigate = useNavigate();

  const handlePrevPage = () => {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    navigate(`?page=${prevPage}`);
  };

  // Function to handle next page
  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    navigate(`?page=${nextPage}`);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    navigate(`?page=${page}`);
  };
  const renderPageButtons = () => {
    const buttons = [];
    const startPage = Math.max(1, currentPage > 1 ? currentPage - 1 : 1);
    const endPage = Math.min(totalPages, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <IconButton
          key={i}
          borderRadius={"50%"}
          onClick={() => handlePageClick(i)}
          bg={currentPage === i ? "primary.500" : "#CBCBCB"}
          _hover={{ bg: "primary.500" }}
          textColor={"white"}
          variant={currentPage === i ? "solid" : "outline"}
          aria-label={`Page ${i}`}
          icon={<Text>{i}</Text>}
        />
      );
    }

    return buttons;
  };
  return (
    <HStack gap={4} py={10} align={"center"} justify={"center"}>
      <IconButton
        onClick={handlePrevPage}
        isDisabled={currentPage === 1}
        aria-label="Previous"
        borderRadius={"50%"}
        boxSize={8}
        variant={"unstyled"}
        icon={<ChevronLeftIcon />}
      />

      {renderPageButtons()}
      <IconButton
        onClick={handleNextPage}
        isDisabled={currentPage === totalPages}
        borderRadius={"50%"}
        aria-label="Next"
        boxSize={8}
        variant={"unstyled"}
        icon={<ChevronRightIcon />}
      />
    </HStack>
  );
};

export default PaginationButton;
