import palette from "./palette";

const components = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      size: "medium" as const,
    },

    styleOverrides: {
      root: {
        borderRadius: 12,
        textTransform: "none",
        boxShadow: "none",
        letterSpacing: "-0.16px",
        fontFamily: "var(--font-heading)",
      },

      sizeMedium: {
        padding: "12px 20px",
        fontSize: 16,
        fontWeight: 700,
        lineHeight: "20px",
      },

      sizeSmall: {
        padding: "7px 14.5px",
        fontSize: 16,
        fontWeight: 400,
        lineHeight: "20px",
      },

      containedPrimary: {
        backgroundColor: palette.pink[400],
        color: palette.common.white,

        "&:hover": {
          backgroundColor: palette.pink[500],
          boxShadow: "none",
        },
      },

      outlinedPrimary: {
        borderColor: palette.pink[400],
        color: palette.pink[400],
        backgroundColor: "transparent",

        "&:hover": {
          backgroundColor: palette.pink[400],
          color: palette.common.white,
          borderColor: palette.pink[400],
          boxShadow: "none",
        },
      },
    },
  },
};

export default components;