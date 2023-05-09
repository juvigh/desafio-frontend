import { colors } from "../../colors";
import { typography } from "../typography";

type Body2Props = {
    children: React.ReactNode;
    weight: "regular" | "bold";
};



export const Body2 = ({ children, weight }: Body2Props) => {
    let fontWeight
    if (weight === "regular") {
        fontWeight = typography.font.weight.regular
    } else {
        fontWeight = typography.font.weight.bold
    }
    return (
        <p
            style={{
                fontSize: typography.font.size.xLarge,
                fontWeight: fontWeight,
                color: colors.NeutralXdark,
            }}
        >
            {children}
        </p>
    );
};
