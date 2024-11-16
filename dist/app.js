"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
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
// example of query parameters
app.get("/orders", (req, res) => {
    console.log(req.query);
    res.json({
        success: true,
        code: 200,
    });
});
exports.default = app;
