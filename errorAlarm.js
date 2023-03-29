const getTime = () => new Date().toISOString().substr(0, 16);
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
let startTime = getTime();
let logCalls = 0;

const logError = (error) => {
    logCalls++;
    console.log(`FUNCTION TIME: ${startTime}`);
    console.log(`TIME NOW:  ${getTime()}`);
    console.log(`LogCalls: ${logCalls}`);

    if (logCalls > 9 && (startTime !== getTime())) {
        mockEmailSender();
        startTime = getTime();
        logCalls = 0;
    }
    console.log(error);
    console.log(`\n`);

};

const errorAlarm = async () => {
    for (let i = 0; i < 65; i++) {
        logError(`THIS IS THE ERROR TO SAVE`);
        await sleep(1000);
    }
};



const mockEmailSender = () => console.log(` AFTER ONE MINUTE, SEND EMAIL TO NOTIFY! `);

errorAlarm();