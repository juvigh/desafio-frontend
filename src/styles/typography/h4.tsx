import { colors } from "../colors";
import { typography } from "./typography";

export const H4 = ({ children }: { children: React.ReactNode }) => {
    return (
        <h4
            style={{
                fontFamily: typography.font.family.primary,
                fontSize: typography.font.size.large,
                fontWeight: typography.font.weight.extraBold,
                color: colors.PrimaryDark,
                lineHeight: typography.font.lineHeight.medium,
            }}
        >
            {children}
        </h4>
    );
};
