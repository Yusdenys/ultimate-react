//import Card, { CardBody } from "./components/Card.tsx";
import List from "./components/List.tsx";
import Index from "./components/Button";
import Card from "./components/Card.tsx";
//import list from "./components/List.tsx";
import Alert from "./components/Alert";
import {useState} from "react";
import Button from "./components/Button";

//
function App(){
    const [product, setProduct] = useState({name: "iPhone", stock: 25});
    const handleClick = () => {
        let newProduct = {...product, name: "Android"}
        setProduct(newProduct);
    };
    return (
        <div>
            <button onClick={handleClick}>Agregar</button>
            <p>{product.name} {product.stock}</p>
        </div>
    )

}

/*

//Uso de useState para mantener el valor de las variables
function App(){
    const [count, setCount] = useState(0);
    const [sent, setSent] = useState(false);
    const handleClick = () => {
        setCount(count + 1);
        setSent(true)
        console.log("Handle Click...", count, sent);
    };
    return <button onClick={handleClick}>Enviar</button>
}
*/


/*
function App(){
    const [sent, setSent] = useState(false);
    const handleClick = () => setSent(true);
    return (
        <Button sent={sent} onClick={handleClick}>
            Enviar
        </Button>
    )
}
*/

/*
function App(){
    const [data, setData] = useState(["Goku", "Tanjiro", "Chanchito feliz"]);

    /*
    const [isLoading, setIsLoading ] = useState(false);
    const handleClick = () => setIsLoading(!isLoading);

    const list: string [] = ["Goku", "Tanjiro", "Chanchito feliz"];
    const handleSelect = (elemento: string) => {
        console.log("imprimiendo", elemento);
    };

    const  contenido = list.length !== 0 &&  (
        <List data={list} onSelect={handleSelect}/>
        );

    return (
        <Card>
            <CardBody title="Hola Mundo" text="Este es el texto"/>
            {list.length !== 0 ? (
                <List data={list} onSelect={handleSelect}/>
            ) : 'No hay contenido'}
            <Index isLoading={isLoading} onClick={handleClick}>Hola Mundo</Index>
        </Card>
    )
    */

    /*
    const addMinion = () => setData([...data, "Minion"]);
    const removeMinion = () => setData(data.slice(0, -1));
    return (
        <Card>
            <Index isLoading={true} onClick={addMinion}>Agregar</Index>
            <Index isLoading={false} onClick={removeMinion}>Remove</Index>
            <List data={data} />
        </Card>
    )


}
*/
/*
function App(){
    const [status, setStatus] = useState(true);
    const toggleStatus = () => setStatus(!status);
    return (
        <Alert status={status} onClick={toggleStatus}>
            Alert!
        </Alert>
    )
}
*/



export default App;
