const fs = require('fs');

const config = JSON.parse(fs.readFileSync('pool_config.json', 'utf8'));

function checkPoolHealth(activeCount, maxLimit, threshold) {
    console.log(`Checking Connection Pool Health (${config.poolName}) `);
    console.log(`Active Connections : ${activeCount} / ${maxLimit}`);

    const utilization = (activeCount/maxLimit) * 100;

    console.log(`Pool Utilization: ${utilization.toFixed(1)}%`);

    if(utilization >= threshold) {
        console.log(`ALERT: Pool utilization has been breached the ${threshold}% threshold! Exhaustion rish high.`);
        return {status: "WARNING", utilization};
    }

    console.log("STATUS: Pool health is nominal. Adequate connection slots available.");
    return {status: "HEALTHY", utilization};
}

checkPoolHealth(2, config.maxConnections, config.warningThresholdPercent);
checkPoolHealth(4, config.maxConnections, config.warningThresholdPercent);