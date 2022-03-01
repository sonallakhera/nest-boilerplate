const DEFAULT_ENV = 'development';

const env = (() => {
    const { argv } = process;
    const envArgIndex = argv.indexOf('--env');
    if (envArgIndex === -1) return;
    return argv[envArgIndex + 1];
})() || DEFAULT_ENV;

module.exports = {
    apps: [
        {
            name: 'nest-boilerplate',
            script: './dist/main.js',
            instance_var: 'INSTANCE_ID',
            exec_mode: 'cluster',
            instances: env === 'production' ? 4 : 1,
            env_production: {
                APP_ENV: 'PRODUCTION',
                NODE_ENV: 'production',
                SWAGGER_ALLOWED: true,
            },
            env_development: {
                APP_ENV: 'DEV',
                NODE_ENV: 'development',
                SWAGGER_ALLOWED: true
            },
        },
    ],
};