import express, { Request, Response } from "express";
const app = express();

// health
app.get("/health", (req: Request, res: Response) => {
    res.send("Server is running...")
})

// example of query params
app.get("/users/:userId",(req:Request,res:Response)=>{
    const userId=req.params;
    console.log(userId);
    console.log(req.params.userId)
    res.json({
        success:true,
        code:200,
    })
})

export default app;