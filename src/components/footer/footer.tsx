import React from 'react';
import './footer.css';
import { FooterLinks } from './footer-link';
import logo from '../../assets/logo-footer.svg';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { MediumLabel } from '../../styles/typography/label';
import { FooterIcons } from './footer-icons';

export const Footer = () => {
  const icons = [faFacebookF, faInstagram, faLinkedinIn, faTwitter];
  const links = [
    'https://www.facebook.com/',
    'https://www.instagram.com/',
    'https://www.linkedin.com/',
    'https://www.twitter.com/',
  ];

  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-logo">
          <img src={logo} />
        </div>
        <div className="footer-columns">
          <div className="column">
            <FooterLinks
              title="Comprar"
              links={['Casas', 'Apartamentos', 'Lançamentos', 'Melhores negócios']}
              redirectLinks={[
                '/comprar/casas',
                '/comprar/apartamentos',
                '/comprar/lancamentos',
                '/comprar/melhores-negocios',
              ]}
            />

            <FooterLinks
              title="Alugar"
              links={['Casas', 'Apartamentos', 'Lançamentos', 'Melhores negócios']}
              redirectLinks={[
                '/alugar/casas',
                '/alugar/apartamentos',
                '/alugar/lancamentos',
                '/alugar/melhores-negocios',
              ]}
            />
          </div>
          <div className="column">
            <FooterLinks
              title="Termos & Privacidade"
              links={['Política de cookies', 'Termos de uso', 'Política de privacidade']}
              redirectLinks={['/termos/politica-de-cookies', '/termos/termo-de-uso', '/termos/politica-de-privacidade']}
            />
            <FooterLinks
              title="Institucional"
              links={['Sobre nós', 'Contato', 'Trabalhe conosco']}
              redirectLinks={['/institucional/sobre-nos', '/institucional/contato', '/institucional/trabalhe-conosco']}
            />
          </div>
          <div className="column">
            <FooterLinks
              title="Informações"
              links={['Blog', 'Guia', 'FAQ', 'Canal de ajuda']}
              redirectLinks={['/info/blog', '/info/guia', '/info/faq', '/info/canal-de-ajuda']}
            />
            <FooterIcons icons={icons} links={links} />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <MediumLabel>©2022 Estatery. Todos os direitos estão reservados</MediumLabel>
      </div>
    </footer>
  );
};
