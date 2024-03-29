export const Theme = {
  colors: {
    primaryBg: "beige",
  },
  breakpoints: {
    xs: "320px",
    s: "480px",
    m: "768px",
    l: "992px",
    xl: "1200px",
  },
  desktop: {
    rows: "auto",
    columns: "1fr auto",
    area: `
    "content sidebar"
              `,
  },
  desktopTwo: {
    rows: "",
    columns: "",
    area: `
              `,
  },
  mobile: {
    rows: "auto auto 1fr auto",
    columns: "1fr",
    area: `
      "header"
      "hero"
      "main"
      "footer"
            `,
  },
  mobileTwo: {
    rows: "",
    columns: "",
    area: `
              
              `,
  },
  tablet: {
    rows: "auto auto 1fr auto",
    columns: "1fr",
    area: `
      "header"
      "hero"
      "main"
      "footer"
              `,
  },
  tabletTwo: {
    rows: "",
    columns: "",
    area: `
              `,
  },
};
