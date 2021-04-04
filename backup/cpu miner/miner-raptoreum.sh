#!/bin/sh
#
while [ 1 ]; do
./cpuminer-sse2 -a gr -o stratum+tcps://stratum-eu.rplant.xyz:17056 -u WALLET.WORKER_NAME
sleep 5
done
