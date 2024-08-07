interface EsewaFormData {
  amount: number;
  tax_amount: number;
  total_amount: number;
  transaction_uuid: string;
  product_code: string;
  product_service_charge: number;
  product_delivery_charge: number;
  success_url: string;
  failure_url: string;
  signed_field_names: string;
  signature: string;
}

export const EsewaForm = (data: EsewaFormData) => {
  console.log(data);
  const form = document.createElement("form");
  form.setAttribute("method", "POST");
  form.setAttribute(
    "action",
    "https://rc-epay.esewa.com.np/api/epay/main/v2/form"
  );
  form.setAttribute("id", "esewa_form");
  form.setAttribute("name", "esewa_form");
  form.setAttribute("target", "_self");

  (Object.keys(data) as (keyof EsewaFormData)[]).forEach((key) => {
    const hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", data[key].toString());
    form.appendChild(hiddenField);
  });

  document.body.appendChild(form);
  form.submit();
};
