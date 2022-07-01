import express from "express";
import { Request, Response, Application } from 'express'
import { isRegularExpressionLiteral } from "../node_modules/typescript/lib/typescript";
import Perimetro from "./perimetro";
import Superficie from "./superficie";

const app: Application = express();

app.get("/cuadrado", (req: Request, res: Response): void => {
    const query = req.query
    const resultado = query.operacion === 'perimetro' ? new Perimetro(Number(query.dato)).cuadrado() : new Superficie(Number(query.dato)).cuadrado()
    res.json({
        operation: query.operacion,
        entryParams: query.dato,
        figura: 'Cuadrado',
        resultado
    })
});

app.get("/circulo", (req: Request, res: Response): void => {
    const query = req.query
    const resultado = query.operacion === 'perimetro' ? new Perimetro(Number(query.dato)).circulo() : new Superficie(Number(query.dato)).circulo()
    res.json({
        operation: query.operacion,
        entryParams: query.dato,
        figura: 'Circulo',
        resultado
    })
});

app.get("/rectangulo", (req: Request, res: Response): void => {
    const query = req.query
    const resultado = query.operacion === 'perimetro' ? new Perimetro(Number(query.dato), Number(query.datoDos)).rectangulo() : new Superficie(Number(query.dato), Number(query.datoDos)).rectangulo()
    res.json({
        operation: query.operacion,
        entryParams: [query.dato, query.datoDos],
        figura: 'Rectangulo',
        resultado
    })
});

const PORT: number = 8080;
app.listen(PORT, (): void => {
 console.log(`conectado al puerto: ${PORT}`);
});
