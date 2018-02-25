import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
    class Authentication extends Component{
        static contextTypes = {
            router: React.PropTypes.object
        }
        //https://reactjs.org/docs/context.html
        //context is similar to props
        //props are passed from component to component (parent to child)
        //context can skip components and gets you access 

        componentWillMount(){
            if (!this.props.authenticated){
                this.context.router.push("/");
            }
        }

        componentWillUpdate(nextProps){
            if (!nextProps.authenticated){
                this.context.router.push("/");
            }
        }

        render(){
            //console.log('Rendering ', ComposedComponent);
            //console.log(this.context);
            return <ComposedComponent {...this.props}/>
        }
    }

    function mapStateProps(state) {
        return { authenticated: state.authenticated }
    }

    return connect(mapStateProps) (Authentication);
}
