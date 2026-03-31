import { FormSchema } from "@/components/forms/DynamicLeadForm";
import { baseFields } from "./base.fields";

export const metaflyForm: FormSchema = {
    formId: "metafly-enquiry",
    submitLabel: "Enquire Now",
    fields: [
        ...baseFields,
        {
            name: "flyingFrom",
            type: "text",
            lsKey: "mx_Flying_From",
            placeholder: "Flying From*",
            required: true,
        },
        {
            name: "flyingTo",
            type: "text",
            lsKey: "mx_Flying_To",
            placeholder: "Flying To*",
            required: true,
        },
    ],
};