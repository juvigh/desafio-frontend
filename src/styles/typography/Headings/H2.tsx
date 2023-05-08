import { colors } from "../../colors";
import { typography } from "../typography";

export const H2 = ({ children }: { children: React.ReactNode }) => {
    return (
        <h2
            style={{
                fontFamily: typography.font.family.primary,
                fontSize: typography.font.size.xxLarge,
                fontWeight: typography.font.weight.regular,
                color: colors.PrimaryDark,
                lineHeight: typography.font.lineHeight.medium,
            }}
        >
            {children}
        </h2>
    );
};