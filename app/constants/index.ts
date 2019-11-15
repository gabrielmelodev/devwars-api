// The minimum and maximum length a new/existing users username must respect for
// the user to be registered or authorized with the site.
export const USERNAME_MIN_LENGTH = 5;
export const USERNAME_MAX_LENGTH = 28;

// Username limits in regards for twitch when processing requests that is directly related to the
// twitch username. e.g updating twitch coins.
export const TWITCH_USERNAME_MIN_LENGTH = 4;
export const TWITCH_USERNAME_MAX_LENGTH = 25;

// The minimum and maximum length a new/existing users password must respect for
// the user to be registered or authorized with the site.
export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 128;

// The minimum and maximum number of coins that a user can have assigned during the statistics
// generation/creation.
export const STATS_COINS_MIN_AMOUNT = 0;
export const STATS_COINS_MAX_AMOUNT = Infinity;

// The minimum and maximum xp that a user can have at anyone time during the statistics
// generation/creation.
export const STATS_XP_MIN_AMOUNT = 0;
export const STATS_XP_MAX_AMOUNT = Infinity;

// The minimum and maximum level that a user can have at anyone time during the statistics
// generation/creation.
export const STATS_LEVEL_MIN_AMOUNT = 0;
export const STATS_LEVEL_MAX_AMOUNT = Infinity;

// Upper and lower limits of adding and updating twitch coins on a given twitch users account. The
// limits are high but ensuring limits removes the chance of something going wrong with int32 max,
// etc.
export const TWITCH_COINS_MIN_UPDATE = -1000000;
export const TWITCH_COINS_MAX_UPDATE = 1000000;
