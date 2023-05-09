import { colors } from "../../colors";
import { typography } from "../typography";

interface Body2Props {
    children: React.ReactNode;
    weight: "regular" | "bold";
};



export const Body2 = ({ children, weight }: Body2Props) => {
    return (
        <p
            style={{
                fontSize: typography.font.size.xLarge,
                fontWeight: typography.font.weight[weight === "regular" ? "regular" : "bold"],
                color: colors.NeutralXdark,
            }}
        >
            {children}
        </p>
    );
};
