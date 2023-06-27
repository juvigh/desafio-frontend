import React from 'react';
import { H3 } from '../../styles/typography/h3';
import { Body2 } from '../../styles/typography/body-2';
import './footer.css';

interface FooterLinksProps {
  title: string;
  links: string[];
  redirectLinks: string[];
}

export const FooterLinks = ({ title, links, redirectLinks }: FooterLinksProps) => {
  return (
    <div className="footer-links">
      <H3 color="NeutralWhite">{title}</H3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={redirectLinks[index]}>
              <Body2 color="NeutralWhite" weight="regular">
                {link}
              </Body2>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
