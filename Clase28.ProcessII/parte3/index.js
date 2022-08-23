const { exec, execFile, spawn, fork } = require("child_process");

/*
exec("ls", (error, stdout, stderr) => {
  if (error) {
    console.error("Error:", error);
    return;
  }

  if (stderr) {
    console.error("Stderr", stderr);
  }

  console.log("Resultado", stdout);
});

execFile(__dirname + "/file.sh", (error, stdout, stderr) => {
  if (error) {
    console.error("Error:", error);
    return;
  }

  if (stderr) {
    console.error("Stderr", stderr);
  }

  console.log("Resultado", stdout);
});

const child = spawn("find", ["."]);

child.stdout.on("data", (data) => {
  console.log("stdout: ", data.toString());
});

child.stderr.on("data", (data) => {
  console.error("Stderr:", data);
});

child.on("error", (error) => {
  console.error("Error:", error);
});

child.on("close", (code) => {
  console.log("Child process exited with code: ", code);
});
*/
