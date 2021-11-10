// theme.js
import { extendTheme } from "@chakra-ui/react"
import colors from "./colors"
import Button from "./components/Button"

// Global style overrides
// import styles from "./styles"

const overrides = {
  colors,
  fonts: {
    heading: "Gilroy",
    body: "Inter",
  },
  textStyles: {
    d1: {
      fontFamily: 'heading',
      fontSize: ["96px"],
      fontWeight: "bold",
      lineHeight: "120px",
      letterSpacing: "-1px",
      color: "text.normal"
    },
    d2: {
      fontFamily: 'heading',
      fontSize: ["72px"],
      fontWeight: "bold",
      lineHeight: "88px",
      letterSpacing: "-1px",
      color: "text.normal"
    },
    d3: {
      fontFamily: 'heading',
      fontSize: ["64px"],
      fontWeight: "bold",
      lineHeight: "72px",
      letterSpacing: "-1px",
      color: "text.normal"
    },
    h1: {
      fontFamily: 'heading',
      fontSize: ["56px"],
      fontWeight: "bold",
      lineHeight: "64px",
      letterSpacing: "-1px",
      color: "text.normal"
    },
    h2: {
      fontFamily: 'heading',
      fontSize: ["48px"],
      fontWeight: "bold",
      lineHeight: "56px",
      letterSpacing: "-1px",
      color: "text.normal"
    },
    h3: {
      fontFamily: 'heading',
      fontSize: [null, null, "30px", "40px"],
      fontWeight: "bold",
      lineHeight: "48px",
      letterSpacing: "-1px",
      color: "text.normal"
    },
    h4: {
      fontFamily: 'heading',
      fontSize: ["32px"],
      fontWeight: "bold",
      lineHeight: "40px",
      letterSpacing: "-1px",
      color: "text.normal"
    },
    h5: {
      fontFamily: 'heading',
      fontSize: ["24px"],
      fontWeight: "bold",
      lineHeight: "32px",
      letterSpacing: "-1px",
      color: "text.normal"
    },
    h6: {
      fontFamily: 'heading',
      fontSize: ["18px"],
      fontWeight: "bold",
      lineHeight: "24px",
      letterSpacing: "-1px",
      color: "text.normal"
    },
    menu: {
      fontSize: ["14px"],
      fontWeight: "600",
      lineHeight: "20px",
      color: "text.normal"
    },
    title: {
      fontSize: ["16px"],
      fontWeight: "600",
      lineHeight: "19px",
      color: "text.normal"
    },
    caption1: {
      fontSize: ["13px"],
      fontWeight: "600",
      lineHeight: "18px",
      color: "text.light"
    },
    caption2: {
      fontSize: ["12px"],
      fontWeight: "500",
      lineHeight: "18px",
      color: "text.light"
    },
    body: {
      fontSize: ["14px"],
      fontWeight: "400",
      lineHeight: "16px",
      color: "text.light"
    },
    bodySmall: {
      fontSize: ["13px"],
      fontWeight: "400",
      lineHeight: "24px",
      color: "text.light"
    },
    button: {
      fontSize: ["14px"],
      fontWeight: "700",
      lineHeight: "20px",
      color: "text.normal"
    },
    buttonSmall: {
      fontSize: ["13px"],
      fontWeight: "700",
      lineHeight: "20px",
      color: "text.normal"
    },
    label: {
      fontSize: ["14px"],
      fontWeight: "500",
      lineHeight: "16px",
      color: "text.label"
    },
    content: {
      fontSize: ["14px"],
      fontWeight: "400",
      lineHeight: "14px",
      color: "text.normal"
    }
  },
  components: {
    Button
  }
}

export default extendTheme(overrides)
