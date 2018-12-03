import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

const NavItems = ({title, user}) => {
    const items = [
        {
            type:'navItem',
            icon:'home',
            text:'Home',
            link:'/',
            restricted:false
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'Register',
            link:'/user/register',
            restricted:false,
            exclude:true
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'Login',
            link:'/login',
            restricted:false,
            exclude:true
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'Logout',
            link:'/user/logout',
            restricted:true
        }
    ]

    const element = (item,i) => (
        <div key={i} className={item.type}>
            <Link to={item.link}>
                <FontAwesome name={item.icon}/>
                {item.text}
            </Link>
        </div>
    )

    const showItems = () => (
      items.map((item,i)=>{
        if(user.login && user.login.status) {
            return !item.exclude ?
                element(item,i)
            :null
        } else {
            return !item.restricted ?
                element(item,i)
            :null
        }
      })
    )

    return (
        <div className="navigations">
            <h5>{title}</h5>
            {showItems()}
        </div>
    );
};

function mapStateToProps(state){
    console.log(state.user)
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(NavItems)