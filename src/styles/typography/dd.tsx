import { colors } from "../colors";
import { typography } from "./typography";

interface DTDDProps {
    children: React.ReactNode;
    weight: "regular" | "bold";
};

export const DD = ({ children, weight }: DTDDProps) => {
    return (
        <dd
            style={{
                fontSize: typography.font.size.medium,
                fontWeight: typography.font.weight[weight === "regular" ? "regular" : "bold"],
                color: colors.NeutralXdark,
            }}
        >
            {children}
        </dd>
    );
};
