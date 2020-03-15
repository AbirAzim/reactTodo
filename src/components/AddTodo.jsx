import React, { Component } from 'react'

export class AddTodo extends Component {

    state ={
        title : ''
    }


    onChange = (e) => this.setState({title : e.target.value })

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title : ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className='mb-3'>
                <div className='row'>
                    <div className='col-sm-2'>
                    </div>
                    <div className='col-sm-6'>
                        <input type='text' className='form-control' style={{width: '100%'}} name='title' value={this.state.title} onChange={this.onChange} placeholder='Enter Task'/>
                    </div>
                    <div className='col-sm-2 float-left'>
                        <button type='submit' className='btn btn-success form-control'>Enter</button>
                    </div>
                    <div className='col-sm-2'>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddTodo
