import { useEsewa } from "@/api";
import { useOrderStore } from "@/utils/store";
import { Button, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const Esewa = () => {
  const { stepData } = useOrderStore();
  console.log(stepData);
  const transaction_uuid = uuidv4();
  const esewaFormURL = import.meta.env.VITE_ESEWA_FORM_URL as string;
  console.log(esewaFormURL);
  const product_code = import.meta.env.VITE_ESEWA_PRODUCT_CODE as string;
  const secret_key = import.meta.env.VITE_ESEWA_SECRET_KEY as string;
  const signature_parameters =
    `total_amount=200,transaction_uuid=${transaction_uuid},product_code=${product_code}` as string;
  console.log(signature_parameters);
  const hash = CryptoJS.HmacSHA256(signature_parameters, secret_key);
  const { mutateAsync } = useEsewa();
  const { handleSubmit, register } = useForm({
    defaultValues: {
      amount: "200",
      transaction_uuid,
      failure_url: "https://www.facebook.com",
      success_url: "https://www.facebook.com",
      product_delivery_charge: "0",
      product_service_charge: "0",
      product_code,
      tax_amount: "0",
      signed_field_names: "total_amount,transaction_uuid,product_code",
      total_amount: "200",
      signature: CryptoJS.enc.Base64.stringify(hash),
    },
  });
  const onSubmit = async (data: any) => {
    console.log(data);
    await mutateAsync(data);
    // console.log(response);
    console.log(data);
  };

  return (
    <form
      method="POST"
      action=""
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input {...register("amount")} />
      <Input {...register("transaction_uuid")} />
      <Input {...register("failure_url")} />
      <Input {...register("success_url")} />
      <Input {...register("product_delivery_charge")} />
      <Input {...register("product_service_charge")} />
      <Input {...register("product_code")} />
      <Input {...register("tax_amount")} />
      <Input {...register("signed_field_names")} />
      <Input {...register("total_amount")} />
      <Input {...register("signature")} />

      <Button type="submit">Pay with Esewa</Button>
    </form>
  );
};

export default Esewa;
