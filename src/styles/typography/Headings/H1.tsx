import { colors } from "../../colors";
import { typography } from "../typography";

export const H1 = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1
            style={{
                fontFamily: typography.font.family.primary,
                fontSize: typography.font.size.xxxxLarge,
                fontWeight: typography.font.weight.semiBold,
                color: colors.PrimaryDark,
                lineHeight: typography.font.lineHeight.large,
            }}
        >
            {children}
        </h1>
    );
};
