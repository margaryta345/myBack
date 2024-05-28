import { spawn } from "child_process";
import fs from "fs";
import UserModel from "../models/User.js";

function saveDataToFile(data, name) {
  // Шлях до файлу, у який ви хочете зберегти дані
  const filePath = name;

  // Додаємо символ нового рядка після кожного запису
  const dataString = data + "\n";

  fs.appendFile(filePath, dataString, (err) => {
    if (err) {
      console.error("Помилка запису у файл:", err);
      return;
    }
    console.log("Дані успішно збережено у файлі.");
  });
}

export const getFirst = async (req, res) => {
  const requestData = req.body.requestData;
  const user = await UserModel.findById(req.userId);
  saveDataToFile(requestData, "first.py");
  const childPython = spawn("python", ["test1.py"]);
  let stdoutData = "";
  let stderrData = "";

  childPython.stdout.on("data", (data) => {
    stdoutData += data;
  });

  childPython.stderr.on("data", (data) => {
    stderrData += data;
  });

  childPython.on("close", async (code) => {
    const lines = stdoutData.split("\r\n");
    const lastLineIndex = lines.length - 1;
    const lastLine = lines[lines.length - 2];
    lines.splice(lastLineIndex - 1, 2);
    console.log(lines);
    const linesError = stderrData
      .split("\n")
      .filter((line) => !line.includes("C:\\Users\\shche\\Desktop\\back\\"));

    console.log(stdoutData, stderrData);
    const isLinesErrorSingleEmptyString =
      Array.isArray(linesError) &&
      linesError.length === 1 &&
      linesError[0] === "";

    if (!user.done["40"] || lastLine > user.done["40"]) {
      await UserModel.findOneAndUpdate(
        { _id: req.userId },
        { $set: { [`done.40`]: lastLine } },
        { new: true }
      );

      res.status(200).json({
        stdout: lines,
        stderr: isLinesErrorSingleEmptyString ? 0 : linesError,
      });
    } else {
      res.status(200).json({
        stdout: lines,
        stderr: isLinesErrorSingleEmptyString ? 0 : linesError,
      });
    }
    fs.writeFile("first.py", "", (err) => {
      if (err) throw err;
      console.log("File is created successfully.");
    });
  });
};

export const getSecond = async (req, res) => {
  const requestData = req.body.requestData;
  const user = await UserModel.findById(req.userId);
  saveDataToFile(requestData, "second.py");
  const childPython = spawn("python", ["test2.py"]);
  let stdoutData = "";
  let stderrData = "";

  childPython.stdout.on("data", (data) => {
    stdoutData += data;
  });

  childPython.stderr.on("data", (data) => {
    stderrData += data;
  });

  childPython.on("close", async (code) => {
    const lines = stdoutData.split("\r\n");
    const lastLineIndex = lines.length - 1;
    const lastLine = lines[lines.length - 2];
    lines.splice(lastLineIndex - 1, 2);
    console.log(lines);
    const linesError = stderrData
      .split("\n")
      .filter((line) => !line.includes("C:\\Users\\shche\\Desktop\\back\\"));

    console.log(stdoutData, stderrData);
    const isLinesErrorSingleEmptyString =
      Array.isArray(linesError) &&
      linesError.length === 1 &&
      linesError[0] === "";

    if (!user.done["41"] || lastLine > user.done["41"]) {
      await UserModel.findOneAndUpdate(
        { _id: req.userId },
        { $set: { [`done.41`]: lastLine } },
        { new: true }
      );

      res.status(200).json({
        stdout: lines,
        stderr: isLinesErrorSingleEmptyString ? 0 : linesError,
      });
    } else {
      res.status(200).json({
        stdout: lines,
        stderr: isLinesErrorSingleEmptyString ? 0 : linesError,
      });
    }
    fs.writeFile("second.py", "", (err) => {
      if (err) throw err;
      console.log("File is created successfully.");
    });
  });
};

export const getThird = async (req, res) => {
  const requestData = req.body.requestData;
  const user = await UserModel.findById(req.userId);
  saveDataToFile(requestData, "third.py");
  const childPython = spawn("python", ["test3.py"]);
  let stdoutData = "";
  let stderrData = "";

  childPython.stdout.on("data", (data) => {
    stdoutData += data;
  });

  childPython.stderr.on("data", (data) => {
    stderrData += data;
  });

  childPython.on("close", async (code) => {
    const lines = stdoutData.split("\r\n");
    const lastLineIndex = lines.length - 1;
    const lastLine = lines[lines.length - 2];
    lines.splice(lastLineIndex - 1, 2);
    console.log(lines);
    const linesError = stderrData
      .split("\n")
      .filter((line) => !line.includes("C:\\Users\\shche\\Desktop\\back\\"));

    console.log(stdoutData, stderrData);
    const isLinesErrorSingleEmptyString =
      Array.isArray(linesError) &&
      linesError.length === 1 &&
      linesError[0] === "";

    if (!user.done["42"] || lastLine > user.done["42"]) {
      await UserModel.findOneAndUpdate(
        { _id: req.userId },
        { $set: { [`done.42`]: lastLine } },
        { new: true }
      );

      res.status(200).json({
        stdout: lines,
        stderr: isLinesErrorSingleEmptyString ? 0 : linesError,
      });
    } else {
      res.status(200).json({
        stdout: lines,
        stderr: isLinesErrorSingleEmptyString ? 0 : linesError,
      });
    }
    fs.writeFile("third.py", "", (err) => {
      if (err) throw err;
      console.log("File is created successfully.");
    });
  });
};

export const getFoutrh = async (req, res) => {
  const requestData = req.body.requestData;
  const user = await UserModel.findById(req.userId);
  saveDataToFile(requestData, "fourth.py");
  const childPython = spawn("python", ["test4.py"]);
  let stdoutData = "";
  let stderrData = "";

  childPython.stdout.on("data", (data) => {
    stdoutData += data;
  });

  childPython.stderr.on("data", (data) => {
    stderrData += data;
  });

  childPython.on("close", async (code) => {
    const lines = stdoutData.split("\r\n");
    const lastLineIndex = lines.length - 1;
    const lastLine = lines[lines.length - 2];
    lines.splice(lastLineIndex - 1, 2);
    console.log(lines);
    const linesError = stderrData
      .split("\n")
      .filter((line) => !line.includes("C:\\Users\\shche\\Desktop\\back\\"));

    console.log(stdoutData, stderrData);
    const isLinesErrorSingleEmptyString =
      Array.isArray(linesError) &&
      linesError.length === 1 &&
      linesError[0] === "";

    if (!user.done["43"] || lastLine > user.done["43"]) {
      await UserModel.findOneAndUpdate(
        { _id: req.userId },
        { $set: { [`done.43`]: lastLine } },
        { new: true }
      );

      res.status(200).json({
        stdout: lines,
        stderr: isLinesErrorSingleEmptyString ? 0 : linesError,
      });
    } else {
      res.status(200).json({
        stdout: lines,
        stderr: isLinesErrorSingleEmptyString ? 0 : linesError,
      });
    }
    fs.writeFile("fourth.py", "", (err) => {
      if (err) throw err;
      console.log("File is created successfully.");
    });
  });
};

export const getFifth = async (req, res) => {
  const requestData = req.body.requestData;
  const user = await UserModel.findById(req.userId);
  saveDataToFile(requestData, "fifth.py");
  const childPython = spawn("python", ["test5.py"]);
  let stdoutData = "";
  let stderrData = "";

  childPython.stdout.on("data", (data) => {
    stdoutData += data;
  });

  childPython.stderr.on("data", (data) => {
    stderrData += data;
  });

  childPython.on("close", async (code) => {
    const lines = stdoutData.split("\r\n");
    const lastLineIndex = lines.length - 1;
    const lastLine = lines[lines.length - 2];
    lines.splice(lastLineIndex - 1, 2);
    console.log(lines);
    const linesError = stderrData
      .split("\n")
      .filter((line) => !line.includes("C:\\Users\\shche\\Desktop\\back\\"));

    console.log(stdoutData, stderrData);
    const isLinesErrorSingleEmptyString =
      Array.isArray(linesError) &&
      linesError.length === 1 &&
      linesError[0] === "";

    if (!user.done["44"] || lastLine > user.done["44"]) {
      await UserModel.findOneAndUpdate(
        { _id: req.userId },
        { $set: { [`done.44`]: lastLine } },
        { new: true }
      );

      res.status(200).json({
        stdout: lines,
        stderr: isLinesErrorSingleEmptyString ? 0 : linesError,
      });
    } else {
      res.status(200).json({
        stdout: lines,
        stderr: isLinesErrorSingleEmptyString ? 0 : linesError,
      });
    }
    fs.writeFile("fifth.py", "", (err) => {
      if (err) throw err;
      console.log("File is created successfully.");
    });
  });
};
