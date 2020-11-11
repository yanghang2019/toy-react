import {createElement,render,Component} from "./toy-react"

// for(let i of [1,2,3]) {
//     console.log(i);
// }

class MyComponent extends Component{

    render() {
        return <div>
            <h1>my component</h1>
            {
                this.children
            }
        </div>
    }
}




// window.a = <div id="a" class="c">
//     <div>a</div>
//     <div>b</div>
//     <div></div>

// </div>

// document.body.appendChild(<MyComponent id="a" class="c">
//     <div>a</div>
//     <div>b</div>
//     <div></div>

// </MyComponent>)

render(<MyComponent id="a" class="c">
    <div>a</div>
    <div>b</div>
    <div></div>

</MyComponent>,document.body)