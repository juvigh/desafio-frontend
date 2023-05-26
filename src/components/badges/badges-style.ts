import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography/typography';

export const badgeStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `${typography.border.width} solid ${colors.NeutralMedium}`,
  color: colors.NeutralXdark,
  fontSize: typography.size.large,
  backgroundColor: colors.NeutralWhite,
  height: '47px',
  padding: `0 ${typography.size.small}`,
  borderRadius: typography.border.radius,
  width: 'fit-content',
  cursor: 'pointer',
};

export const selectStyles = {
  backgroundColor: colors.CTA,
  border: `${typography.border.width} solid ${colors.CTA}`,
  color: colors.NeutralWhite,
};

export const hoverStyles = {
  backgroundColor: colors.Accessory2,
  border: `${typography.border.width} solid ${colors.Accessory2}`,
};
