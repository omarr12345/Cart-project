import React from 'react'
import CartItem from '../Components/CartItem';
import { connect } from 'react-redux';

class Cart extends React.Component {


    render() {

        return (


            <div className="container">
                <div className="row">
                    {this.props.items.map(item =>
                        <div className='col-md-3'>
                            <CartItem item={item} key={item.id} />
                        </div>
                    )

                    }



                </div>
                <br />
                <div><h3>Total:{this.props.total}</h3></div>
                <button className='primary btn-primary'>Pay Now !</button>

            </div>
        )

    }


}



const mapStateToProps = (state) => {
    return {

        items: state.cart.product,
        total: state.cart.product.reduce((total, item) =>
            total + item.price * item.quantity, 0)

    }


}




export default connect(mapStateToProps)(Cart);