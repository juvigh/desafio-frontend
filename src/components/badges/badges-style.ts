import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography/typography';

export const badgeStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `${typography.border.width} solid ${colors.NeutralMedium}`,
  color: colors.NeutralXdark,
  backgroundColor: colors.NeutralWhite,
  width: '86.82px',
  height: '47.05px',
  padding: `${typography.size.large}, ${typography.size.small}`,
  borderRadius: typography.border.radius,
  cursor: 'pointer',
  select: {
    backgroundColor: colors.CTA,
    border: `${typography.border.width} solid ${colors.CTA}`,
    color: colors.NeutralWhite,
  },
};
