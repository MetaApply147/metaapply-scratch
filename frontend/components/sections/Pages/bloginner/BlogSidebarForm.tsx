"use client";

import DynamicLeadForm from "@/components/forms/DynamicLeadForm";
import { baseFields } from "@/config/forms/base.fields";
import { Box, TextField, Typography } from "@mui/material";

export default function BlogSidebarForm() {
  const schema = {
    formId: "Blogs Inner Page",
    fields: baseFields,
    extraPayload: {
      mx_Program_Products: "",
      mx_Marketing_Pages: "",
    },
  };
  return (
    <Box
      sx={{
        position: "sticky",
        top: 150,
        border: '1px solid #B9B9B9',
        borderRadius: '10px',
        overflow: 'hidden'

      }}
    >
      <Box sx={{p: '12px', textAlign: 'center', color: 'common.white', lineHeight:'normal', backgroundColor: 'primary.main'}}>
          <Typography variant="heading12" component='h6'>
            Interested in Study Abroad?
        </Typography>
        <Typography variant="body06" component='p'>
            MetaApply can help - fill the form
        </Typography>
      </Box>

      <DynamicLeadForm schema={schema} Setwidth={'100%'} boxShadow={false} borderRadius={false} showTitle={false}/>
    </Box>
  );
}
