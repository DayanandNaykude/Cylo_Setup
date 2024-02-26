import { selectContactUsPhone, useAppSelector } from '@ami/shared';
import { BUSINESS_INSURANCE_URL } from '@cylo/common';
import { ResponsiveGrid } from '@cylo/ui/components';
import { CyloIconAmiLogo } from '@cylo/ui/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  const { t } = useTranslation();
  const contactUsPhone = useAppSelector(selectContactUsPhone);

  return (
    <ResponsiveGrid className="app-header">
      <div className="grid-cols-1">
        <Link to={BUSINESS_INSURANCE_URL} target="_blank">
          <CyloIconAmiLogo className="ami-logo" width={116} height={55} />
        </Link>
      </div>
      <div className="right-align">
        <div className="contact-section">
          <div className="cs-1">{t('Need help?')}</div>
          <div className="call-us">{t('call-us', { phone: contactUsPhone })}</div>
          <div className="cs-2">{t('Monday to Friday, 9am-5pm')}</div>
        </div>
        {/*<div className="phone-section">*/}
        {/*  <CyloIconPhoneOutline style={{ fontSize: '1.5rem' }} />*/}
        {/*</div>*/}
      </div>
    </ResponsiveGrid>
  );
};

export default AppHeader;
