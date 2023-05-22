import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography/typography';

export const formStyles = {
  display: 'flex',
  border: `1px solid ${colors.NeutralLight}`,
  minHeight: '72px',
  maxWidth: '360px',
  borderRadius: typography.border.radiusLarge,
  padding: typography.size.small,
  backgroundColor: colors.NeutralWhite,
  color: colors.NeutralMedium,
  fontWeight: typography.weight.regular,
  alignItems: 'flex-start',
  justifyContent: 'space-around',
  focused: {
    border: `2px solid ${colors.NeutralDark}`,
    color: colors.NeutralDark,
  },
  filled: {
    border: `1px solid ${colors.NeutralDark}`,
    color: colors.NeutralDark,
  },
  error: {
    border: `1px solid ${colors.FeedbackError}`,
    color: colors.FeedbackError,
  },
  inputStyles: {
    border: 'none',
    padding: '0',
    width: '100%',
    outline: 'none',
    fontSize: typography.size.medium,
    error: {
      color: colors.FeedbackError,
    },
  },
};
