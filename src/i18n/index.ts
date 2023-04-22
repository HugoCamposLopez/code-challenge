import {I18n} from 'i18n-js';
import es_MX from './es-MX.json';

const i18n = new I18n();
i18n.enableFallback = true;
i18n.translations = es_MX; 
i18n.locale = 'es';
i18n.defaultLocale = 'es'
export default i18n;
