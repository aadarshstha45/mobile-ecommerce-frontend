import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface BreadCrumbsProps {
  bg?: string;
}

const BreadCrumbs = ({ bg }: BreadCrumbsProps) => {
  const location = useLocation();
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "" && crumb !== "product")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      const crumbWithSpaces = crumb.replace(/-/g, " ");

      return (
        <BreadcrumbLink
          textTransform={"capitalize"}
          as={Link}
          to={currentLink}
          key={crumb}
        >
          {crumbWithSpaces}
        </BreadcrumbLink>
      );
    });

  return (
    <Breadcrumb bg={bg} separator={<ChevronRight />}>
      {crumbs.map((crumb, index) => (
        <BreadcrumbItem key={index}>
          <BreadcrumbLink
            textTransform={"capitalize"}
            as={Link}
            to={currentLink}
          >
            {crumb}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumbs;
