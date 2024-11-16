import express, { Request, Response } from "express";
const app = express();

// health
app.get("/health", (req: Request, res: Response) => {
    res.send("Server is running...")
})

export default app;