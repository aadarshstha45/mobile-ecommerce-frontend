import toast from "react-hot-toast";

export const useToast = () => {
  const errorToast = (message: string) => {
    toast.error(message, {
      duration: 4000,
      style: {
        border: "1px solid",
        borderColor: "red",
        padding: "16px",
        color: "red.300",
      },
    });
  };

  const successToast = (message: string) => {
    toast.success(message, {
      duration: 4000,
      style: {
        border: "1px solid",
        borderColor: "green.300",
        padding: "16px",
        color: "green.300",
      },
    });
  };

  return { errorToast, successToast };
};
