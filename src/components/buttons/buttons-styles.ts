import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography/typography';

export const baseButtonStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '143px',
  borderRadius: typography.border.radius,
  padding: `0 ${typography.size.large}`,
  cursor: 'pointer',
  height: '48px',
};

export const buttonStyles = {
  primary: {
    ...baseButtonStyles,
    border: 'none',
    color: colors.NeutralWhite,
    fontWeight: typography.weight.bold,
  },
  secondary: {
    ...baseButtonStyles,
    border: `${typography.border.width} solid ${colors.Accessory1}`,
    backgroundColor: colors.NeutralWhite,
    color: colors.Accessory1,
    fontWeight: typography.weight.regular,
  },
  cta: {
    ...baseButtonStyles,
    border: 'none',
    backgroundColor: colors.CTA,
    color: colors.NeutralWhite,
    fontWeight: typography.weight.bold,
  },
};
