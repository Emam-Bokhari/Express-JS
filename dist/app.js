"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// health
app.get("/health", logger, (req, res) => {
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
// example of error handling
const postRouter = express_1.default.Router();
app.use("/", postRouter);
postRouter.get("/posts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        res.status(200).json({
            success: true,
            code: 200,
            message: "Post retrived succssfully ",
            data: data,
        });
    }
    catch (err) {
        res.status(err.status || 500).json({
            success: false,
            code: err.status || 500,
            message: err.message || "Internal Server Error",
            errors: err.errors || null
        });
    }
}));
const profitRouter = express_1.default.Router();
app.use("/", profitRouter);
postRouter.get("/profit", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        res.status(200).json({
            success: true,
            code: 200,
            message: "Retruve profit",
            data: data,
        });
    }
    catch (err) {
        next(err);
    }
}));
// global error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        code: err.status || 500,
        message: err.message || "Internal Server error",
        errors: err.errors || null
    });
});
exports.default = app;
