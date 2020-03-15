import React, { Component } from 'react'
import PropTypes from "prop-types";

export class TodoItem extends Component {
    getStyle = ()=>{
        return {
            background: 'black',
            color: 'white',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed === true ? 'line-through' : 'none'
        }
    }

    render() {
        const {id , title } = this.props.todo
        return (
            <div style={this.getStyle()} className='row'>
                <div className='col-sm-2'>
                    <input type='checkbox' className='text-danger' onChange={this.props.markComplete.bind(this, id )}/>
                </div>
                <div className='col-sm-7'>
                    <p className='text-primary text-center'>{title}</p>
                </div>
                <div className='col-sm-3'>
                    <button className='btn btn-danger float-right' onClick={this.props.deleteItem.bind(this, id)}>Delete</button>
                </div>   
            </div>
        )
    }
}

//propTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
