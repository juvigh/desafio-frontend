import { colors } from "../../colors";
import { typography } from "../typography";

type DTDDProps = {
    children: React.ReactNode;
    weight: "regular" | "bold";
};

export const DT = ({ children, weight }: DTDDProps) => {
    let fontWeight
    if (weight === "regular") {
        fontWeight = typography.font.weight.regular
    } else {
        fontWeight = typography.font.weight.bold
    }
    return (
        <dt
            style={{
                fontSize: typography.font.size.medium,
                fontWeight: fontWeight,
                color: colors.NeutralXdark,
            }}
        >
            {children}
        </dt>
    );
};
