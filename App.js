const parant = React.createElement("div",
     {id:"parant"}, 
     React.createElement("div", {id:"child"},
          [[React.createElement("h1",{id:"child-h1"},"child-1"), React.createElement('h2',{},'Child-2')],
     [React.createElement("h1",{id:"child-h1"},"child-1"), React.createElement('h2',{},'Child-2')]]))
// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React Element")
console.log(parant)
const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(root)
root.render(parant)