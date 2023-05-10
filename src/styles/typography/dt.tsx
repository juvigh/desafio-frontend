import { colors } from "../colors";
import { typography } from "./typography";

interface DTDDProps {
    children: React.ReactNode;
    weight: "regular" | "bold";
};

export const DT = ({ children, weight }: DTDDProps) => {
    return (
        <dt
            style={{
                fontSize: typography.font.size.medium,
                fontWeight: typography.font.weight[weight === "regular" ? "regular" : "bold"],
                color: colors.NeutralXdark,
            }}
        >
            {children}
        </dt>
    );
};
