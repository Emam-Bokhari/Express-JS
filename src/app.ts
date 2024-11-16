import express, { Request, Response } from "express";
const app = express();

// parser
app.use(express.json())

// health
app.get("/health", (req: Request, res: Response) => {
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


export default app;