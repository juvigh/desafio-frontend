import { colors } from '../../styles/colors';
import { customStyles } from '../../styles/typography/style-customs';
import { typography } from '../../styles/typography/typography';

const commonStyles = {
  backgroundColor: colors.NeutralWhite,
  borderRadius: typography.border.radius,
  caption: {
    fontSize: customStyles.caption.size,
    color: customStyles.caption.color,
    fontWeight: customStyles.caption.weight,
  },
  mediumPrice: {
    fontSize: customStyles.prices.mediumPrice.size,
    color: customStyles.prices.mediumPrice.color,
    fontWeight: customStyles.prices.mediumPrice.weight,
  },
};

export const cardCategoryStyles = {
  ...commonStyles,
};

export const cardImovelStyles = {
  ...commonStyles,
};

export const facilitiesImovelStyle = {
  ...commonStyles,
};
