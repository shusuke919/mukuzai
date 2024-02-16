import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // 超小型デバイス
      sm: 767, // 小型デバイス
      md: 900, // 中型デバイス
      lg: 1200, // 大型デバイス
      xl: 1536, // 超大型デバイス
    },
  },
});

export default theme;
