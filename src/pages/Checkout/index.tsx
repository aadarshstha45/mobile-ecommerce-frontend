import { Box, Container, Flex } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { lazy } from "react";
import { BiDollar, BiLogoShopify, BiShoppingBag } from "react-icons/bi";

const ShippingDetails = lazy(() => import("./ShippingDetails"));
const PaymentOption = lazy(() => import("./PaymentOption"));
const ShoppingBag = lazy(() => import("./ShoppingBag"));

const ChakraStepper = () => {
  const { nextStep, prevStep, activeStep, setStep } = useSteps({
    initialStep: 0,
  });

  const steps = [
    {
      label: "ShoppingBag",
      component: <ShoppingBag stepProps={{ nextStep, prevStep }} />,
      icon: BiShoppingBag,
    },

    {
      label: "Shipping Details",
      component: <ShippingDetails stepProps={{ nextStep, prevStep }} />,
      icon: BiLogoShopify,
    },
    {
      label: "Payment Option",
      component: <PaymentOption stepProps={{ nextStep, prevStep }} />,
      icon: BiDollar,
    },
  ];

  return (
    <Container
      maxW={{ base: "99vw", sm: "95vw", md: "90vw", lg: "85vw" }}
      py={10}
    >
      <Flex flexDir="column" gap={"20"} width="100%" userSelect={"none"}>
        <Steps
          onClickStep={(i: number) => setStep(i)}
          variant={"circles-alt"}
          colorScheme="primary"
          cursor="pointer"
          expandVerticalSteps={false}
          trackColor="primary.100"
          activeStep={activeStep}
        >
          {steps.map(({ label, icon, component }) => (
            <Step checkIcon={icon} label={label} key={label} icon={icon}>
              <Container
                maxW={{ base: "100vw", sm: "95vw", md: "90vw", lg: "85vw" }}
              >
                <Box p={{ sm: 4 }}>{component}</Box>
              </Container>
            </Step>
          ))}
        </Steps>
      </Flex>
    </Container>
  );
};

export default ChakraStepper;
