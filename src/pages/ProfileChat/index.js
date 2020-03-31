import React from 'react';

import { FaUserCircle } from 'react-icons/fa';
import { FaHistory } from 'react-icons/fa';
import { FaCommentAlt } from 'react-icons/fa';
import { FaEllipsisV } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';


import './style.css';

export default class ProfileChat extends React.Component{
    render(){
        return(
            <div className="container profilechat-container">
                <div className="row">
                    <div className="col-4">
                        <div className="row menu">
                            <ul>
                                <li> <FaUserCircle size={35}/> </li>
                                <li> <FaHistory size={25} className="icon1"/> </li>
                                <li> <FaCommentAlt size={25} className="icon1"/> </li>
                                <li> <FaEllipsisV size={25} className="icon1"/> </li>
                            </ul>
                        </div>

                        <div className="row search">
                            {/* <button> <FaSearch/> </button> */}
                            <input type="text" placeholder="Search a Message" className="form-control"/>
                        </div>

                        <div className="row contact-list">
                            
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="row menu d-flex justify-content-end">
                            <FaEllipsisV size={25} className="icon1" style={{marginRight: "15"}}/>
                        </div>

                        <div className="row message">
                            
                        </div>

                        <div className="row footer">
                            <div className="col-10">
                                <textarea placeholder="Send a message to your friend!"></textarea>
                            </div>

                            <div className="col-2">
                                <button> <FaPaperPlane size={30}/> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}