<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'angularpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '1PoodlePoo89');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '?x`#(DN|&T~8aKFpdNzDQ-4miaXD]|O~uAbP:N-)2VRG08ui1&N?K.+srflkZ90e');
define('SECURE_AUTH_KEY',  'nH|afsUU`m0$i|T4q 0iA;nPXty</[OLG=?*tFuoX;<DpTDiZ:GP#AR6[b28Loay');
define('LOGGED_IN_KEY',    '*(.JllVH,1&oW`<k4e1lSpk,qoet-L/k-?hIr+)0SAx{LR:.GW&Fqj6{)<OP!I{?');
define('NONCE_KEY',        '_>-uyt>T&[]>dgdo&*--.wBUE%28sA(/EQ/`8GLo<mq-K35~<33g3:&&YRIo.T|$');
define('AUTH_SALT',        'Wy8#?^_/1|&4chv`QO~<M(l[u+@sj&)K24pm?@J#+q[Be_;U0oUFFe9-O,,}d7q0');
define('SECURE_AUTH_SALT', 'H[`KB|;h-GuKex3aL)WbUz*r=vrY=VD&iNayrdZB4];dagXT^eLQo{IT#vyb -GP');
define('LOGGED_IN_SALT',   'q2zfFb]cIYdh%1F=+|r+om#IbOfMhIZ!OJ}^Vhmh%ESP/}mck>|PE|m^6/R!H%0b');
define('NONCE_SALT',       'l3,ah2`@0ITIV]Rz:e_s-Y/c93VRT}6/|Z7^_-4Ur{nsD<AbK-Q2owKE? u1>-+k');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_angularpress';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
