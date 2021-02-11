
const http=require('http');

const header={'Content-Type': 'application/json'};

const student =[{
    name:"Juan Pablo",
    lastName:"Acosta Betancur",
    profession:"Mechatronic engineer",
    },
    {
    name:"Harvy Arley",
    lastName:"Gil Bonilla",
    profession:"Engineer"
    },
    {
    name:"Daniela",
    lastName:"Calle",
    profession:"Engineer",
    },
    {
    name:"Juan",
    lastName:"Lopera",
    profession:"Engineer",
    },
    {
    name:"ALejandro",
    lastName:"Becerra",
    profession:"Engineer",
    },
    {
    name:"Brianith",
    lastName:"Navarro",
    profession:"Engineer",
    },
    {
    name:"Cristian",
    lastName:"Moreno",
    profession:"Engineer",
    },
    {
    name:"Cristopher",
    lastName:"Rojas",
    profession:"Engineer",
    },
    {
    name:"Daniel",
    lastName:"Alvarez",
    profession:"Engineer",
    },
    {
    name:"Diana",
    lastName:"Rojas",
    profession:"Engineer",
    },
    {
    name:"Isabella",
    lastName:"Serna",
    profession:"Engineer",
    },
]

const app=http.createServer((req,res)=>{
    res.writeHead(200,header)
    res.end(JSON.stringify(student))
})

app.listen(5000);

console.log('Server running',5000);
