import type { AllSettings } from '@server/lib/settings';

const migratePacoBranding = (settings: any): AllSettings => {
  if (
    Array.isArray(settings.migrations) &&
    settings.migrations.includes('0009_rebrand_paco')
  ) {
    return settings;
  }

  if (settings.main?.applicationTitle === 'Seerr') {
    settings.main.applicationTitle = 'Paco';
  }

  if (settings.notifications?.agents?.email?.options?.senderName === 'Seerr') {
    settings.notifications.agents.email.options.senderName = 'Paco';
  }

  if (!Array.isArray(settings.migrations)) {
    settings.migrations = [];
  }
  settings.migrations.push('0009_rebrand_paco');

  return settings;
};

export default migratePacoBranding;
