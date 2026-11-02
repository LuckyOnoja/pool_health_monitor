Database Connection Pool Health Check and Monitoring Utility Audit Report

1. Executive Summary
- Target System: Relational Database Connection pool
- Objective: Monitor active vs idle connection metrics and trigger automated alerts when pool utlization breaches critical exhaustion thresholds.

2. Pool Health Metrics Result : 

Checking Connection Pool Health (postgres-primary-pool) 
Active Connections : 2 / 5
Pool Utilization: 40.0%
STATUS: Pool health is nominal. Adequate connection slots available.
Checking Connection Pool Health (postgres-primary-pool) 
Active Connections : 4 / 5
Pool Utilization: 80.0%
ALERT: Pool utilization has been breached the 80% threshold! Exhaustion rish high.

3. Conclusion
- The health check utility successfully tracked active lease counts and flagged high pool utilization before full connection exhaustion occurred.