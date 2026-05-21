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
        name: "email",
        type: "email",
        lsKey: "EmailAddress",
        placeholder: "Enter Email ID*",
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
    {
        name: "message",
        type: "textarea",
        lsKey: "notes",
        placeholder: "Enter Message",
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


export const studentAmbassadorBaseFields: FormField[] = [
    {
        name: 'fullName',
        type: 'text',
        lsKey: 'FirstName',
        placeholder: 'Enter Full Name*',
        required: true,
    },

    {
        name: 'phone',
        type: 'phone',
        lsKey: 'Phone',
        placeholder: 'Phone Number*',
        required: true,
    },

    {
        name: 'email',
        type: 'email',
        lsKey: 'EmailAddress',
        placeholder: 'Enter mail id*',
        required: true,
    },

    {
        name: 'state',
        type: 'state',
        lsKey: 'mx_State',
        placeholder: 'Select State*',
        required: true,
    },

    {
        name: 'college',
        type: 'text',
        lsKey: 'mx_College',
        placeholder: 'College/University*',
        required: true,
    },

    {
        name: 'year',
        type: 'select',
        lsKey: 'mx_Year_Of_Study',
        placeholder: 'Year of Study*',
        required: true,

        options: [
            { label: '1st Year', value: '1st Year' },
            { label: '2nd Year', value: '2nd Year' },
            { label: '3rd Year', value: '3rd Year' },
            { label: '4th Year', value: '4th Year' },
        ],
    },

    {
        name: 'linkedin',
        type: 'text',
        lsKey: 'mx_Linkedin',
        placeholder: 'LinkedIn / Instagram URL',
        required: false,
    },

    {
        name: 'message',
        type: 'textarea',
        lsKey: 'notes',
        placeholder: 'Message',
        required: false,
    },

    {
        name: 'consent',
        type: 'checkbox',
        lsKey: 'mx_consent',
        required: true,
        defaultChecked: true,
        label:
            'I authorise MetaApply IE & its representatives to contact me with updates and notifications via Email/SMS/WhatsApp/Call.',
    },

    {
        name: 'terms',
        type: 'checkbox',
        lsKey: 'mx_terms',
        required: true,
        defaultChecked: true,
        label: 'I have read and agreed to terms & privacy policy',
        sendToLSQ: false,
    },
]

export const contactUsBaseFields: FormField[] = [
    {
        name: 'year',
        type: 'select',
        lsKey: 'mx_enquireBy',
        placeholder: 'Enquire By*',
        required: true,
        options: [
            { label: 'Student', value: 'Student' },
            { label: 'University', value: 'University' },
            { label: 'Franchise', value: 'Franchise' },
            { label: 'Others', value: 'Others' },
        ],
    },
     {
        name: "fullName",
        type: "text",
        lsKey: "FirstName",
        placeholder: "Enter Full Name*",
        required: true,
    },
    {
        name: "email",
        type: "email",
        lsKey: "EmailAddress",
        placeholder: "Enter Email ID*",
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
     {
        name: 'message',
        type: 'textarea',
        lsKey: 'notes',
        placeholder: 'Message',
        required: false,
    },
    {
        name: 'consent',
        type: 'checkbox',
        lsKey: 'mx_consent',
        required: true,
        defaultChecked: true,
        label:
            'I authorise MetaApply IE & its representatives to contact me with updates and notifications via Email/SMS/WhatsApp/Call.',
    },

    {
        name: 'terms',
        type: 'checkbox',
        lsKey: 'mx_terms',
        required: true,
        defaultChecked: true,
        label: 'I have read and agreed to terms & privacy policy',
        sendToLSQ: false,
    },
]