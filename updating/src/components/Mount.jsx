import React, { Component } from 'react'
/* Updating Phase =>5 Method
1=>getDerivedStateFromProps
2=>shouldComponentUpdate
3=>render
4=>getSnapshotBeforeUpdate
5=>componentDidUpdate 

1 st and 3rd method is also part of updating phase which we use in Mounting phase
2=>ShouldComponentUpdate() is run before rerendering. If we return true then render run if we return false then render not run
4=>getSnapshotBeforeUpdate() This method use for prevprops and prevstate and this method run after rerender
5=>component did update method run after getsnapshot() in this methos same data occur prevprops and prevstate and which we return from getsnapshotbeforeupdate
*/
export default class Mount extends Component {
    constructor() {
        super()
        this.state = {
            number: 50
        }
        console.log("constructor")
    }
    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps")
        return true
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevprops, prevstate) {
        console.log('getSnapshotBeforeUpdate')
        console.log(prevprops)
        console.log(prevstate)
        return "snapshot"
    }
    componentDidUpdate(prevprops, prevstate, snapshot) {
        console.log('componentDidUpdate')
        console.log(prevprops)
        console.log(prevstate)
        console.log("Which return From getSnaphot method", snapshot)
    }
    render() {
        console.log("render")
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={() => this.setState({ number: this.state.number + 1 })}>Change Value</button>
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
}
