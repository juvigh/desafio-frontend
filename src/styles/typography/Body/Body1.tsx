import { colors } from "../../colors";
import { typography } from "../typography";

export const Body1 = ({ children }: { children: React.ReactNode }) => {
    return (
        <p
            style={{
                fontSize: typography.font.size.xLarge,
                fontWeight: typography.font.weight.regular,
                color: colors.NeutralXdark,
            }}
        >
            {children}
        </p>
    );
};
