import { Theme } from "@mui/material/styles";

const typography = (theme: Theme) => ({

  fontFamily: "var(--font-body)",

  /* DISPLAY */

  display00: {
    fontFamily: "var(--font-heading)",
    fontSize: "92px",
    fontWeight: 700,
    lineHeight: 1.2,

    [theme.breakpoints.down("md")]: {
      fontSize: "72px",
      lineHeight: 1.2,
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "48px",
      lineHeight: 1.2,
    },
  },

  display01: {
    fontFamily: "var(--font-heading)",
    fontSize: "80px",
    fontWeight: 700,
    lineHeight: 1.2,

    [theme.breakpoints.down("md")]: {
      fontSize: "64px",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "44px",
    },
  },

  display02: {
    fontFamily: "var(--font-heading)",
    fontSize: "72px",
    fontWeight: 700,
    lineHeight: 1.2,

    [theme.breakpoints.down("md")]: {
      fontSize: "58px",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  },

  /* HEADINGS */

  heading03: {
    fontFamily: "var(--font-heading)",
    fontSize: "68px",
    fontWeight: 600,

    [theme.breakpoints.down("md")]: {
      fontSize: "52px",
      lineHeight: "62px",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      lineHeight: "48px",
    },
  },

  heading04: {
    fontFamily: "var(--font-heading)",
    fontSize: "60px",
    fontWeight: 600,

    [theme.breakpoints.down("md")]: {
      fontSize: "48px",
      lineHeight: "58px",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "36px",
      lineHeight: "44px",
    },
  },

  heading05: {
    fontFamily: "var(--font-heading)",
    fontSize: "52px",
    fontWeight: 600,

    [theme.breakpoints.down("md")]: {
      fontSize: "42px",
      lineHeight: "52px",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
      lineHeight: "40px",
    },
  },

  heading06: {
    fontFamily: "var(--font-heading)",
    fontSize: "48px",
    fontWeight: 600,

    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
      lineHeight: "50px",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      lineHeight: "38px",
    },
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
    fontWeight: 600,

    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      lineHeight: "36px",
    },
  },

  heading09: {
    fontFamily: "var(--font-heading)",
    fontSize: "32px",
    fontWeight: 600,

    [theme.breakpoints.down("sm")]: {
      fontSize: "26px",
      lineHeight: "34px",
    },
  },

  heading10: {
    fontFamily: "var(--font-heading)",
    fontSize: "28px",
    fontWeight: 600,

    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      lineHeight: "30px",
    },
  },

  heading11: {
    fontFamily: "var(--font-heading)",
    fontSize: "24px",
    fontWeight: 600,

    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      lineHeight: "28px",
    },
  },

  heading12: {
    fontFamily: "var(--font-heading)",
    fontSize: "20px",
    fontWeight: 600,

    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      lineHeight: "26px",
    },
  },

  heading13: {
    fontFamily: "var(--font-heading)",
    fontSize: "18px",
    fontWeight: 600,

    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },

  heading14: {
    fontFamily: "var(--font-heading)",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
  },

  heading15: {
    fontFamily: "var(--font-heading)",
    fontSize: "14px",
    fontWeight: 600,
  },

  /* BODY */

  body01: {
    fontFamily: "var(--font-body)",
    fontSize: "28px",
    fontWeight: 400,

    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      lineHeight: "34px",
    },
  },

  body02: {
    fontFamily: "var(--font-body)",
    fontSize: "24px",
    fontWeight: 400,

    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      lineHeight: "32px",
    },
  },

  body03: {
    fontFamily: "var(--font-body)",
    fontSize: "20px",
    fontWeight: 400,

    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      lineHeight: "30px",
    },
  },

  body04: {
    fontFamily: "var(--font-body)",
    fontSize: "18px",
    fontWeight: 400,

    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "28px",
    },
  },

  body05: {
    fontFamily: "var(--font-body)",
    fontSize: "16px",
    fontWeight: 400,

    [theme.breakpoints.down("sm")]: {
      lineHeight: "26px",
    },
  },

  body06: {
    fontFamily: "var(--font-body)",
    fontSize: "14px",
    fontWeight: 400,

    [theme.breakpoints.down("sm")]: {
      lineHeight: "24px",
    },
  },

  body07: {
    fontFamily: "var(--font-body)",
    fontSize: "12px",
    fontWeight: 400,
  },

  body08: {
    fontFamily: "var(--font-body)",
    fontSize: "10px",
    fontWeight: 400,
  }

});

export default typography;