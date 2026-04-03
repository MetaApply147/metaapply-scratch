import { FormSchema } from "@/components/forms/DynamicLeadForm";
import { baseFields } from "./base.fields";

export const metainsureform: FormSchema = {
    formId: "metainsure-enquiry",
    fields: [
        ...baseFields,
        {
            name: "message",
            type: "textarea",
            lsKey: "notes",
            placeholder: "Enter Message",
            required: true,
        },
       
    ],
};