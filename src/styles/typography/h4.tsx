import { colors } from "../colors";
import { typography } from "./typography";

export const H4 = ({ children }: { children: React.ReactNode }) => {
    return (
        <h4
            style={{
                fontFamily: typography.family.primary,
                fontSize: typography.size.large,
                fontWeight: typography.weight.extraBold,
                color: colors.PrimaryDark,
                lineHeight: typography.lineHeight.medium,
            }}
        >
            {children}
        </h4>
    );
};
