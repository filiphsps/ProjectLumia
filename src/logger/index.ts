import * as Analytics from 'expo-firebase-analytics';

const Silly = async (message: string) => {
    if (!message) return null;

    console.debug(message);
    await Analytics.logEvent('log_silly', {
        message
    });
};
const Debug = async (message: string) => {
    if (!message) return null;

    console.debug(message);
    await Analytics.logEvent('log_debug', {
        message
    });
};
const Info = async (message: string) => {
    if (!message) return null;

    console.info(message);
    await Analytics.logEvent('log_info', {
        message
    });
};
const Warn = async (message: string) => {
    if (!message) return null;

    console.warn(message);
    await Analytics.logEvent('log_warn', {
        message
    });
};
const Error = async (message: string) => {
    if (!message) return null;

    console.error(message);
    await Analytics.logEvent('log_err', {
        message
    });
};
const Fatal = async (message: string) => {
    if (!message) return null;

    console.error(message);
    await Analytics.logEvent('log_fatal', {
        message
    });
};

export default {
    Silly,
    Debug,
    Info,
    Warn,
    Error,
    Fatal
};
