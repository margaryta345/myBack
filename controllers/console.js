const { spawn } = import("child_process");
const childPython = spawn("python", [--version]);
