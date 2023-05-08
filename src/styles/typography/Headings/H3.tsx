import { colors } from "../../colors";
import { typography } from "../typography";

export const H3 = ({ children }: { children: React.ReactNode }) => {
    return (
        <h3
            style={{
                fontFamily: typography.font.family.primary,
                fontSize: typography.font.size.xLarge,
                fontWeight: typography.font.weight.semiBold,
                color: colors.NeutralDark,
                lineHeight: typography.font.lineHeight.medium,
            }}
        >
            {children}
        </h3>
    );
};
