import { ResponsiveGrid } from '@cylo/ui/components';
import { CyloIconAmiLogo, CyloIconCyloTrustedPartner } from '@cylo/ui/icons';
import { Trans, useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import { CONTACT_US_ROUTE, selectPolicyWordingUrl, selectPrivacyPolicyUrl, selectTermsOfUseUrl } from '@ami/shared';

const AppFooter = () => {
  const { t } = useTranslation();

  return (
    <ResponsiveGrid className="app-footer" fluid={false}>
      <div className="footer-nav-menu-container">
        <ul className="footer-nav-menu link-dsk text-white flex">
          <li>
            <NavLink to={CONTACT_US_ROUTE} data-cy="cy-link-contact-us">
              {t('Contact us')}
            </NavLink>
          </li>
          <li>
            <NavLink to={selectPrivacyPolicyUrl()} target="_blank" data-cy="cy-link-privacy-policy">
              {t('Privacy policy')}
            </NavLink>
          </li>
          <li>
            <NavLink to={selectTermsOfUseUrl()} target="_blank" data-cy="cy-link-terms-of-use">
              {t('Terms of use')}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-nav-desc">
        <div className="messg-dsk text-white self-end">
          {t(
            'cyber-go-and-cyber-plus+are-distributed-by-cylo-new-zealand-ltd-(“cylo”)-and-underwritten-by-iag-new-zealand-ltd-(“iag”)'
          )}
        </div>
        <div className="messg-dsk cylo-logo justify-self-end">
          <div className="cylo-ami-logo">
            <CyloIconAmiLogo style={{ fontSize: '8rem' }} width={116} height={55} />
          </div>
        </div>
      </div>
      <div className="footer-nav-desc">
        <div className="messg-dsk text-white">
          <div>
            <Trans
              i18nKey="this-information-is-a-general-guide-only-full-details-of-cover-and-a-copy-of-your-policy-documents-is-available-from"
              components={[<Link className="underline text-white" to={selectPolicyWordingUrl()} target="_blank" />]}
            ></Trans>
          </div>
        </div>
        <div className="messg-dsk cylo-partner-logo justify-self-end">
          <CyloIconCyloTrustedPartner style={{ fontSize: '8rem' }} width={116} height={78} />
        </div>
      </div>
      <div className="footer-nav-desc">
        <div className="messg-dsk cylo-logo-mobile justify-center">
          <CyloIconAmiLogo style={{ fontSize: '8rem' }} width={116} height={55} />
          <CyloIconCyloTrustedPartner style={{ fontSize: '8rem' }} width={116} height={78} />
        </div>
      </div>
    </ResponsiveGrid>
  );
};

export default AppFooter;
