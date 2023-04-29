import express,{ Application, Request, Response } from "express"
class App {
    //Atributos
    public app: any
    private server: any
    constructor(){
        this.app= express()
        this.app.use(express.json())
        this.routes()
    }
    private routes():void{
        this.app.get(
            "/",
            (req:Request, res:Response)=>{
                res.send("Bienvenidos a Typescript")
            }
        )
    }
    public start():void{
        this.server=this.app.listen(
            3000, 
            ()=>{console.log("El servidor está escuchcando en el puerto 3000")}
        )

    }
    public close():void{
        this.server.close()

    }
}
export default App