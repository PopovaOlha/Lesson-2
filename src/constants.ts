export const VALID_LOGIN = 'Ivan';
export const VALID_PASSWORD = '12345';

export const SUCCESS = {
  message: '😊 Welcome!',
  color: 'green',
};

export const ERROR_IVAN = {
  message: '❌ Incorrect login or password!',
  color: 'blue',
};

export const ERROR_OTHER = {
  message: '❌ Incorrect login or password!',
  color: 'red',
};

export const CLASS_BUSINESS = 'business';
export const CLASS_ECONOMY = 'economy';

export const TICKET_OPTIONS = [
  { value: '', label: 'Select ticket class' },
  { value: CLASS_BUSINESS, label: 'Business Class' },
  { value: CLASS_ECONOMY, label: 'Economy Class' },
];

export const BACKGROUND_IMAGES = {
  [CLASS_BUSINESS]: '/images/business.png',
  [CLASS_ECONOMY]: '/images/cloud.jpg',
};

export const BUSINESS_OPTIONS = {
  newspapers: '📰 Financial Times',
  drinks: '🥃 Cognac',
  snacks: '🧀 Cheese',
};

export const ECONOMY_OPTIONS = {
  beers: ['🍺 Lager', '🍻 IPA', '🍶 Light Beer'],
  chips: '🥔 Potato Chips',
};

export const CORRECT_FEEDBACK = '✅ Good. Well done!';

export const INCORRECT_FEEDBACK = '❌ Incorrect, try again!';
