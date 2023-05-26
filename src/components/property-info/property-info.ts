import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography/typography';

export const propertyStyles = {
  backgroundColor: colors.NeutralXlight,
  border: `1px solid ${colors.NeutralXlight}`,
  borderRadius: typography.border.radiusLarge,
  padding: `2px ${typography.size.xxxxLarge}`,
};

export const iconStyle = {
  padding: typography.size.small,
  color: colors.NeutralXdark,
  fontSize: typography.size.medium,
};
