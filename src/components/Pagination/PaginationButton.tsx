import { Button, ButtonGroup, HStack, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PaginationButtonProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  dayFilter?: string;
  fromDate?: string;
  toDate?: string;
  sort?: string;
}

const PaginationButton = ({
  currentPage,
  setCurrentPage,
  totalPages,
  sort,
}: PaginationButtonProps) => {
  const navigate = useNavigate();
  // const queryParams = (page: number) => {
  //   const params = new URLSearchParams({ page: String(page) });
  //   if (fromDate) {
  //     params.append("date_from", fromDate);
  //   }
  //   return params.toString();
  // };
  const handlePrevPage = () => {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    window.scroll({ top: 0, behavior: "smooth" });
    // navigate(`?${queryParams(prevPage)}`);
    navigate(`?page=${prevPage}${sort ? `&sort=${sort}` : ""}`);
  };

  // Function to handle next page
  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    window.scroll({ top: 0, behavior: "smooth" });
    // navigate(`?${queryParams(nextPage)}`);
    navigate(`?page=${nextPage}${sort ? `&sort=${sort}` : ""}`);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    window.scroll({ top: 0, behavior: "smooth" });
    // navigate(`?${queryParams(page)}`);
    navigate(`?page=${page}${sort ? `&sort=${sort}` : ""}`);
  };
  const renderPageButtons = () => {
    const buttons = [];
    const startPage = Math.max(1, currentPage > 1 ? currentPage - 1 : 1);
    const endPage = Math.min(totalPages, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          gap={0}
          key={i}
          onClick={() => handlePageClick(i)}
          variant={currentPage === i ? "solid" : "outline"}
          aria-label={`Page ${i}`}
          colorScheme="primary"
        >
          {i}
        </Button>
      );
    }
    return buttons;
  };

  return (
    <HStack py={10} align={"center"} justify={"center"}>
      <ButtonGroup size={"sm"} isAttached>
        <IconButton
          onClick={handlePrevPage}
          isDisabled={currentPage === 1}
          variant={"outline"}
          colorScheme="primary"
          aria-label="Previous"
          icon={<ChevronLeftIcon />}
        />
        {renderPageButtons()}
        <IconButton
          cursor={"pointer"}
          onClick={handleNextPage}
          isDisabled={currentPage === totalPages}
          variant={"outline"}
          colorScheme="primary"
          aria-label="Next"
          icon={<ChevronRightIcon />}
        />
      </ButtonGroup>
    </HStack>
  );
};

export default PaginationButton;
