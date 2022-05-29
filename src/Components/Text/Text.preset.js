
import { colors } from "../../Themes/Colors";
import { typography } from "../../Themes/Typography";


const BASE = {
    fontFamily: typography.primary,
    fontSize: 16,
    color: colors.white
}
const BASE_BOLD = {
    fontFamily: typography.primary,
    fontSize: 16,
    color: colors.white
}
const BOLD = {
    fontFamily: typography.primary,
    color: colors.white,
    fontWeight:"bold"

}

export const presets = {
    default: BASE,
    BOLD,
    h1: { ...BOLD, fontSize: 32},
    h2: { ...BOLD, fontSize: 28 },
    h3: { ...BOLD, fontSize: 24 },
    h4: { ...BOLD, fontSize: 20 },
    h5: { ...BOLD, fontSize: 16 },
    h6: { ...BASE_BOLD, fontSize: 12 },
    small:{...BASE,fontSize:10}
}