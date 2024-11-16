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
// example of query params
app.get("/users/:userId", (req, res) => {
    const userId = req.params;
    console.log(userId);
    console.log(req.params.userId);
    res.json({
        success: true,
        code: 200,
    });
});
exports.default = app;
