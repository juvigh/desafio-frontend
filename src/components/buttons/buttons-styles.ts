import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography/typography';

export const buttonStyles = {
  primary: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '143px',
    border: 'none',
    color: colors.NeutralWhite,
    borderRadius: '4px',
    padding: '16px',
    fontWeight: typography.weight.bold,
    cursor: 'pointer',
  },
  secondary: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '143px',
    border: `1px solid ${colors.Accessory1}`,
    backgroundColor: colors.NeutralWhite,
    color: colors.Accessory1,
    borderRadius: '4px',
    padding: '16px',
    fontWeight: typography.weight.regular,
    cursor: 'pointer',
  },
  cta: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '143px',
    border: 'none',
    backgroundColor: colors.CTA,
    color: colors.NeutralWhite,
    borderRadius: '4px',
    padding: '16px',
    fontWeight: typography.weight.bold,
    cursor: 'pointer',
  },
};
