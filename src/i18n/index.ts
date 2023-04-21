import {I18n} from 'i18n-js';
// i18n
import es_MX from './es-MX.json';
// Set the key-value pairs for the different languages you want to support.

const i18n = new I18n({es_MX});
// Autocomplete settings
i18n.enableFallback = true;
i18n.translations = es_MX; // establece todas las traducciones
i18n.locale = 'es';
export default i18n;
