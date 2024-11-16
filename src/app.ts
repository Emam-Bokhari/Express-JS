import express, { NextFunction, Request, Response } from "express";
const app = express();

// parser
app.use(express.json())

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname);
    next();
}

// health
app.get("/health", logger, (req: Request, res: Response) => {
    res.send("Server is running...")
})

// example of path paramiters
app.get("/users/:userId", (req: Request, res: Response) => {
    const userId = req.params;
    console.log(userId);
    console.log(req.params.userId)
    res.json({
        success: true,
        code: 200,
    })
})

// example of multiple path parameters
app.get("/products/:productId/:subProductId", (req: Request, res: Response) => {
    const productId = req.params;
    console.log(productId);
    res.json({
        success: true,
        code: 200,
    })
})

// example of post req
app.post("/product", (req: Request, res: Response) => {
    const data = req.body;
    console.log(data);
    res.status(200).json({
        message: "Success",
        code: 200,
        data: data,
    })
})

// example of query parameters
app.get("/orders", (req: Request, res: Response) => {
    console.log(req.query);
    res.json({
        success: true,
        code: 200,
    })
})

// example of Router
const salaryRouter = express.Router();
app.use("/", salaryRouter);

salaryRouter.get("/salary", (req: Request, res: Response) => {
    const data = req.body;
    res.status(200).json({
        message: "success",
        code: 200,
        data: data,
    })
})

// example of error handling
const postRouter = express.Router();
app.use("/", postRouter);

postRouter.get("/posts", async (req: Request, res: Response) => {
    try {
        const data = req.body;
        res.status(200).json({
            success: true,
            code: 200,
            message: "Post retrived succssfully ",
            data: data,
        })
    } catch (err: any) {
        res.status(err.status || 500).json({
            success: false,
            code: err.status || 500,
            message: err.message || "Internal Server Error",
            errors: err.errors || null
        })
    }
})

const profitRouter = express.Router();
app.use("/", profitRouter);

postRouter.get("/profit", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        res.status(200).json({
            success: true,
            code: 200,
            message: "Retruve profit",
            data: data,
        })
    } catch (err) {
        next(err)
    }
})

// global error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).json({
        success: false,
        code: err.status || 500,
        message: err.message || "Internal Server error",
        errors: err.errors||null
    })
})


export default app;