import { Theme } from "@mui/material/styles";

const typography = (theme: Theme) => ({

  fontFamily: "var(--font-body)",

  /* DISPLAY */

  display00: {
    fontFamily: "var(--font-heading)",
    fontSize: "92px",
    fontWeight: 700,
    lineHeight: 1.2
  },

  display01: {
    fontFamily: "var(--font-heading)",
    fontSize: "80px",
    fontWeight: 700,
    lineHeight: 1.2
  },

  display02: {
    fontFamily: "var(--font-heading)",
    fontSize: "72px",
    fontWeight: 700,
    lineHeight: 1.2
  },

  /* HEADINGS */

  heading03: {
    fontFamily: "var(--font-heading)",
    fontSize: "68px",
    fontWeight: 600
  },

  heading04: {
    fontFamily: "var(--font-heading)",
    fontSize: "60px",
    fontWeight: 600
  },

  heading05: {
    fontFamily: "var(--font-heading)",
    fontSize: "52px",
    fontWeight: 600
  },

  heading06: {
    fontFamily: "var(--font-heading)",
    fontSize: "48px",
    fontWeight: 600
  },

  heading07: {
    fontFamily: "var(--font-heading)",
    fontSize: "10px",
    fontWeight: 600,

    [theme.breakpoints.up("xs")]: {
      fontSize: "28px",
      lineHeight: "36px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "32px",
      lineHeight: "40px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "36px",
      lineHeight: "44px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "40px",
      lineHeight: "48px",
    },
  },

  heading08: {
    fontFamily: "var(--font-heading)",
    fontSize: "36px",
    fontWeight: 600
  },

  heading09: {
    fontFamily: "var(--font-heading)",
    fontSize: "32px",
    fontWeight: 600
  },

  heading10: {
    fontFamily: "var(--font-heading)",
    fontSize: "28px",
    fontWeight: 600
  },

  heading11: {
    fontFamily: "var(--font-heading)",
    fontSize: "24px",
    fontWeight: 600
  },

  heading12: {
    fontFamily: "var(--font-heading)",
    fontSize: "20px",
    fontWeight: 600
  },

  heading13: {
    fontFamily: "var(--font-heading)",
    fontSize: "18px",
    fontWeight: 600
  },

  heading14: {
    fontFamily: "var(--font-heading)",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: '24px'
  },

  heading15: {
    fontFamily: "var(--font-heading)",
    fontSize: "14px",
    fontWeight: 600
  },

  /* BODY */

  body01: {
    fontFamily: "var(--font-body)",
    fontSize: "28px",
    fontWeight: 400
  },

  body02: {
    fontFamily: "var(--font-body)",
    fontSize: "24px",
    fontWeight: 400
  },

  body03: {
    fontFamily: "var(--font-body)",
    fontSize: "20px",
    fontWeight: 400
  },

  body04: {
    fontFamily: "var(--font-body)",
    fontSize: "18px",
    fontWeight: 400
  },

  body05: {
    fontFamily: "var(--font-body)",
    fontSize: "16px",
    fontWeight: 400
  },

  body06: {
    fontFamily: "var(--font-body)",
    fontSize: "14px",
    fontWeight: 400
  },

  body07: {
    fontFamily: "var(--font-body)",
    fontSize: "12px",
    fontWeight: 400
  },

  body08: {
    fontFamily: "var(--font-body)",
    fontSize: "10px",
    fontWeight: 400
  }

});

export default typography;