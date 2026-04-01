import { FormField } from "@/components/forms/DynamicLeadForm";

export const baseFields: FormField[] = [
    {
        name: "fullName",
        type: "text",
        lsKey: "FirstName",
        placeholder: "Enter Full Name*",
        required: true,
    },
    {
        name: "phone",
        type: "phone",
        lsKey: "Phone",
        placeholder: "Phone Number*",
        required: true,
    },
    {
        name: "country",
        type: "country",
        lsKey: "mx_Country",
        placeholder: "Select Country*",
        required: true,
    },
    {
        name: "state",
        type: "state",
        lsKey: "mx_State",
        placeholder: "Select State*",
        required: true,
    },
];