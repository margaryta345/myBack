import express from "express";
import mongoose from "mongoose";
import * as UserController from "./controllers/UserController.js";
import { registerValidation, loginValidation } from "./validations.js";
import checkAuth from "./utils/checkAuth.js";
import * as LessonsController from "./controllers/LessonsController.js";
import * as TestController from "./controllers/TestController.js";
import { handleValidationErrors } from "./utils/handleValidationErrors.js";
//щоб дозволити домену робити запрос
import cors from "cors";
import {
  getFifth,
  getFirst,
  getFoutrh,
  getSecond,
  getThird,
} from "./controllers/ProgramController.js";
mongoose
  .connect("mongodb://localhost:27017/project")
  .then(() => console.log("Db oK"))
  .catch((err) => console.log("DB error"));

const app = express();

//шоб express вмів читати json запроси
app.use(express.json());
app.use(cors());
//реєстрація
app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);
//логін
app.post(
  "/auth/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
//про себе
app.get("/auth/me", checkAuth, UserController.getMe);
//усі уроки
app.get("/lessons", LessonsController.getAll);
//один урок
app.get("/lessons/:id", LessonsController.getOne);
//тест завдання усі
app.get("/test", TestController.getAll);

app.get("/test1", TestController.getAll1);

app.get("/test2", TestController.getAll2);

app.get("/test3", TestController.getAll3);

app.get("/test4", TestController.getAll4);

app.get("/test5", TestController.getAll5);

app.get("/test6", TestController.getAll6);

app.get("/test7", TestController.getAll7);
//база даних усіх тестів
//база даних практичних завдань
//продумати як буде тестування правильних відповідей для тестів та практичних
//відслідковування прогресу
app.patch("/test-start", checkAuth, UserController.PutStartResult);
// app.post("/done1", checkAuth, DoneController.updateDo);
// app.get("/done1/:id/:lessonId", checkAuth, DoneController.getOne);

app.post("/done", checkAuth, UserController.updateDo);
app.get("/done", checkAuth, UserController.getOne);
app.get("/doneAll", checkAuth, UserController.getAll);

app.post("/task1", checkAuth, getFirst);
app.post("/task2", checkAuth, getSecond);
app.post("/task3", checkAuth, getThird);
app.post("/task4", checkAuth, getFoutrh);
app.post("/task5", checkAuth, getFifth);

app.listen(5000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("ok");
});
