export const CONFIG = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB: {
        HOST: process.env.DB_HOST || '172.30.30.10',
        USER: process.env.DB_USER || 'vmpc_api',
        PASS: process.env.DB_PASS || 'qwerty',
        BASE: process.env.DB_BASE || 'vmpc',
        PORT: +process.env.DB_PORT || 3306,
    },
};
