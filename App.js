


const parent1 = React.createElement("div", {id: "parent1"}, 
    React.createElement("div", {id: "child1"}, 
        React.createElement("h1", {id: "heading"}, "This is h1 tag! - 1"),
            React.createElement("h2", {id: "heading"}, "This is h2 tag! - 1")));

const parent2 = React.createElement("div", {id: "parent2"}, 
    React.createElement("div", {id: "child2"}, 
        [React.createElement("h1", {id: "heading"}, "This is h1 tag! - 2"),
            React.createElement("h2", {id: "heading"}, "This is h2 tag! - 2")]));



const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(parent1);
root.render(parent2);
console.log(root);