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
    .filter(
      (crumb) => crumb !== "" && crumb !== "product" && !/^\d+$/.test(crumb)
    )
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
    <Breadcrumb bg={bg} separator={<ChevronRight size={20} />}>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to={"/"}>
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      {crumbs.map((crumb, index) => (
        <BreadcrumbItem key={index}>{crumb}</BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumbs;
