import { FormSchema } from "@/components/forms/DynamicLeadForm";
import { baseFields } from "./base.fields";

export const metaflyForm: FormSchema = {
    formId: "metafly-enquiry",
    submitLabel: "Enquire Now",
    fields: [
        ...baseFields,
        {
        name: "email",
        type: "email",
        lsKey: "EmailAddress",
        placeholder: "Enter Email ID*",
        required: true,
    },
       
    ],
};