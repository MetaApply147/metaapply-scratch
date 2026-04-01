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
    // ✅ CHECKBOX 1
    {
        name: "consent",
        type: "checkbox",
        lsKey: "mx_consent",
        required: true,
        defaultChecked: true,
        label:
        "I authorise company & its representatives to contact me with updates and notifications via Email/SMS/WhatsApp/Call.",
    },

    // ✅ CHECKBOX 2 (WITH LINK)
    {
        name: "terms",
        type: "checkbox",
        lsKey: "mx_Terms",
        required: true,
        defaultChecked: true,
        label: `I have read and agreed to Terms and Conditions`,
        sendToLSQ: false,
    },
];