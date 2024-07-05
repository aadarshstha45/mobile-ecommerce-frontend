import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "lucide-react";

interface BreadCrumbsProps {
  children: React.ReactNode;
}

const BreadCrumbs = ({ children }: BreadCrumbsProps) => {
  return (
    <Breadcrumb
      spacing="20px"
      separator={<ChevronRightIcon color="gray.500" />}
    >
      <BreadcrumbItem>{children}</BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
