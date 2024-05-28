//чи можна повертати якусь важливу інфу
import jwt from "jsonwebtoken";

export default (req, res, next) => {
  //перевіряємо чи є токен і парсим його
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
  if (token) {
    try {
      //розшифровуємо токен токен-ключ
      const decode = jwt.verify(token, "secret123");
      //передаємо айді користувача і пришиваємо до req
      req.userId = decode._id;
      next();
    } catch (err) {
      return res.status(403).json({ message: "Доступ заборонено" });
    }
  } else {
    return res.status(403).json({
      message: "Доступ заборонено",
    });
  }
};
