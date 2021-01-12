module.exports = {
    "category": "sensor",
    "description": "check sensors",
    "tests": [
        {
            "name": "Check sensor firmware",
            "route": "/sensor/firmware-matches-base-station-version"
        },
        {
            "name": "Check sensor hardware",
            "route": "/sensor/check-hardware"
        },
        {
            "name": "Check sensor calibration",
            "route": "/sensor/check-calibration"
        },
        {
            "name": "Run test measurement",
            "route": "/sensor/measurement/test"
        },
        {
            "name": "Test sensor battery",
            "route": "/sensor/battery/test"
        }
    ]
}
