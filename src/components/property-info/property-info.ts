import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography/typography';

export const propertyStyles = {
  display: 'flex',
  backgroundColor: colors.NeutralXlight,
  color: colors.NeutralXdark,
  fontSize: typography.size.medium,
  border: `1px solid ${colors.NeutralXlight}`,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: typography.border.radiusLarge,
  width: '100px',
  height: '95px',
  padding: typography.size.small,
  icon: {
    padding: typography.size.small,
  },
};
