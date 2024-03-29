import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LargeLabel } from '../../../styles/typography/label';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Separator } from '../../separator/separator';
import { colors } from '../../../styles/colors';
import { Caption } from '../../../styles/typography/caption';

interface ContactProps {
  image: string;
  name?: string;
  workplace?: string;
  address?: string;
}

export const CardContact = ({ image, name, workplace, address }: ContactProps) => {
  return (
    <div className="contact">
      <div className="contact-details">
        <img src={image} alt={name} />
        <div className="contact-info">
          <div className="name-container">
            <LargeLabel weight="bold">{name}</LargeLabel>
            <Separator horizontal size={4} />
            <FontAwesomeIcon icon={faCheckCircle} color={`${colors.FeedbackSuccess}`} />
          </div>
          <div>
            <Caption>{workplace}</Caption>
            <Caption>{address}</Caption>
          </div>
        </div>
      </div>
    </div>
  );
};
