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
        fontFamily: typography.family.primary,
        fontSize: typography.size.medium,
        fontWeight: typography.weight[weight === "regular" ? "regular" : "bold"],
        color: colors.NeutralXdark,
      }}
    >
      {children}
    </dt>
  );
};
