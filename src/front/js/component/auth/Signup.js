import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";

export const Signup = ({ hideModal, modalRef }) => {
  
  const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const [ show, setShow ] = useState(false);
    const [ name, setName ] = useState('');
    const [ lastname, setLastname ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

  const handleRegister = async(event) => {
		event. preventDefault();
		setShow(false);
		const response = await actions.register({
			email: email, 
			password: password
		});

		if(response === true){
			navigate("/login");
		}
		else{
		 setShow(true);
		} 
	}

	return <>
    <div className="modal fade" 
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2" 
        tabindex="-1"
        ref={modalRef}>
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-body">  
                    {show && 
                    <div className="alert alert-danger d-flex justify-content-center align-items-center" role="alert">
                        <div >
                            Somenthing wrong with the login, please try again.
                        </div>
                    </div>
                    }
                <div className="modal-header border border-0 p-0 mb-3">
                    <h2 className="modal-title" style={{color:"#071C3F"}}>Register</h2>
                    <button type="button" className="btn-close" onClick={hideModal} aria-label="Close"></button>
                </div>
                <div className="row">
                    <div className="col">
                        <form>
                            <div class="input-group-sm mb-3">
                                <label      
                                    className="form-label">
                                        Name
                                </label>
                                <input type="text"
                                    className="form-control"
                                    aria-describedby="name"
                                    value={ name }
                                    onChange={ event => setName(event.target.value) }
                                />
                            </div>
                            <div className="input-group-sm mb-3">
                                <label      
                                    className="form-label">
                                        Last name
                                </label>
                                <input type="text"
                                    className="form-control"
                                    aria-describedby="lastname"
                                    value={ lastname }
                                    onChange={ event => setLastname(event.target.value) }
                                />
                            </div>
                            <div className="input-group-sm mb-3">
                                <label      
                                    className="form-label">
                                        Email address
                                </label>
                                <input type="email"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    value={ email }
                                    onChange={ event => setEmail(event.target.value) }
                                />
                            </div>
                            <div className="input-group-sm mb-3">
                                <label 
                                    className="form-label">
                                        Password
                                </label>
                                <input type="password"
                                    className="form-control"
                                    value={ password }
                                    onChange={ event => setPassword(event.target.value) }
                                />
                                 <button type="button" className="btn btn-link text-decoration-none"
                                    data-bs-target="#exampleModalToggle" 
                                    data-bs-toggle="modal">
                                        Go to Sign-in.
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
              
              
                <div className="modal-footer border border-0 p-0">
                    {/* <button type="button"
                        className="btn btn-secondary"
                        onClick={hideModal}>
                            Close
                    </button> */}
                    <button type="button"
                        className="btn btn-primary"
                        style={{backgroundColor:"#FBC006",  border:"none"}}
                        onClick={ event => handleRegister(event) }>
                            Submit
                    </button>
                </div>
              </div>
          </div>
      </div>
    </div>
  </>
};
