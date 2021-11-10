import { Global } from "@emotion/react"
const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: bold;
        src: url('./fonts/Gilroy-Bold.otf') format('opentype');
      }
      `}
  />
)
export default Fonts