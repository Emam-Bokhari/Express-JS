"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
// health
app.get("/health", (req, res) => {
    res.send("Server is running...");
});
// example of path paramiters
app.get("/users/:userId", (req, res) => {
    const userId = req.params;
    console.log(userId);
    console.log(req.params.userId);
    res.json({
        success: true,
        code: 200,
    });
});
// example of multiple path parameters
app.get("/products/:productId/:subProductId", (req, res) => {
    const productId = req.params;
    console.log(productId);
    res.json({
        success: true,
        code: 200,
    });
});
// example of post req
app.post("/product", (req, res) => {
    const data = req.body;
    console.log(data);
    res.status(200).json({
        message: "Success",
        code: 200,
        data: data,
    });
});
// example of query parameters
app.get("/orders", (req, res) => {
    console.log(req.query);
    res.json({
        success: true,
        code: 200,
    });
});
// example of Router
const salaryRouter = express_1.default.Router();
app.use("/", salaryRouter);
salaryRouter.get("/salary", (req, res) => {
    const data = req.body;
    res.status(200).json({
        message: "success",
        code: 200,
        data: data,
    });
});
exports.default = app;
